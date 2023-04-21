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

export default function Projects ({ projectsSection }) {
  const theme = useTheme()

  const projects = [
    {
      name: 'Find Your IP',
      description: 'Javascript, React & UI Material',
      image:
        'https://78.media.tumblr.com/d98fb931adb117c70f0dbced9e947520/tumblr_pe582mbWip1tlgv32o1_1280.png'
    },
    {
      name: 'Cooking Book',
      description: 'Javascript, React & UI Material',
      image:
        'https://78.media.tumblr.com/d98fb931adb117c70f0dbced9e947520/tumblr_pe582mbWip1tlgv32o1_1280.png'
    },
    {
      name: 'Placeholder',
      description: 'Javascript, React & UI Material',
      image:
        'https://78.media.tumblr.com/d98fb931adb117c70f0dbced9e947520/tumblr_pe582mbWip1tlgv32o1_1280.png'
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
              <FrontFindIp image={project.image} />

              <BackFindIp
                name={project.name}
                description={project.description}
              />
            </ReactCardFlip>
          </Box>
        )
      })}
    </Box>
  )
}
