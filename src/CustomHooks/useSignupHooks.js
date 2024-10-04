import { useState } from "react"
import toast  from 'react-hot-toast';
import {RegisterUserFunction} from '../Services/Api_Service';

const handleInputErrors=(formData)=>{

    const {name,email,password,city,gender} = formData;

    if(!name || !email || !password|| !city){
        toast.error("Please fill all the fields");
        return true;
    }
    
    return false;
}

const useSignupHooks =  () => {
    const [loading, setLoading] = useState(false)

    const signup = async (formData) => {
        
        const checkError = handleInputErrors(formData)
        
        if(checkError === true){
            return;
        }else{
            try {
                setLoading(true)

            const myJSON = JSON.stringify(formData);            
            const data = await RegisterUserFunction(myJSON)

            if (data.error) {
              throw new Error(data.error)
            }
      
            console.log(data.data)
            window.location.href ='/login';

        } catch (error) {
            toast.error(error.message)
        } finally{
            setLoading(false)
        }
    }

  }


  return { loading, signup }
}

export default useSignupHooks