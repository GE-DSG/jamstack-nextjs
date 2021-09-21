import * as React from "react";

import Head from 'next/head'
import { getGithubPreviewProps, parseJson } from "next-tinacms-github"
import { useGithubJsonForm, useGithubToolbarPlugins } from "react-tinacms-github"

import getGlobalStaticProps from "../utils/getGlobalStaticProps"
import Layout from "../components/layout/Layout";

import { useCMS, withTina, useForm, usePlugin } from "tinacms";
import { InlineForm, InlineBlocks } from "react-tinacms-inline";
import { Theme } from "../components/utilities/theme";
import { TinaModal } from "../components/utilities/modal";
import { useRouter } from 'next/router'

import { PAGE_BLOCKS } from "../components/blocks/page_blocks";

//export default function Home({ file, preview }) {
const User = ({ file, preview }) => {
  const formOptions = {
    label: 'Login Page',
    onSubmit: (values) => {
      setShowModal(true);
    },
  }

  const [showModal, setShowModal] = React.useState(false);

  /*
   ** Register a JSON Tina Form
   */
  const [data, form] = useGithubJsonForm(formOptions)
  usePlugin(form)

  useGithubToolbarPlugins()

  return (
    <Layout>
      <InlineForm form={form}>
        <Theme>
          <div className="user">
            <h2>Login Page</h2>
            <section>
              <EditLink />
            </section>
          </div>    
        </Theme>
      </InlineForm>
      {showModal && (
        <TinaModal
          close={() => {
            setShowModal(false);
          }}
        />
      )}
    </Layout>
  )
}

export const EditLink = () => {
  const cms = useCMS()  
  if(cms.enabled) {
    return (
      " "
    )
  } else {
    return (
      <button onClick={() => cms.toggle()}>
        {cms.enabled ? 'Exit Edit Mode' : 'Login to Edit'}
      </button>
    )
  }
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
        fileRelativePath: "content/home.json",
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
        fileRelativePath: "content/home.json",
        data: (await import("../content/home.json")).default,
      },
      ...global,
    },
  }
}

export default User