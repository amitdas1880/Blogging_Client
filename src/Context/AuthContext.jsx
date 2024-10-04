import { createContext, useState} from "react"

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("user")))
 
  const [getBlogData, setBlogData] = useState([]);
  
  
  if(authUser === undefined){
    setAuthUser(null);
  }


  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, getBlogData, setBlogData}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider