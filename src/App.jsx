import { useState, useEffect } from 'react'

export default function App() {

  const [blogs, setBlogs] = useState([])

  //Fetching dei dati
  function fetchBlogPosts() {
    fetch("http://localhost:3000/api/v1/blog_posts")
      .then(res => res.json())
      .then(data => setBlogs(data))
  }

  useEffect(fetchBlogPosts, [])

  return (

    <>

      <div className="header text-center my-4">
        <h1>Posts</h1>
      </div>

      <ul>
        {blogs.map((blog) => (
          <div className="container" key={blog.slug}>
            <li style={{ listStyle: "none" }}>
              <img src={blog.image} alt={blog.slug} />
              <h3>{blog.title}</h3>
              <p>{blog.content}</p>
            </li>
          </div>
        ))}
      </ul>

    </>


  )

}
