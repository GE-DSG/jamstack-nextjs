import Link from 'next/link'
import { getGithubPreviewProps, parseJson } from "next-tinacms-github"
import getGlobalStaticProps from "../utils/getGlobalStaticProps"
import Layout from "/components/layout/Layout"
import getReports from "../utils/getJsonRecords"

const Reports = props => {
  const reports = props.reports;

  return (
    <Layout>
      <div className="reports">
        <h2>Reports</h2>
        <p>Each report maintained as an individual JSON file in (<i>/content/reports/</i>) folder</p>
        <section>
        
        {reports.length > 1 && reports.map(report => (
          <Link key={ report.data.id } href={{ pathname: `/reports/${report.fileName}` }}>
            <a>
              <div className="hero_image">
                <img src={ report.data.hero_image } alt="" />
              </div>            
              <div className="report__info">
                <h4>{ report.data.title }</h4>                
                <div>{ new Date(report.data.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' }) }</div>
                
                <p>{ report.data.body }</p>
                <h6>{ report.data.author }</h6>
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
  const reports = await getReports(preview, previewData, "content/reports")
  const global = await getGlobalStaticProps(preview, previewData)

  if (preview) {
    // get data from github
    const file = (
      await getGithubPreviewProps({
        ...previewData,
      })
    ).props

    return {
      props: {
        ...file,
        ...global,
        preview,
        reports,        
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
      reports,
    },
  }
}

export default Reports
