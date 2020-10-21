import React, {useState} from 'react'
export const AuthContext = React.createContext()

const Auth = ({children}) => {
    const [userToken, setUserToken] = useState(null)

    const login = (username, password)=> {
        const url = 'http://127.0.0.1:8000/api/token'
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({username, password})
        })
        .then(res => res.json())
        .then(data => {
          setUserToken(data.token)
        })
        .catch(errors => console.log(errors))
    }

    return (
        <AuthContext.Provider value={{userToken: userToken, login: login}}>
            {children}
        </AuthContext.Provider>
    )
}

export default Auth
