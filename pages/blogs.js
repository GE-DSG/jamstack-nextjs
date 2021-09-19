import Link from 'next/link'
import Layout from "/components/layout/Layout"
import BlogListItem from '/components/layout/BlogListItem'


export default function Blogs({ allBlogs }) {


  return (
    <Layout>
      <div className="blog_posts">
        <h2>Blog posts</h2>
        <p>Each post maintained as an individual JSON file in (<i>/public/blogs/</i>) folder</p>
        <section>
          <ul className="list">
            {allBlogs.length > 1 && allBlogs.map(post => (
              <BlogListItem post={post} />
            ))}
          </ul>
        </section>
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
