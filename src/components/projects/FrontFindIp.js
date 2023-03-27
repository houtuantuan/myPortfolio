import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Container, Box } from '@mui/system'

export default function Front ({ image }) {
  return (
    <Container
      sx={{
        display: 'flex-column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Box
        sx={{
          width: '60vw',
          height: '50vh',
          boxShadow: '10px 10px 5px rgb(95, 77, 99)',
          borderRadius: '10px'
        }}
        component='img'
        src={image}
      ></Box>
    </Container>
  )
}
