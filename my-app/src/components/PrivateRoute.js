import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({userToken, component: Component, ...rest}) => {
    console.log(rest)
    return (
    <>
        {userToken
            ? <Route {...rest} render={(props) => (
                <Component {...props}/>
                )} />
            : <Redirect to={{
                pathname: '/login',
                state: rest.location
            }}/>}
    </>
    )
}

export default PrivateRoute
