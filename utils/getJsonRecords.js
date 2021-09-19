import {
  getFiles as getGithubFiles,
  getGithubPreviewProps,
  parseJson,
} from "next-tinacms-github"

export default async (preview, previewData, contentDir) => {
  
  const fs = require("fs")
  const files = preview
    ? await getGithubFiles(
        contentDir,
        previewData.working_repo_full_name,
        previewData.head_branch,
        previewData.github_access_token
      )
    : await getLocalFiles(contentDir)
  const records = await Promise.all(
    files.map(async (file) => {
      const content = fs.readFileSync(`${file}`, "utf8")  
      if (preview) {
        const previewProps = await getGithubPreviewProps({
          ...previewData,
          fileRelativePath: file,
          parse: parseJson,
        })
        return {
          fileName: file.substring(contentDir.length + 1, file.length),
          fileRelativePath: file,
          data: previewProps.props.file?.data,
        }
      }
      
      return {
        fileName: file.substring(contentDir.length + 1, file.length),
        fileRelativePath: file,
        data: JSON.parse(content),
      }
    })
  )

  return records
}

const getLocalFiles = async (filePath) => {
  // grab all json files
  const fg = require("fast-glob")
  const files = await fg(`${filePath}**/*.json`)
  return files
}
