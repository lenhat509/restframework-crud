import React from 'react'
import {AuthContext} from '../Auth'
import Login from '../Login'

const LoginConsumer = (props) => {
    return (
        <AuthContext.Consumer>
            {(value) => (
                <Login {...value} {...props}/>
            )}
        </AuthContext.Consumer>
    )
}

export default LoginConsumer