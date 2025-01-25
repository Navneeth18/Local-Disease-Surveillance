import React, { useState } from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold">Health Tracker</h1>
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Symptoms Form
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};


export default Navbar;