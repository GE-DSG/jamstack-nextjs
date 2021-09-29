import * as React from "react";
import Link from 'next/link'
import styles from "./page.module.scss"

//import { getGithubPreviewProps, parseJson } from "next-tinacms-github"
//import { useGithubJsonForm, useGithubToolbarPlugins } from "react-tinacms-github"
//import getGlobalStaticProps from "../utils/getGlobalStaticProps"
import Layout from "/components/layout/Layout"
//import ArticleList from '/components/ArticleList'

const AboutUs = props => {
  
  return (
    <Layout>
      <div className={styles.aboutusPage}>      
        <section>
        <h2>AboutUs</h2>
        <p>coming soon!</p>
        </section>
      </div>    
    </Layout>
  )
}


export default AboutUs
