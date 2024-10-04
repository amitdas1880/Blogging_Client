import {CommonRequest} from './ApiCall';
import {BASE_URL} from './Helper';


// Register user data
export const RegisterUserFunction = async(data)=>{ 
    // console.log(data); 
    return await CommonRequest("POST",`${BASE_URL}/user/register`,data);
}

// Login User Function
export const LoginUserFunction = async(data)=>{  
    return await CommonRequest("POST",`${BASE_URL}/user/login`,data);
}

// Blog Creation
export const BlogCreationFunction = async(data,header)=>{    
    return await CommonRequest("POST",`${BASE_URL}/blog/create`,data,header);
}

// Get all the Blog Data 
export const GetBlogsFunction = async()=>{    
    return await CommonRequest("GET",`${BASE_URL}/blog/allblogs`);
}


// Get Single Blog Data 
export const GetSingleBlogDataFunction = async(id)=>{    
    return await CommonRequest("GET",`${BASE_URL}/blog/details/${id}`);
}


// Get Create Comment
export const CreateCommentFunction = async(data)=>{    
    return await CommonRequest("POST",`${BASE_URL}/comment/create`,data);
}

// Delete Comment function
export const DeleteCommentFunction = async( blogId,commentId)=>{    
    return await CommonRequest("DELETE",`${BASE_URL}/delete/${blogId}/${commentId}`);
}

// Update Like function 
export const UpdatesLikesFunction = async(commentId,userId)=>{    
    return await CommonRequest("PUT",`${BASE_URL}/like/${commentId}/${userId}`);
}


// Update Dislike function 
export const UpdatesDislikesFunction = async(commentId,userId)=>{  
    return await CommonRequest("PUT",`${BASE_URL}/dislike/${commentId}/${userId}`);
}