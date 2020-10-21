import {AuthContext} from '../Auth'

import React from 'react'
import NewPost from '../NewPost'

const NewPostConsumer = (props) => {
    return (
        <AuthContext.Consumer>
            {({userToken}) => (
                <NewPost userToken={userToken} {...props}/>
            )}
        </AuthContext.Consumer>
    )
}

export default NewPostConsumer
