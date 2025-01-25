import React from 'react'
import Login from './components/AuthForm'
import SymptomsAssessmentForm from './components/SymptomsAssessmentForm'
import Navbar from './components/Navbar'
import RootLayout from './components/RootLayout'
import AuthForm from './components/AuthForm'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import RouteError from './components/RouteError'
import UserProfile from './UserProfile'
import ChatBot from './components/ChatBot'

const App = () => {
  const RouterObj = createBrowserRouter([
    {
      path:"",
      element: <RootLayout/>,
      errorElement:<RouteError />,
      children:[
        {
          path:"",
          element: <AuthForm/>,
        },
        {
          path:"symptoms",
          element: <SymptomsAssessmentForm />,
          children:[{
            path: "chat-bot",
            element: <ChatBot/>
          }]
        },
        {
          path:"user-profile",
          element: <UserProfile/>
        },
        {
          path:"chat-bot",
          element: <ChatBot />,
        }
      ]
    }
  ]);



  return (
    <RouterProvider router={RouterObj} />
  )
}

export default App