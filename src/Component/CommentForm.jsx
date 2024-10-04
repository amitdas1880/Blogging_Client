import React, { useEffect, useState } from "react";
import axios from "axios";
import useCommentCreationHooks from '../CustomHooks/useCommentCreationHooks';

const CommentForm = ({ authUser, id }) => {

  const [options, setOption] = useState("");
  const [inputOptions, setInputOptions] = useState("tl")
  const [outputOptions, setOutputOptions] = useState("en")

  const [comment, setComment] = useState("");
  const [translatedComment, setTranslatedComment] = useState("");

  const { createComments } = useCommentCreationHooks();


  const handleSubmit = (e) => {
    e.preventDefault();
    const object = {
      blogId: id,
      userName: authUser.name,
      userCity: authUser.city,
      userComment: translatedComment,
    };

    createComments(object,setComment,setTranslatedComment)
    
    //console.log(object);
  };
  

  const translateFunction = async() => {
  await axios.post(`https://api.mymemory.translated.net/get?q=${comment}!&langpair=${inputOptions}|${outputOptions}`)
    .then(response => setTranslatedComment(response.data.responseData.translatedText))

  };

  useEffect(()=>{
      axios.get(`https://libretranslate.com/languages`,{headers: {'accept': 'application/json'}})    
      .then(response=>{
        setOption(response.data)
        
      })
       .catch(error => console.log(error));
  },[])

  return (
    <>
      <div className="w-full p-5 shadow-lg shadow-indigo-200 border-solid border-2 border-slate-400 rounded-lg">
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <label className="flex justify-center text-slate-900 font-semibold underline decoration-slate-950">
            Leave or Comment
          </label>
          <div className="flex justify-between flex-wrap">
            <div>
              <label>From : </label>
              <select className="border-solid border-2 border-slate-400 pl-1 rounded-lg" onChange={(e)=>{setInputOptions(e.target.value)}}>
              <option>Select Languages</option>
              {options && options.map((ele)=>{
                return(
                  <option value={ele.code}>{ele.name}</option>
                )})}
              </select>
            </div>

            <div>
              <label>To : </label>
              <select className="border-solid border-2 border-slate-400 pl-1 rounded-lg" onChange={(e)=>{setOutputOptions(e.target.value)}}>
               {options && options.map((ele)=>{
                return(
                  <option value={ele.code}>{ele.name}</option>
                )})}
              </select>
            </div>
          </div>
          <textarea
            className="border-solid border-2 border-slate-400 pl-1 rounded-lg"
            placeholder="Enter Your Comment"
            value={comment}
            onInput={(e) => setComment(e.target.value)}
            required
          />
          <textarea
            placeholder="Translation"
            className="border-solid border-2 border-slate-400 pl-1 rounded-lg"
            readOnly
            value={translatedComment}
          />
          <div className="flex justify-around flex-wrap">
            <button
              className="btn btn-outline btn-sm btn-accent"
              onClick={translateFunction}
            >
              Translate
            </button>
            <button type="submit" className="btn btn-primary btn-sm">
              Add Comment
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CommentForm;
