import React from 'react'
import { XyzTransitionGroup } from '@animxyz/react'
import '@animxyz/core'
import { Box } from '@mui/system'
import Button from '@mui/material/Button'
import GitHubIcon from '@mui/icons-material/GitHub'
import { spacing } from '@mui/system'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react'
import './introduction.css'
import { useRef } from 'react'

const theme = createTheme({
  status: {
    danger: '#e53e3e'
  },
  palette: {
    primary: {
      main: '#f5f5f5',
      darker: '#053e85'
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff'
    }
  }
})

export default function Introduction ({scrollDown,aboutSection}) {
 

 
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box maxWidth='sm'>
          <Box
            className='example-grid'
            xyz='fade small stagger'
            style={{
              display: 'flex',
              // border: 'solid red',
              height: '20vh',
              width: '100%',
              justifyContent: 'flex-start',
              alignItems: 'center',
              color: 'white',
              // position: 'absolute',
              fontSize: '5em',
              fontStyle: 'italic',
              fontWeight: 'bold'
            }}
          >
            <div className='square xyz-in'>Hello!&nbsp;</div>
          </Box>
          <Box
            className='example-grid'
            xyz='fade small stagger'
            style={{
              display: 'flex',
              // border: 'solid red',
              height: '10vh',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              // position: 'absolute',
              fontSize: '3.8em',
              fontStyle: 'italic',
              fontWeight: 'bold'
            }}
          >
            <div className='square xyz-in'>I'M&nbsp;</div>
            <div className='item-group'   xyz="fade up rotate-right duration-10 ease-out-back stagger"
>
              <div className='square xyz-in' id='mint'>
                X
              </div>
            </div>
            <div className='square xyz-in'>I</div>
            <div className='square xyz-in'>A</div>
            <div className='square xyz-in'>O</div>
            <div className='square xyz-in'>Y</div>
            <div className='square xyz-in'>A</div>
            <div className='square xyz-in'>N</div>
          </Box>
          <Box textAlign='center' color='white' m={2}>
            Front End Developer
          </Box>
          <Box textAlign='center'>
            <Button variant='outlined' color='primary' onClick={()=>scrollDown(aboutSection)} >
              View my work
            </Button>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  )
}
