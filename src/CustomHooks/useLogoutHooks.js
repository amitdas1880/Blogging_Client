import { useContext, useState } from "react"
import {AuthContext} from '../Context/AuthContext';
import toast  from 'react-hot-toast';


const useLogoutHooks = () => {
    const {setAuthUser} = useContext(AuthContext);
    const [loading, setLoading] = useState(false)

    const logout = async () => {
        try {

              localStorage.removeItem("user")
              setAuthUser(null)
              window.location.href ='/login';
            
        } catch (error) {
            toast.error(error.message)
        }
    }

    return { logout }
}

export default useLogoutHooks