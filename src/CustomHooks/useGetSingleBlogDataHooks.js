import {GetSingleBlogDataFunction} from '../Services/Api_Service';

const useGetSingleBlogDataHooks = () => {
    
    const SingleBlogData=async(id)=>{        
        try {
            const response = await GetSingleBlogDataFunction(id);
        if(response.error){
            throw new Error(response.error);            
          }

          return response.data;
          
        } catch (error) {
            console.log(error);           
        }
        
    }
    return { SingleBlogData }
}

export default useGetSingleBlogDataHooks