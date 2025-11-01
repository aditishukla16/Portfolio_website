import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Projects'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <Skills/>
      <Project/>
    </div>
  )
}

export default App
