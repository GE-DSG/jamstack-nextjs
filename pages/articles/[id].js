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
          <div className={`row ${styles.card}`}>
            <div className="hero_image">
              <img src={ article.hero_image } alt="" />
            </div>
            <div className="blog__info">
              <h2>{ article.title }</h2>
              <h3>{ new Date(article.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' }) }</h3>
              <h6>{ article.author }</h6>
              <p>
              { article.description }
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className={`${layoutStyles.viewAllItems}`}>
            <Link href="/news">
              <a>
                <h6>View all articles</h6>
              </a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>  
  )
};

export default ArticleTemplate