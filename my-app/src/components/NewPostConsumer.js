import {AuthContext} from './Auth'

import React from 'react'
import NewPost from './NewPost'

const NewPostConsumer = () => {
    return (
        <AuthContext.Consumer>
            {({userToken}) => (
                <NewPost userToken={userToken}/>
            )}
        </AuthContext.Consumer>
    )
}

export default NewPostConsumer
