import React, {useRef} from 'react'
import { Redirect, useLocation } from 'react-router-dom'

const Login = ({login, userToken}) => {
    const usernameRef = useRef('')
    const pwRef = useRef('')
    const location = useLocation()

    const handleLogin = (e) => {
        e.preventDefault()
        if(usernameRef.current.value !== '' && pwRef.current.value !== ''){
            login(usernameRef.current.value, pwRef.current.value)
        }
            
    }

    const { pathname } = location.state || { pathname : '/posts'}
    return (
        
        <>
            {userToken
            ?   <Redirect to={pathname}/> 
            :   <form method="POST" onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <input type="text" placeholder="Username" ref={usernameRef}/>
                    <input type="password" placeholder="Password" ref={pwRef}/>
                    <input type="submit"/>
                </form>      
            }
        </>
    )
}

export default Login
        