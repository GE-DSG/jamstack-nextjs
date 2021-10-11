//import * as React from "react"
import React, { useState, useEffect } from "react";
import Layout from "/components/layout/Layout"
import Link from 'next/link'
import { getGithubPreviewProps, parseJson } from "next-tinacms-github"
import getGlobalStaticProps from "/utils/getGlobalStaticProps"
import fs from 'fs'
import styles from "./reports.module.scss"
import layoutStyles from "/components/layout/layout.module.scss"

import { useCMS, withTina, useForm, usePlugin } from "tinacms"
import { useGithubJsonForm, useGithubToolbarPlugins } from "react-tinacms-github"

import Editor from "/components/utilities/Editor"

//import dynamic from 'next/dynamic'
//import { InlineWysiwyg } from "/components/utilities/InlineWysiwyg"
//import { InlineWysiwyg } from "react-tinacms-editor"

//import RichText from "/components/utilities/rich-text"
//import MarkdownWrapper from "/components/utilities/markdown-wrapper"


import {
  InlineForm,
  InlineBlocks,
  BlocksControls,
  InlineText,
  InlineTextarea,
  InlineGroup,
  InlineField
} from "react-tinacms-inline";

export const IMAGE_FIELDS = [
  {
    name: "src",
    label: "Image Source",
    component: "image",
    parse: media => `/static/${media.filename}`,
    uploadDir: () => '/public/static/',
    previewSrc: fullSrc => fullSrc.replace('/public', '')
  },
  {
    name: "alt",
    label: "Alt Text",
    component: "text",
  },
];

export const REPORT_FIELDS = [
  {
    name: 'id',
    label: 'ID',
    component: 'text',
  },
  {
    name: 'title',
    label: 'Title',
    component: 'text',
    required: true,
  },
  {
    name: 'hero_image',
    label: 'Hero image',
    component: "group",
    fields: IMAGE_FIELDS,
  },
  {
    name: 'date',
    label: 'Date',
    component: 'date',
    dateFormat: 'MMMM DD, YYYY',
    timeFormat: false,
  },
  {
    name: 'author',
    label: 'Author',
    component: 'text',
  },
  {
    name: 'body',
    label: 'Body',
    component: 'html',
/*
    parse: media => `/static/${media.filename}`,
    uploadDir: () => '/public/static/',
    previewSrc: fullSrc => fullSrc.replace('/public', '')


    //imageProps: [{
    props: [{
      parse: (media) => `static/${media.filename}`,
      uploadDir: () => 'public/static/',
      previewSrc: fullSrc => fullSrc.replace('/public', '')
    }],
*/

  },
];


const ReportTemplate = ({ file, preview }) => {

  //const ReactMarkdown = dynamic(() => import("react-markdown"), { ssr: false });

//console.log(file);
  const formOptions = {
    label: 'Report Page',
    fields: REPORT_FIELDS,
  }

  const cms = useCMS();
  //const [showModal, setShowModal] = React.useState(false);

  const [data, form] = useGithubJsonForm(file, formOptions)
  usePlugin(form)
  useGithubToolbarPlugins()

  const [editorLoaded, setEditorLoaded] = useState(false);
  const [editordata, setData] = useState("");

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return (

    <Layout>

      <InlineForm form={form} >

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
              <InlineGroup
                focusRing={{ offset: 20 }}
                insetControls={true}
                name="."
                fields={ REPORT_FIELDS }
              >
                <div className="col-12 pt-3 pb-3 pl-3 pr-3">
                  <div className={styles.heroImage}>
                   <InlineGroup
                      name="hero_image"
                      focusRing={{ offset: 0, borderRadius: 10 }}
                      insetControls={true}
                      fields={IMAGE_FIELDS}
                    >
                    <img className={styles.image}
                    src={data.hero_image.src}
                    alt={data.hero_image.alt}
                    />
                    </InlineGroup>

                  </div>
                  <div className="blog__info">
                    <h2><InlineText name="title" focusRing={{ offset: 5, borderRadius: 10}} /></h2>
                    <h6>{ new Date(data.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' }) }</h6>
                    <p><InlineText name="author" focusRing={{ offset: 5, borderRadius: 10}} /></p>

                      <InlineField name="body">
                      {({ body }) => {
                        if (cms.enabled) {
                          return (
                            <Editor
                              data={ data.body }
                              onChange={(editordata) => {
                                setData(editordata);
                                data.body = editordata;
                                form.finalForm.blur('body');
                              }}
                              onBlur={(editordata) => {
                                setData(editordata);
                                data.body = editordata;
                                form.finalForm.blur('body');
                              }}
                              editorLoaded={editorLoaded}
                            />
                          )
                        }
                        else {
                          return <div dangerouslySetInnerHTML={{__html: data.body }}/>
                        }
                      }}
                      </InlineField>
                      {/*JSON.stringify(editordata)*/}
                  </div>
                </div>
              </InlineGroup>
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

      </InlineForm>

    </Layout>

  )
};
/*
export const onChange = async function ({ data }) {
  console.log('onChange');
  console.log(data);
}
*/

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
