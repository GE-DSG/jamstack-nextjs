import Link from 'next/link'
import { getGithubPreviewProps, parseJson } from "next-tinacms-github"
import getGlobalStaticProps from "../utils/getGlobalStaticProps"
import Layout from "/components/layout/Layout"

const News = props => {
  const articles = props.file.data;
  
  return (
    <Layout>
      <div className="articles">
        <h2>News articles</h2>
        <section>
        {articles.map((article) => (
          <Link key={ article.id } href={{ pathname: `/articles/${article.id}` }}>
            <a>
              <div>
                <h4>{ article.title }</h4>                
                <div>{ new Date(article.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' }) }</div>
                
                <p>{ article.description }</p>
                <h6>{ article.author }</h6>
              </div>
            </a>
          </Link>          
        ))}        
        </section>
      </div>    
    </Layout>
  )
}


/**
 * Fetch data with getStaticProps based on 'preview' mode
 */
export const getStaticProps = async function ({ preview, previewData }) {
  const global = await getGlobalStaticProps(preview, previewData)

  if (preview) {
    // get data from github
    const file = (
      await getGithubPreviewProps({
        ...previewData,
        fileRelativePath: "content/articles.json",
        parse: parseJson,
      })
    ).props

    return {
      props: {
        ...file,
        ...global,
      },
    }
  }
  // render from the file system.
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: "content/articles.json",
        data: (await import("../content/articles.json")).default,
      },
      ...global,
    },
  }
}

export default News
