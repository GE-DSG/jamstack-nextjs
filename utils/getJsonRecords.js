import {
  parseJson,
} from "next-tinacms-github"

export default async (contentDir) => {
  const fs = require("fs")  
  
  const files = await getLocalFiles(contentDir)

  const records = await Promise.all(
  
    files.map(async (file) => {      
      const content = fs.readFileSync(`${file}`, "utf8")

      return {
        slug: file.substring(contentDir.length + 1, file.length - 5),
        fileName: file.substring(contentDir.length + 1, file.length),
        fileRelativePath: file,
        data: parseJson(content),
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
