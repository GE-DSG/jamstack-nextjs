import Link from 'next/link'
import { getGithubPreviewProps, parseJson } from "next-tinacms-github"
import getGlobalStaticProps from "../utils/getGlobalStaticProps"
import Layout from "/components/layout/Layout"
import styles from "./page.module.scss"
import layoutStyles from "/components/layout/layout.module.scss"

const News = props => {
  const articles = props.file.data;
  
  return (
    <Layout>
      <div className={`${styles.articles} news-container`}>
        <div className="container-fluid-custom">
          <div className={`row pb-3`}>
            <div className="col-12 pl-0">
              <h2>News articles</h2>
            </div>
            <div className="col-12 pl-0">
              <p>Articles maintained in a single JSON file (<i>/content/articles.json</i>)</p>
            </div>
          </div>
        </div>
        <div className="container-fluid-custom">
          <div className={`row pb-5`}>
            <section>
              {articles.length > 1 && articles.map(article => (
                <ul className={`${layoutStyles.list} list`}>
                  <Link
                    key={ article.id }
                    href={{ pathname: `/articles/${article.id}` }}
                  >      
                    <a>
                      <li>
                        <div className={`row pl-2 pr-2 pt-3 pb-3 ${layoutStyles.card}`}>
                          <div className={`${layoutStyles.heroImage} col-lg-4 col-md-4 col-sm-12 mb-4 mb-md-0`}>
                            <img src={ article.hero_image } alt="" />
                          </div>

                          <div className="news__info col-lg-8 col-md-8 col-sm-12">
                            <h2 className={styles.title}>{ article.title }</h2>
                            <h6 className="pb-3">{ new Date(article.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' }) }</h6>
                            <p>
                            { article.description }
                            </p>
                            <h6>{ article.author }</h6>
                          </div>
                        </div>
                      </li>
                    </a>
                  </Link>
                </ul>                  
              ))}            
            </section>
          </div>
        </div>
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
