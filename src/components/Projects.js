import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

import Button from '@mui/material/Button'
import { margin } from '@mui/system'
import { Container } from '@mui/system'
import ReactCardFlip from 'react-card-flip'
import { useState, useRef } from 'react'
import FrontFindIp from './projects/FrontFindIp'
import BackFindIp from './projects/BackFindIp'
import colorGalley from "../pics/colorGallery.png"
import checkIp from "../pics/checkIp.png"
import cookingBook from "../pics/cookingBook.png"
import { Grid } from '@mui/material'

export default function Projects ({ projectsSection }) {
  const theme = useTheme()

  const projects = [
    {
      name: 'Color Gallery',
      description: 'Javascript, React, NodeJS, Mongoose & UI Material',
      image:colorGalley,
      codeUrl:"https://github.com/houtuantuan/Online-Gallerie-Frontend",
      liveUrl:"https://houtuantuan.github.io/Online-Gallerie-Frontend/"
        
    },
    {
      name: 'Find Your IP',
      description: 'Javascript, React & Tailwind',
      image:checkIp,
      codeUrl:"https://github.com/houtuantuan/showYourIP",
      liveUrl:"https://642ea47328851814df79656c--enchanting-banoffee-de56f5.netlify.app/"
    },
    {
      name: 'Cooking Book',
      description: 'Javascript, React, Contentful as CMS & UI Material',
      image:cookingBook,
      codeUrl:"https://github.com/houtuantuan/cookingBook",
      liveUrl:"https://houtuantuan.github.io/cookingBook/"
    
    
      }
  ]
  const [flipped, setFlipped] = useState(Array(projects.length).fill(false))

  const flip = index =>
    setFlipped(prevStates => {
      return prevStates.map((state, i) => {
        if (index === i) {
          return !state
        }
        return state
      })
    })

  return (
    <Box
      ref={projectsSection}
      backgroundColor='#f4f4f4'
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop:"1em"
       
      }}
    >
      <Container
        sx={{ mt: 5, fontSize: '3em', fontWeight: 'bold', textAlign: 'center' }}
      >
        My Projects
      </Container>
      {projects.map((project, index) => {
        return (
          <Box
           
            my={'5%'}
            onMouseEnter={() => flip(index)}
            onMouseLeave={() => flip(index)}
            key={index}
            
            
          >
            <ReactCardFlip isFlipped={flipped[index]} flipDirection='vertical'>
              <FrontFindIp 
              
              
              image={project.image} />

              <BackFindIp
                name={project.name}
                description={project.description}
                codeUrl={project.codeUrl}
                liveUrl={project.liveUrl}
              />
            </ReactCardFlip>
          </Box>
        )
      })}
    </Box>
  )
}
