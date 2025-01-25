import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const AuthForm = () => {

  const [activeTab, setActiveTab] = useState("login");

  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Welcome to Med AI</h1>
        <p className="text-center text-gray-500 mb-4">Sign in to access your dashboard</p>
        <div className="flex border-b mb-4">
          <button
            className={`flex-1 py-2 text-center ${
              activeTab === "login" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-600"
            }`}
            onClick={() => {
              setActiveTab("login")
              navigate('/')
              }}
          >
            Login
          </button>
          <button
            className={`flex-1 py-2 text-center ${
              activeTab === "register" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-600"
            }`}
            onClick={() => setActiveTab("register")}
          >
            Register
          </button>
        </div>
        {activeTab === "login" && (
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="mt-1 w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="mt-1 w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
            >
              Sign in
            </button>
          </form>
        )}
        {activeTab === "register" && (
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="mt-1 w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="mt-1 w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Create a password"
                className="mt-1 w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
            >
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthForm;