import React from 'react';
import Posts from './Posts'
import Login from './Login'
import NewPost from './NewPost'
import NavBar from './NavBar'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Post from './Post'

function App() {
 
  return (
    
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <PrivateRoute exact path="/new" component={NewPost}/>
        <PrivateRoute exact path="/post/:id" component={Post}/>
        <Route exact path="/login" render={(props) => (
          <Login {...props} />
        )}/>
        <Route exact path="/posts" component={Posts}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
