import React from 'react'
import { XyzTransitionGroup } from '@animxyz/react'
import '@animxyz/core'
import { Box } from '@mui/system'
import Button from '@mui/material/Button'
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Introduction () {
  return (
    <>
      <div>
        <div
          className='example-grid'
          xyz='fade small stagger'
          style={{
            display: 'flex',
            border: 'solid red',
            height: '30vh',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            // position: 'absolute',
            fontSize: '5em',
            fontStyle: 'italic',
            fontWeight: 'bold'
          }}
        >
          <div className='square xyz-in'>Hello!&nbsp;</div>
          <div className='square xyz-in'>I'M&nbsp;</div>
          <div className='square xyz-in'>X</div>
          <div className='square xyz-in'>I</div>
          <div className='square xyz-in'>A</div>
          <div className='square xyz-in'>O</div>
          <div className='square xyz-in'>Y</div>
          <div className='square xyz-in'>A</div>
          <div className='square xyz-in'>N</div>
        </div>
        <Box textAlign='center' color="white">
        web developer passionate
        </Box>
        <Box textAlign='center'>
        <Button variant='outlined' color='primary' >
          View
        </Button></Box>
      </div>
    </>
  )
}
