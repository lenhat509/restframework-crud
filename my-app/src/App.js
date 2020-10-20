import React, { useState, useEffect, useRef } from 'react';

function App() {
  
  const [posts, setPosts] = useState([])
  const postRef = useRef('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(postRef.current.value)
  }
  

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/posts')
    .then(res => res.json())
    .then(data => {
      setPosts(data)
    })
    
  }, [])


  return (
    <>
    <div>
      <form onSubmit={handleSubmit} method='POST'>
        <input type='text' name='post' ref={postRef}/>
        <input type='submit'/>
      </form>
    </div>
    <div> 
      {posts.map( post => (
        <div key={post.id}>{post.content}</div>
      ))}
    </div>
    </>
  );
}

export default App;
