import App from 'next/app'
import '../styles/css/ge_unified.style.css'
import '../styles/css/iconography.css'
import '../styles/css/styles.scss'
import '../styles/css/social_media_links.theme.css'
import { useRouter } from 'next/router'

import { CreateReportPlugin } from '../components/plugins/reportCreator'

import { TinaCMS, TinaProvider } from 'tinacms'
import {
  GithubClient,
  TinacmsGithubProvider,
  GithubMediaStore,
} from 'react-tinacms-github'

export default class Site extends App {
  cms: TinaCMS

  constructor(props) {
    super(props)

    const github = new GithubClient({
      proxy: '/api/proxy-github',
      authCallbackRoute: '/api/create-github-access-token',
      clientId: process.env.GITHUB_CLIENT_ID,
      baseRepoFullName: process.env.REPO_FULL_NAME, // e.g: tinacms/tinacms.org,
      baseBranch: process.env.BASE_BRANCH, // e.g. 'master' or 'main' on newer repos
    })

    this.cms = new TinaCMS({
      enabled: !!props.pageProps.preview,
      apis: {
        github,
      },
      media: new GithubMediaStore(github),
      sidebar: props.pageProps.preview,
      toolbar: props.pageProps.preview,
    })

    import("react-tinacms-editor").then(({ HtmlFieldPlugin }) => {
      this.cms.plugins.add(HtmlFieldPlugin)
    })

    this.cms.plugins.add(CreateReportPlugin)
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <TinaProvider cms={this.cms}>
        <TinacmsGithubProvider
          onLogin={onLogin}
          onLogout={onLogout}
          error={pageProps.error}
        >
          <EditLink cms={this.cms} />
          <Component {...pageProps} />
        </TinacmsGithubProvider>
      </TinaProvider>
    )
  }
}

const onLogin = async () => {
const token = localStorage.getItem('tinacms-github-token') || null
const headers = new Headers()

  if (token) {
    headers.append('Authorization', 'Bearer ' + token)
  }

  const resp = await fetch(`/api/preview`, { headers: headers })
  const data = await resp.json()

  if (resp.status == 200) window.location.href = window.location.pathname
  else throw new Error(data.message)
}

const onLogout = () => {
  return fetch(`/api/reset-preview`).then(() => {
    window.location.reload()
  })
}

export interface EditLinkProps {
  cms: TinaCMS
}

export const EditLink = ({ cms }: EditLinkProps) => {
  const router = useRouter()
  if(cms.enabled) {
    return (
      <button className="button-primary button-position" onClick={() => cms.toggle()}>
        {cms.enabled ? 'Exit Edit Mode' : 'Edit This Site'}
      </button>
    )
  } else {
    return (
      null
    )
  }
}
