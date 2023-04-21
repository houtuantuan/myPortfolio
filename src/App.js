import DrawerAppBar from './components/DrawerAppBar.js'
import React from 'react'
import Background from './components/Background'
import './components/background.css'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects.js'
import './App.css'
import Contact from './components/Contact.js'
import Footer from './components/Footer.js'
import ScrollToTop from 'react-scroll-to-top'
import { useRef } from 'react'

function App () {
  const aboutSection = useRef(null)
  const projectsSection = useRef(null)
  const contactSection = useRef(null)
  const homeSection = useRef(null)

  const scrollDown = ref => {
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    console.log(ref)
    console.log(ref.current)
    console.log('------------------------------------')

    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    })
    console.log(1111)
  }
  return (
    <div className='App'>
      <DrawerAppBar
        scrollDown={scrollDown}
        aboutSection={aboutSection}
        projectsSection={projectsSection}
        contactSection={contactSection}
        homeSection={homeSection}
      />

      <Background scrollDown={scrollDown} projectsSection={projectsSection} />
      <ScrollToTop />
      <AboutMe aboutSection={aboutSection} />
      <Projects projectsSection={projectsSection} />
      <Contact contactSection={contactSection}/>
      <Footer />
    </div>
  )
}

export default App
