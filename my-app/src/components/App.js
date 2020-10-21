import React, { useState, useEffect, useRef } from 'react';
import Post from './Post'
import Login from './LoginConsumer'
import NewPost from './NewPostConsumer'
import NavBar from './NavBar'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import PrivateRoute from './PrivateRouteConsumer'

function App() {
  // const [userToken, setUserToken] = useState(null)
  

  // const login = (username, password)=> {
  //   const url = 'http://127.0.0.1:8000/api/token'
  //   fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({username, password})
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     setUserToken(data.token)
  //   })
  //   .catch(errors => console.log(errors))
  // }

  return (
    
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <PrivateRoute exact path="/new" component={NewPost}/>
        <Route exact path="/login" render={(props) => (
          <Login {...props} />
        )}/>
        <Route exact path="/posts" component={Post}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
