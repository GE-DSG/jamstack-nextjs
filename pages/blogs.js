import Link from 'next/link'
import Layout from "/components/layout/Layout"
import BlogListItem from '/components/layout/BlogListItem'
import styles from "./page.module.scss"


export default function Blogs({ allBlogs }) {
  return (
    <Layout>
      <div className={`${styles.blogs} blog_posts`}>
      <div className="container-fluid-custom">
      <div className={`row pb-3`}>
      <div className="col-12 pl-0">
        <h2>Blog posts</h2>
        </div>
        <div className="col-12 pl-0">
        <p>Each post maintained as an individual JSON file in (<i>/public/blogs/</i>) folder</p>
        </div>
        </div>
        </div>
    <div className="container-fluid-custom">
      <div className={`row pb-5`}>
        <section>
          <ul className={styles.list}>
            {allBlogs.length > 1 && allBlogs.map(post => (
              <BlogListItem post={post} />
            ))}
          </ul>
        </section>
        </div>
        </div>
      </div>
    </Layout>
  )
}


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
        slug,
      }
    })
    return data
  })(require.context('../public/blogs', true, /\.json$/))

  return {
    allBlogs: posts,
  }
}
