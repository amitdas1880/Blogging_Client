import React, { useContext, useEffect, useState } from "react";
import useFetchBlogDataHooks from "../CustomHooks/useFetchBlogDataHooks";
import { AuthContext } from "../Context/AuthContext";
import { BASE_URL } from "../Services/Helper";
import { useNavigate } from "react-router-dom";

const ShowBlogData = () => {
  const { getDataFromDB } = useFetchBlogDataHooks();
  const { getBlogData, setBlogData } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getAllData = async () => {
      const fetchData = await getDataFromDB();
      setBlogData(fetchData);
    };
    getAllData();
  }, []);

  //console.log(getBlogData);

  const handleToView = (id) => {
    navigate(`/blogDetails/${id}`);
  };

  return (
    <>
      {getBlogData.map((ele) => (
        <div className="flex justify-center items-center m-3 ">
          <div
            key={ele._id}
            className="flex flex-col gap-2 p-4 shadow-2xl shadow-slate-600 my-3 max-w-md"
          >
            {/* To display image coming from API, 1.go to multer middleware 2. copy /images/ from  __dirname,'../public/images' */}
            <img
              src={`${BASE_URL}/images/${ele.blog_image}`}
              alt="Blog Image"
              className="object-fill h-48 w-80 rounded-lg"
            />

            <div className="flex flex-col justify-center items-center">
              <h2 className="font-semibold flex-wrap">{ele.blog_title}</h2>
              <div className="btn btn-primary btn-sm w-16">
                <button onClick={() => handleToView(ele._id)}>View</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ShowBlogData;
