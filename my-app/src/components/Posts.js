import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

function Posts() {
  
  const [posts, setPosts] = useState([])
  

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/posts')
    .then(res => res.json())
    .then(data => {
      setPosts(data)
    })
    
  }, [])


  return (
    <>
      {posts.map( post => (
        <div key={post.id}>
          <Link to={`post/${post.id}`}>{post.content}</Link>
          <br/>
        </div>
      ))}
    </>
    
   
  );
}

export default Posts;
