import React from 'react'
import { Box, Container } from '@mui/system'
import Button from '@mui/material/Button'
import { useRef } from 'react';


export default function AboutMe ({aboutSection}) { 
 
  
 
  return (
    <div style={{width: '100%', border:"solid white"}}ref={aboutSection} >
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          p: 1,
          my: 5,
          bgcolor: 'background.paper',
          borderRadius: 1,
          width: '100%',
          textAlign: 'center'
        }}
      >
        <Container sx={{ mb: 5, fontSize: '3em', fontWeight: 'bold' }}>
          About Me
        </Container>
        <Container sx={{ mb: 5 }}>
          <img
            src='https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2'
            style={{ borderRadius: '80%', width: '15em' }}
          />
        </Container>
        <Container>
          I'm a result-driven web developer passionate about software
          architecture and design who can realise elegant projects from ground
          up. Connect with me, and let's create something special.
        </Container>
        <Box sx={{ my: 2,textAlign:'center' }}>
          <Button variant='outlined' color='primary'>
            Resume
          </Button>
        </Box>
      </Box>
      {/* <><Container style={{display:"flex", justifyContent: 'center'}}>
      <Box
        textAlign='center'
        sx={{ m: 5, fontSize: '3em', fontWeight: 'bold' }}
      >
        About Me
      </Box>
      <hr></hr>
      <Container sx={{m:5}}
      >
        
      </Container>
      <Container>
        
         
      </Container>
      </Container> */}
    </div>
  )
}
