/*
import Head from "@components/head"
import Layout from "@components/layout"
import Container from "@components/container"
import { getBlogPosts } from "@utils"
import { useGlobalStyleForm } from "@hooks"
import getGlobalStaticProps from "../../utils/getGlobalStaticProps"
import useCreateBlogPage from "../../hooks/useCreateBlogPage"
import BlogCard from "@components/blogCard"
*/

import * as React from "react";

import Link from 'next/link'

import { getGithubPreviewProps, parseJson } from "next-tinacms-github"
import { useGithubJsonForm, useGithubToolbarPlugins } from "react-tinacms-github"
import getGlobalStaticProps from "../utils/getGlobalStaticProps"
import Layout from "/components/layout/Layout"
//import ArticleList from '/components/ArticleList'

const News = props => {
  //useCreateBlogPage(props.posts)
  //const [styleData] = useGlobalStyleForm(props.styleFile, props.preview)
//console.log(getStaticProps);
//console.log(props.file.data);
//console.log(props);
  const articles = props.file.data;
  //const articles = props.articles;
  return (
    <Layout>
      <div className="articles">
        <h2>News articles</h2>
        <section>
        {articles.map((article) => (
          <Link key={article.id} href={{ pathname: `/articles/${article.id}` }}>
            <a>
              <div>
                <h4>{article.title}</h4>                
                <p>{article.description}</p>
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
