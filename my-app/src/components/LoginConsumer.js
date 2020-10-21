import React from 'react'
import {AuthContext} from './Auth'
import Login from './Login'

const LoginConsumer = () => {
    return (
        <AuthContext.Consumer>
            {(value) => (
                <Login {...value}/>
            )}
        </AuthContext.Consumer>
    )
}

export default LoginConsumer