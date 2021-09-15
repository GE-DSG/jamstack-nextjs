import * as React from "react";
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


export default ({ article }) => (
  <Layout>
    <section>
      <h2>{ article.title }</h2>
            
      <p>{ article.description }</p>
    </section>  
    <div>
      <Link href="/news">
        <a>
          <h6>View all articles</h6>
        </a>
      </Link>     
    </div>
  </Layout>
  
);
