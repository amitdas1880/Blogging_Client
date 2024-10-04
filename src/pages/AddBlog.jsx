import React, { useState } from "react";
import useBlogCreationHooks from '../CustomHooks/useBlogCreationHooks.js'

const AddBlog = () => {

  const { createBlog } = useBlogCreationHooks();

  const [file, setfile] = useState();
  const [inputData, setinputData] = useState({
    title: "",
    content: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();  
    const formData = new FormData()

    formData.append('title', inputData.title)
    formData.append('content', inputData.content)
    formData.append('blog_image', file)
    createBlog(formData);
    
  };

  console.log(file);
  
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <div className="flex flex-col justify-center items-center min-w-96">
        <div className="w-ful p-6 rounded-lg shadow-md bg-gray-200">
          <h1 className="text-3xl font-semibold text-center text-blue-700">
            Add Blog           
          </h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Title
              </label>
              <input
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                type="text"
                name="title"
                placeholder="Enter Blog Title"
                value={inputData.title}
                onChange={(e) =>
                  setinputData({ ...inputData, title: e.target.value })
                }
              />

              <label className="block text-gray-700 text-sm font-medium mb-2">
                Input Text
              </label>
              <textarea
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                type="text"
                placeholder="Enter Blog Information"
                name="content"
                value={inputData.content}
                onChange={(e) =>
                  setinputData({ ...inputData, content: e.target.value })
                }
              />

              <label className="block text-gray-700 text-sm font-medium mb-2">
                Blog Image
              </label>
              <input
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                type="file"
                onChange={(e) =>setfile(e.target.files[0])}
              />
            </div>
                          
              <button
                type="submit"
                className="btn btn-info mt-3 btn-sm font-bold text-white btn-block"
                onClick={handleSubmit}
              >
                Submit
              </button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
