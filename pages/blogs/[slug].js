import React,{useState,useEffect} from 'react';
import Layout from "../../components/layout/Layout";
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from "./blogs.module.scss"


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
        <div className={`row ${styles.card}`}>
        <div className="hero_image">
          <img src={ data.hero_image } alt="" />
        </div>
        <div className="blog__info">
          <h2>{ data.title }</h2>
          <h3>{ new Date(data.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' }) }</h3>
          <p>
          { data.body }
          </p>
        </div>
        </div>


        </div>
        <div className="row">
        <div>
        <Link href="/blogs">
          <a>
            <h6>View all blog posts</h6>
          </a>
        </Link>
      </div>

        </div>
      </section>
 
    </Layout>
  )
};

export default BlogTemplate
