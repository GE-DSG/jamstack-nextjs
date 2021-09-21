import Layout from "../../components/layout/Layout";
import Link from 'next/link';

import articlelist from '../../content/articles.json';

export const getStaticProps = async ({ params }) => {
  const articles = articlelist.filter((p) => p.id.toString() === params.id);

  return {
    props: {
      article: articles[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = articlelist.map((article) => ({
    params: { id: article.id.toString() },
  }));

  return { paths, fallback: false };
};


const ArticleTemplate = ({ article }) => {

  return (
   <Layout>
      <section>
      <div className="container-fluid-custom">
        <h2>{ article.title }</h2>
        <div>{ new Date(article.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' }) }</div>

        <p>{ article.description }</p>
        <h6>{ article.author }</h6>
        </div>
      </section>
      <div>
        <Link href="/news">
          <a>
            <h6>View all articles</h6>
          </a>
        </Link>
      </div>
    </Layout>
  )
};

export default ArticleTemplate