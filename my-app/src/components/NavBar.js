import React from 'react'
import {Link} from 'react-router-dom'
const NavBar = () => {
    return (
        <div>
            <Link to="/login">Login</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/new">New</Link>
        </div>
    )
}

export default NavBar
