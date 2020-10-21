import React from 'react'
import {AuthContext} from './Auth'
import PrivateRoute from './PrivateRoute'

const PrivateRouteConsumer = () => {
    return (
        <AuthContext.Consumer>
            {({userToken}) => (
                <PrivateRoute userToken={userToken}/>
            )}
        </AuthContext.Consumer>
    )
}

export default PrivateRouteConsumer
