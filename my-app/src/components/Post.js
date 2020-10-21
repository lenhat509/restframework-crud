import React, { useEffect, useState, useRef } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useAuth } from './Auth'

const Post = () => {
    const contentRef = useRef('')
    const { id } = useParams()
    const history = useHistory()
    const { userToken } = useAuth()
    
    useEffect(() => {
        const url = `http://127.0.0.1:8000/api/post/${id}`
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": 'application/json',
                'Authorization': `Token ${userToken}`
            }
        })
        .then(res => res.json())
        .then(data => {
            contentRef.current.value = data.content
        })
        .catch(err => console.log(err))
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault()
        if(contentRef.current.value === "") return
        const url = `http://127.0.0.1:8000/api/post/${id}/update`
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${userToken}`
            },
            body : JSON.stringify({
                content: contentRef.current.value
            })
        })
        .then(res => res.json())
        .then(() => {
            history.push('/posts')
        })
        .catch(err => console.log(err))
    }

    const handleDelete = () => {
        const url = `http://127.0.0.1:8000/api/post/${id}/delete`
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${userToken}`
            },
        })
        .then(res => res.json())
        .then(() => {
            history.push('/posts')
        })
        .catch(err => console.log(err))
    }
    return (
        <>
        <form method="POST" onSubmit={handleUpdate}>
            <h1>Update post</h1>
            <input type="textarea" placeholder="Content" ref={contentRef} />
            <input type="submit" value="Update"/>
        </form>
        <button onClick={handleDelete}>
            Delete
        </button>
        </>
    )
}

export default Post
