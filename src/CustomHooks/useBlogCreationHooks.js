import { BlogCreationFunction } from "../Services/Api_Service";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const useBlogCreationHooks = () => {
  const navigate = useNavigate();
const createBlog=async(formData)=>{
    try {
        const header = {
            "Content-Type": "multipart/form-data"
          }

          const response = await BlogCreationFunction(formData, header)
          if(response.error){
            throw new Error(response.error);
            
          }
          toast("Blog created successfully!")
          navigate('/')
          
          console.log(response);
  
    } catch (error) {
        console.log(error);                
    }
    
} 

return { createBlog }
}

export default useBlogCreationHooks