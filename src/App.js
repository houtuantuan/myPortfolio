import DrawerAppBar from './components/DrawerAppBar.js'
import React from 'react'
import Background from './components/Background'
import './components/background.css'
import AboutMe from "./components/AboutMe"
import Projects from './components/Projects.js'
import "./App.css"
import Contact from "./components/Contact.js"

function App () {
  return (
    <div className='App'>
      
      <DrawerAppBar />

      <Background />
      <AboutMe />
      <Projects/>
      <Contact />
     
    </div>
  )
}

export default App
