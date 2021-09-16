import Layout from "../../components/layout/Layout";
import Link from 'next/link';


const BlogTemplate = ({ blog }) => {

  return (
   <Layout>
      <section>
      </section>  
      <div>
        <Link href="/blogs">
          <a>
            <h6>View all blog posts</h6>
          </a>
        </Link>     
      </div>
    </Layout>
  )
};

export default BlogTemplate

