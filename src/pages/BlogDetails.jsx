import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetSingleBlogDataHooks from "../CustomHooks/useGetSingleBlogDataHooks";
import {AuthContext} from '../Context/AuthContext';
import { BASE_URL } from "../Services/Helper";
import CommentForm from "../Component/CommentForm";
import ShowComment from "../Component/ShowComment";


const BlogDetails = () => {
  const {authUser} = useContext(AuthContext);
  let { id } = useParams();
  const { SingleBlogData } = useGetSingleBlogDataHooks();
  const [getblogById, setblogById] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await SingleBlogData(id);
      setblogById(data);
    };
    fetchData();
  }, []);

  // console.log("Blog data => ", getblogById ,"Blog Id => ", id);
  

  
  return (
    <>
    <div className="flex flex-col justify-center items-center flex-wrap">
      <div className="max-w-lg ml-20 bg-inherit">
        {getblogById && (
          <div className="my-5 p-5 shadow shadow-blue-700 min-w-full">
            <img
              src={`${BASE_URL}/images/${getblogById.blog_image}`}
              alt="image"
              className="object-fill h-48 w-96 rounded-lg min-w-full"
            />
            <p className="text-slate-700 font-semibold">
              Title :{" "}
              <span className="text-slate-700 font-bold">
                {getblogById.blog_title}
              </span>
            </p>

            <p className="text-slate-700 font-semibold">
              Description :{" "}
              <span className="text-slate-700 font-bold">
                {getblogById.description}
              </span>
            </p>
          </div>
        )}

        <CommentForm authUser={authUser} id={id}/>
        <ShowComment />
      </div>
    </div>
    </>
  );
};

export default BlogDetails;
