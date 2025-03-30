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

    <ul>
      {blogs.map((blog) => (
        <li key={blog.slug}>{blog.title}</li>
      ))}
    </ul>
  )

}
