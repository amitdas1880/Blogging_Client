import toast from "react-hot-toast";
import { CreateCommentFunction } from "../Services/Api_Service";

const handleInputErrors = (object) => {
  const { userComment } = object;

  if (!userComment) {
    return true;
  }

  return false;
};

const useCommentCreationHooks = () => {

  const createComments = async (object,setComment,setTranslatedComment) => {
    console.log("Create Comment Object ", object);
    
    const checkError = handleInputErrors(object);

    if (checkError === true) {
      return;
    } else {
      const myJSON = JSON.stringify(object);
      const response = await CreateCommentFunction(myJSON);

      if (response.error) {
        throw new Error(response.error);
      }
      toast.success("Comment created successfully!");
      console.log(response.data);
      setComment('')
      setTranslatedComment('')
      
   }
  };
 
  return {
  createComments,
  };
};

export default useCommentCreationHooks;
