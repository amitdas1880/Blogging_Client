import { useContext, useState } from "react"
import {AuthContext} from '../Context/AuthContext';
import toast  from 'react-hot-toast';
import {LoginUserFunction} from '../Services/Api_Service';
import { jwtDecode } from "jwt-decode";

const handleInputErrors=(formData)=>{
    const {email,password} = formData;

    if(!email || !password){
        toast.error("Please fill all the fields");
        return true;
    }
    return false;
}


const useLoginHooks = () => {
    const {setAuthUser} = useContext(AuthContext);
    const [loading, setLoading] = useState(false)
    
    const login = async(formData) => {
        
        const checkError = handleInputErrors(formData)
        if(checkError === true){
            return ;
        }else{
            try {
                setLoading(true)

            const myJSON = JSON.stringify(formData);            
            const data = await LoginUserFunction(myJSON);
                
            if (data.error) {
              throw new Error(data.error)
            }
      
            
            if(data.data !== undefined){
                // Decode Token then data store in local storage
                 const token = data.data.token
                const decoded = jwtDecode(token);
                const userData = localStorage.setItem("user", JSON.stringify(decoded));                   
                setAuthUser(userData)
                toast.success("Logged in successfully")
                window.location.href ='/';
                
            }else{
                toast.error("Invalid credentials")
            }

            } catch (error) {
                toast.error(error.message)
            }finally{
                setLoading(false)
            }
        }
    
    }
    return {loading,login}
}

export default useLoginHooks