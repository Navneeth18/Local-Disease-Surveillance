import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold">Health Tracker</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="" className="hover:text-red-600 focus:text-red-600">
              Login/Register
            </Link>
          </li>
          <li>
            <Link to="symptoms" className="hover:text-red-600 focus:text-red-600 ">
              Symptoms Form
            </Link>
          </li>
          <li>
             <Link to="chat-bot" className="hover:text-red-600 focus:text-red-600" >Chat Bot</Link>
          </li>
          <li>
            <Link to="user-profile" className="hover:text-red-600 focus:text-red-600">Profile</Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};


export default Navbar;