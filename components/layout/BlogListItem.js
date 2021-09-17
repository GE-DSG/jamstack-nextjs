import React,{useState,useEffect} from 'react';
import Link from "next/link";

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
      
      <ul className="list">
          <Link
            key='bali'
            href={{ pathname: `/blogs/${post.slug}` }}
          >
            <a>
            <li>
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
            </li>
            </a>
          </Link>
      </ul>

    </>
  );
 
};

