import Link from 'next/link'
import { getGithubPreviewProps, parseJson } from "next-tinacms-github"
import getGlobalStaticProps from "../utils/getGlobalStaticProps"
import Layout from "/components/layout/Layout"
import getJsonRecords from "../utils/getJsonRecords"
import styles from "./page.module.scss"
import layoutStyles from "/components/layout/layout.module.scss"

const Reports = props => {
  const data = props.records;

  return (
    <Layout>
      <div className={`${styles.reports} reports-container`}>
        <div className="container-fluid-custom">
          <div className={`row pb-3`}>
            <div className="col-12 pl-0">
              <h2>Reports</h2>
            </div>
            <div className="col-12 pl-0">
              <p>Each report maintained as an individual JSON file in (<i>/content/reports/</i>) folder</p>
            </div>
          </div>
        </div>
        <div className="container-fluid-custom">
          <div className={`row pb-5`}>
            <section>
              {data.length > 1 && data.map(report => (
                <ul className={`${layoutStyles.list} list`}>
                  <Link
                    key={ report.data.id }
                    href={{ pathname: `/reports/${report.slug}` }}
                  > 
                    <a>
                      <li>
                        <div className={`row pl-2 pr-2 pt-3 pb-3 ${layoutStyles.card}`}>
                          <div className={`${layoutStyles.heroImage} col-4`}>
                            <img src={ report.data.hero_image.src } alt={ report.data.hero_image.alt } />
                          </div>

                          <div className="report__info col-8">
                            <h2>{ report.data.title }</h2>
                            <h6 className="pb-3">{ new Date(report.data.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' }) }</h6>
                            <p>
                            { report.data.body }
                            </p>
                            <h6>{ report.data.author }</h6>
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
  const records = await getJsonRecords("content/reports")
  
  if (preview) {
    // get data from github
    const file = (
      await getGithubPreviewProps({
        ...previewData,
        fileRelativePath: "content/user.json",
        parse: parseJson,
      })
    ).props

    return {
      props: {
        ...file,
        ...global,        
        records,
      },
    }
  }
  // render from the file system.
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      ...global,
      records,
    },
  }
}

export default Reports
