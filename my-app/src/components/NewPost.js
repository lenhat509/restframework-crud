import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom'

const NewPost = ({userToken}) => {
    const contentRef = useRef('')
    const history = useHistory()

    const createPost = (e) => {
        e.preventDefault()
        if(!userToken || contentRef.current.value === "") return
        const url = "http://127.0.0.1:8000/api/post/new"
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${userToken}`
            },
            body: JSON.stringify({content: contentRef.current.value})
        })
        .then(res => res.json())
        .then(() => {
            history.push('/posts')
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <h1>New Post</h1>
            <form method="POST" onSubmit={createPost}>
                <input type='textarea' placeholder="Post's content" ref={contentRef}/>
                <input type='submit'/>
            </form>
        </div>
    )
}

export default NewPost
