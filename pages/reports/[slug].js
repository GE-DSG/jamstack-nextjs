import React,{useState,useEffect} from 'react';
import Layout from "../../components/layout/Layout";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getGithubPreviewProps, parseJson } from "next-tinacms-github"
import getGlobalStaticProps from "../../utils/getGlobalStaticProps"
import fs from 'fs';

const ReportTemplate = props => {  

  const data = props.data;

  return (
   <Layout>
      <section>        
        <div className="hero_image">
          <img src={ data.hero_image } alt="" />
        </div>
        <div className="blog__info">
          <h2>{ data.title }</h2>
          <div>{ new Date(data.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' }) }</div>
          <p>
          { data.body }
          </p>
        </div>      
      </section>
      <div>
        <Link href="/reports">
          <a>
            <h6>View all reports</h6>
          </a>
        </Link>
      </div>
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
      },
      data: (await import(`/content/reports/${ slug }.json`)).default,
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
