import React from 'react'
import { useNavigate } from "react-router-dom";
import useLogoutHooks from '../CustomHooks/useLogoutHooks';

const Navbar = () => {
    const navigate = useNavigate();
    const { logout } = useLogoutHooks();

    const handleAddBlog = () => {
      console.log('Add Blog Clicked')
    navigate('/addblog')
    }

  return (
    <div className="shadow bg-slate-300 flex justify-between sticky top-0 py-2 px-4">

  <div className="flex items-center justify-center gap-3">
    <p className="text-2xl font-semibold text-orange-700">Blogging App</p>
    <ul className="btn btn-sm btn-outline btn-secondary">
      <li onClick={handleAddBlog}><a>Add Blog</a></li>
    </ul>
  </div>
  
  <div className="">
    <a className="btn btn-sm btn-outline btn-error" onClick={logout}>Logout</a>
  </div>
  </div>


  )
}

export default Navbar