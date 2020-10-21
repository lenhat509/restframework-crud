import React from 'react'
import {AuthContext} from '../Auth'
import PrivateRoute from '../PrivateRoute'

const PrivateRouteConsumer = (props) => {
    return (
        <AuthContext.Consumer>
            {({userToken}) => (
                <PrivateRoute userToken={userToken} {...props}/>
            )}
        </AuthContext.Consumer>
    )
}

export default PrivateRouteConsumer
