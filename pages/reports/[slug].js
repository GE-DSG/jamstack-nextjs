//import React,{useState,useEffect} from 'react';
import Layout from "../../components/layout/Layout";
import Link from 'next/link';
//import { useRouter } from 'next/router';
import { getGithubPreviewProps, parseJson } from "next-tinacms-github"
import getGlobalStaticProps from "../../utils/getGlobalStaticProps"
import fs from 'fs';
import styles from "./reports.module.scss"
import layoutStyles from "/components/layout/layout.module.scss"

const ReportTemplate = props => {  

  const data = props.file.data;

  return (
   <Layout>
      <section className={styles.reports} >

      <div className="container-fluid-custom">
        <div className="row">
          <div className={`${layoutStyles.back}`}>
            <Link href="/reports">
              <a>
                <h6> ← Back</h6>
              </a>
            </Link>
          </div>
          </div>
        </div>

        <div className="container-fluid-custom">
          <div className={`row ${styles.card}`}>
          <div className="pt-3 pb-3 pl-3 pr-3">
            <div className={styles.heroImage}>
              <img src={ data.hero_image } alt="general electric" />
            </div>
            <div className="blog__info">
              <h2>{ data.title }</h2>
              <h6>{ new Date(data.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' }) }</h6>
              <p>{ data.author }</p>
              <p>
              { data.body }
              </p>
            </div>
            </div>
          </div>
        </div>
        
        <div className="container-fluid-custom">
          <div className="row">
            <div className={`${layoutStyles.viewAllItems}`}>
              <Link href="/reports">
                <a>
                  <h6>View all reports</h6>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  
  )
};

/**
 * Fetch data with getStaticProps based on 'preview' mode
 */  
export const getStaticProps = async function ({ preview, previewData, params }) {
  const global = await getGlobalStaticProps(preview, previewData)
  const { slug } = params
  
  if (preview) {
    // get data from github
    const file = (
      await getGithubPreviewProps({
        ...previewData,
        fileRelativePath: `/content/reports/${ slug }.json`,
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
        fileRelativePath: `/content/reports/${ slug }.json`,        
        data: (await import(`/content/reports/${ slug }.json`)).default,
      },      
      ...global,
    },
  }
}


export const getStaticPaths = async ()=> {
  const files = fs.readdirSync('content/reports');
  const paths = files.map(filename=>({
    params:{
      slug: filename.replace('.json', '')
    }
  })
  )

  return {
    paths,
    fallback:false
  }
}


export default ReportTemplate
