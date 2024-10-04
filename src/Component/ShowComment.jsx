import React, { useContext, useEffect, useState} from "react";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import useLikesHooks from '../CustomHooks/useLikesHooks';
import useDislikesHooks from '../CustomHooks/useDislikesHooks';
import useDeleteCommentHooks from '../CustomHooks/useDeleteCommentHooks';
import { useParams } from "react-router-dom";
import {AuthContext} from '../Context/AuthContext'
import useGetSingleBlogDataHooks from "../CustomHooks/useGetSingleBlogDataHooks";

const ShowComment = () => {
  const {id} = useParams();
  
  const {authUser}= useContext(AuthContext)
  const {likesFunction} = useLikesHooks();
  const {dislikesFunction} = useDislikesHooks();
  const {deleteComment} = useDeleteCommentHooks();
  const { SingleBlogData } = useGetSingleBlogDataHooks();
  const [BlogData, setBlogData] = useState();
  

// Like Functions
  const updateLike =(commentId,userId)=>{
   likesFunction(commentId,userId)   
}

// Dislike Functions
  const updateDislike =(commentId,userId,blogId,count)=>{
    dislikesFunction(commentId,userId,blogId,count)
}



   useEffect(() => {
    const fetchData = async () => {
      const data = await SingleBlogData(id);
      setBlogData(data);    
    };
    fetchData();
  }, [BlogData,setBlogData]);


  return (
    <div className="flex flex-col gap-4 border-2 border-slate-400 min-w-full my-6 rounded-lg">
      <p className="flex justify-center font-bold underline decoration-slate-950 mt-2">
        Your Comments
      </p>

      {BlogData && BlogData.comment.map((ele, index) => {
          return (
            <div className="mb-2 px-4 shadow-lg" key={ele._id}>
              <div className="flex justify-between">
                <p>Name: {ele.name}</p>
                <p>City: {ele.city}</p>
              </div>
              <p>{ele.comment}</p>
              <div className="flex gap-2 my-2">
              <div className="flex justify-center items-center gap-1 cursor-pointer">
                <AiFillLike onClick={()=>updateLike(ele._id,authUser.id)}/> : <span className="font-semibold">{ele.likes}</span>
              </div>
              <div className="flex justify-center items-center gap-1 cursor-pointer">
                <AiFillDislike onClick={()=>{ updateDislike(ele._id,authUser.id,id,ele.dislikes)}}/> : <span className="font-semibold">{ele.dislikes}</span>
              </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ShowComment;