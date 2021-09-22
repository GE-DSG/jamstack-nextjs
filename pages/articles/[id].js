import Layout from "../../components/layout/Layout";
import Link from 'next/link';
import articlelist from '../../content/articles.json';
import styles from "./articles.module.scss"
import layoutStyles from "/components/layout/layout.module.scss"

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
      <section className={styles.articles} >

      <div className="container-fluid-custom">
        <div className="row">
          <div className={`${layoutStyles.back}`}>
            <Link href="/news">
              <a>
                <h6> ← Back</h6>
              </a>
            </Link>
          </div>
          </div>
        </div>

        <div className="container-fluid-custom">
          <div className={`row ${styles.card}`}>
          <div className="pt-3 pb-3 pl-3 pr-3">
            <div className={styles.heroImage}>
              <img src={ article.hero_image } alt="general electric" />
            </div>
            <div className="blog__info">
              <h2>{ article.title }</h2>
              <h6>{ new Date(article.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' }) }</h6>
              <p>{ article.author }</p>
              <p>
              { article.description }
              </p>
            </div>
            </div>
          </div>
        </div>

       <div className="container-fluid-custom">
        <div className="row">
          <div className={`${layoutStyles.viewAllItems}`}>
            <Link href="/news">
              <a>
                <h6>View all blog posts</h6>
              </a>
            </Link>
          </div>
          </div>
        </div>
      </section>

    </Layout>  
  )
};

export default ArticleTemplate