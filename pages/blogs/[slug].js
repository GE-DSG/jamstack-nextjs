import React,{useState,useEffect} from 'react';
import Layout from "../../components/layout/Layout";
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from "./blogs.module.scss"
import layoutStyles from "/components/layout/layout.module.scss"

const BlogTemplate = ({ blog }) => {

  const router = useRouter();
  const { slug } = router.query;
  const [data, setData] = useState([]);
  const getData = () => {
    fetch(`/blogs/${ slug }.json`,
      {
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
    .then(function(response){
      //console.log(response)
      return response.json();
    })
    .then(function(itemJson) {
      //console.log(itemJson);
      setData(itemJson)
    });
  }
  useEffect(()=>{
    getData()
  },[])


  return (
   <Layout>
      <section className={styles.blogs} >

      <div className="container-fluid-custom">
        <div className="row">
          <div className={`${layoutStyles.back}`}>
            <Link href="/blogs">
              <a>
                <h6> ← Back</h6>
              </a>
            </Link>
          </div>
          </div>
        </div>

        <div className="container-fluid-custom">
          <div className={`${styles.card}`} >
          <div className={`row ${styles.card}`}>
            <div className="pt-3 pb-3 pl-3 pr-3">
            <div className={styles.heroImage}>
              <img src={ data.hero_image } alt="general electric" />
            </div>
            <div className="blog__info">
              <h2>{ data.title }</h2>
              <h6>{ new Date(data.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' }) }</h6>
              <p>{ data.author }</p>
              <p>
              { data.body }
              </p>
            </div>
            </div>
          </div>
          </div>
        </div>
        <div className="container-fluid-custom">
        <div className="row">
          <div className={`${layoutStyles.viewAllItems}`}>
            <Link href="/blogs">
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

export default BlogTemplate
