import React from 'react'
import Login from './components/AuthForm'
import SymptomsAssessmentForm from './components/SymptomsAssessmentForm'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import AuthForm from './components/AuthForm'

const App = () => {
  return (
    <div className=''>
    <AuthForm />
    </div>
  )
}

export default App