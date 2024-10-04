import toast from "react-hot-toast";
import { UpdatesDislikesFunction} from "../Services/Api_Service";
import useDeleteCommentHooks from './useDeleteCommentHooks';


const useDislikesHooks = () => {
    const { deleteComment } = useDeleteCommentHooks();
    const dislikesFunction=async(commentId,userId,blogId)=>{
        try {
            const response = await UpdatesDislikesFunction(commentId,userId)
        if(response.error){
            toast.error(error.message)
          throw new Error(response.error);
        }
        console.log(response.data.data.dislikes);
        toast.success("User dislikes Comment");


        if(response.data.data.dislikes == 2){
            toast.success("You've reached the maximum number of dislikes for this comment.")
            deleteComment(blogId, commentId)
        }

    
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
      }
      return {dislikesFunction};  
}

export default useDislikesHooks