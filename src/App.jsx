import React, { useContext }  from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AddBlog from "./pages/AddBlog";
import BlogDetails from "./pages/BlogDetails";
import { Toaster } from 'react-hot-toast';
import {AuthContext} from './Context/AuthContext';


const App = () => {
  const {authUser}=useContext(AuthContext);
  //console.log(authUser)
  return (
    
      <>
      
      <Routes>
          <Route path="/" element={authUser ? <Home /> : <Navigate to={"/login"} />} />
          <Route path="/login" element={authUser ? <Navigate to={"/"} /> : <Login />}/>
          <Route path="/signup" element={authUser ? <Navigate to={"/"} /> : <SignUp />} />
          <Route path="/addblog" element={<AddBlog/>} />
          <Route path='/blogDetails/:id' element={<BlogDetails/>} />
        </Routes>
        <Toaster/>
      
      </>
   
  );
};

export default App;
