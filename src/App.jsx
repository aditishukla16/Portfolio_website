import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Projects'
import Contact from './components/Contact'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  )
}

export default App
