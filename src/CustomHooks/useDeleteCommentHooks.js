import {DeleteCommentFunction} from '../Services/Api_Service';


const useDeleteCommentHooks = () => {
    const deleteComment=async(blogId,commentId)=>{
        try {
            const response = await DeleteCommentFunction(blogId,commentId)
        if(response.error){
            throw new Error(response.error);            
        }
        console.log(response);
        
        } catch (error) {
            console.log(error);    
        }
    }
    return {deleteComment};
}

export default useDeleteCommentHooks