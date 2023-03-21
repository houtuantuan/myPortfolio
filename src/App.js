import DrawerAppBar from './components/DrawerAppBar.js'
import React from 'react'
import Background from './components/Background'
import './components/background.css'
import AboutMe from "./components/AboutMe"
import Projects from './components/Projects.js'

function App () {
  return (
    <div>
      
      <DrawerAppBar />

      <Background />
      <AboutMe />
      <Projects/>
      
    </div>
  )
}

export default App
