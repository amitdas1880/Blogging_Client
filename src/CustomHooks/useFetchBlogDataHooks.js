
import {GetBlogsFunction} from '../Services/Api_Service'


const useFetchBlogDataHooks = () => {
    
const getDataFromDB =async() =>{
    const response = await GetBlogsFunction();
    if (response) {
        return response.data.data;
    } else {
        toast.error("Failed to fetch blogs");
    }
    
}  
  return {
    getDataFromDB,
  }
}

export default useFetchBlogDataHooks