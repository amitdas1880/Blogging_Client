import {UpdatesLikesFunction} from '../Services/Api_Service';
import toast  from 'react-hot-toast';

const useLikesHooks =() => {

  

  const likesFunction=async(commentId,userId)=>{
    try {
        const response = await UpdatesLikesFunction(commentId,userId)
    if(response.error){
        toast.error(error.message)
      throw new Error(response.error);
    }
    console.log(response.data.data.likes);
    toast.success("Like created successfully");

    } catch (error) {
        console.log(error);
        toast.error(error.message)
    }
  }
  return {likesFunction};
}

export default useLikesHooks