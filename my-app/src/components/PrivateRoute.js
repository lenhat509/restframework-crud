import React from 'react'
import {Route, Redirect, useLocation} from 'react-router-dom'
import { useAuth } from './Auth'

const PrivateRoute = ({component: Component, ...rest}) => {
    const { userToken } = useAuth()
    const location = useLocation()
    return (
    <>
        {userToken
            ? <Route {...rest} render={(props) => (
                <Component {...props}/>
                )} />
            : <Redirect to={{
                pathname: '/login',
                state: location
            }}/>}
    </>
    )
}

export default PrivateRoute
