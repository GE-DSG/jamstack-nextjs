import Link from "next/link";
//import ReactMarkdown from "react-markdown";

const BlogList = (props) => {

  function truncateSummary(content) {
    return content.slice(0, 200).trimEnd();
  }

  function reformatDate(fullDate) {
    const date = new Date(fullDate)
    return date.toDateString().slice(4);
  }

//console.log(props);  


  const posts = props.allBlogs

//console.log(posts);
  const test = console.log(posts);
  return (
  
    <>
      <ul className="list">
        {posts.length > 1 && posts.map(post => (
          
          <Link
            key={post.slug}
            href={{ pathname: `/blogs/${post.slug}` }}
          >

            <a>
            <li>
              <div className="hero_image">
                <img src="/static/mahkeo-monkey.jpg" alt="" />
              </div>
              <div className="blog__info">
                <h2>TITLE</h2>
                <h3>September 16, 2021</h3>
                <p>
                This is a test.
                </p>
              </div>
            </li>
            </a>
          </Link>

        
        ))}
      </ul>

    </>
  );
  

};

export default BlogList;
