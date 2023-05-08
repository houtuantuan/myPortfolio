import React from 'react'
import { Container, Box } from '@mui/system'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'

export default function BackFindIp ({ name, description, codeUrl, liveUrl }) {
  return (
    <Container>
      <Box
        sx={{
          background: '#2E3B55',
          maxWidth: '600px',
          width:"40em",
          height: '25em',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          boxShadow: '10px 10px 5px rgb(95, 77, 99)',
          borderRadius: '10px'
        }}
      >
        <Typography variant='h4'>{name}</Typography>
        <Typography variant='p' m={3}>
          {description}
        </Typography>
        <a target='blank' href={codeUrl}>
          <Button sx={{marginBottom:"1em"}}
          variant='outlined'>Code</Button>
        </a>

        <a target='blank' href={liveUrl}>
          <Button variant='outlined'>View live</Button>
        </a>
      </Box>
    </Container>
  )
}
