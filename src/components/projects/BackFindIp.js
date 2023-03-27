import React from 'react'
import { Container, Box } from '@mui/system'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'

export default function BackFindIp ({ name, description }) {
  return (
    <Container>
      <Box
        sx={{
          background: '#2E3B55',
          width: '60vw',
          height: '50vh',
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
        <Button variant='outlined'>Explore more</Button>
      </Box>
    </Container>
  )
}
