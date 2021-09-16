import Link from 'next/link'
import Layout from "/components/layout/Layout"
import BlogList from '/components/BlogList'

//import { getGithubPreviewProps, parseJson } from "next-tinacms-github"
//import { useGithubJsonForm, useGithubToolbarPlugins } from "react-tinacms-github"
//import getGlobalStaticProps from "../utils/getGlobalStaticProps"




export default function Blogs({ allBlogs }) {
//const Blogs = ({ allBlogs }) => {
//console.log(props);
//console.log(allBlogs);

  //const [data, form] = useJsonForm(jsonFile, formOptions)
  //usePlugin(form)

  //useCreateBlogPage(props.posts)
  //const [styleData] = useGlobalStyleForm(props.styleFile, props.preview)
//console.log(getStaticProps);
//console.log(props.file.data);
//console.log(props);
  //const articles = props.file.data;
  //const articles = props.articles;
  return (
    <Layout>
      <div className="blog_posts">
        <h2>Blog posts</h2>
        <section>
          <BlogList allBlogs={allBlogs} />
        </section>
      </div>    
    </Layout>
  )
}


//export default Blogs

Blogs.getInitialProps = async function() {
  
  // get all blog data for list
  const posts = (context => {
    const keys = context.keys()
    const values = keys.map(context)
    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.')
      const value = values[index]
      // Parse yaml metadata & markdownbody in document
      //const document = matter(value.default)
      return {
        //document,
        slug,
      }
    })
    return data
  })(require.context('../content/blogs', true, /\.json$/))

  return {
/*    
    jsonFile: {
      fileRelativePath: `data/config.json`,
      data: content.default,
    },
*/
    allBlogs: posts,
  }
}