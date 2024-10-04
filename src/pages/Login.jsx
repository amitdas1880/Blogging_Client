import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLoginHooks from '../CustomHooks/useLoginHooks';


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const { loading, login } = useLoginHooks();
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    login(formData);   
  }

  return (
    <div className="p-4 h-screen flex items-center justify-center"> 
    <div className="flex flex-col justify-center items-center min-w-96">
      <div className="w-ful p-6 rounded-lg shadow-md bg-gray-200">
        <h1 className="text-3xl font-semibold text-center text-slate-700">
          Log in
          <span className="text-blue-700"> Blogging App</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Email
            </label>
            <input
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value })}
            />
             <label className="block text-gray-700 text-sm font-medium mb-2">
              Password
            </label>
            <input
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
              type="Password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value })}
            />
          </div>
          <Link to={"/signup"} className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
            {"Don't"} have an account?
          </Link>
          <div>
            <button type="submit" className="btn btn-info btn-block btn-sm bg-blue-700 font-bold text-white " >
             Login 
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
