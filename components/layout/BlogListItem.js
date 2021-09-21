import React,{useState,useEffect} from 'react';
import Link from "next/link";
import styles from "./layout.module.scss"
export default function BlogListItem({ post }) {
  
  const [data, setData] = useState([]);
  const getData = () => {
    fetch(`/blogs/${post.slug}.json`,
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
  
    <>
      
      <ul className={`${styles.list} list`}>
          <Link
            key='bali'
            href={{ pathname: `/blogs/${post.slug}` }}
          >
            <a>
            <li>
          <div className={`row pl-2 pr-2 pt-3 pb-3 ${styles.card}`}>
              <div className={`${styles.heroImage} col-4`}>
                <img src={ data.hero_image } alt="" />
              </div>

              <div className="blog__info col-8">
                <h2>{ data.title }</h2>
                <h6 className="pb-3">{ new Date(data.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' }) }</h6>
                <p>
                { data.body }
                </p>
              </div>

              </div>
            </li>
            </a>
          </Link>
      </ul>

    </>
  );
 
};

