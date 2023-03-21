import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

import Button from '@mui/material/Button'
import { margin } from '@mui/system'

export default function Projects () {
  const theme = useTheme()

  return (
    <Box
      backgroundColor='#e0e0e0'
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <h1 style={{}}>My Projects</h1>
      
      <Card 
        sx={{
          display: 'flex',
          border: 'solid',
          width: '70%',
          height: '35vh',
          justifyContent: 'center',
          my:3
          
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            border: 'solid',
            width: '35em'
          }}
        >
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component='div' variant='h5'>
              Find your IP
            </Typography>
            <Typography
              variant='subtitle1'
              color='text.secondary'
              component='div'
            >
              Mac Miller
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              pl: 1,
              pb: 1,
              width: '100%',
              
            }}
          >
            <Button>View live</Button>
            <Button>code</Button>
          </Box>
        </Box>
        <CardMedia
          component='img'
          sx={{ width: '15em ' }}
          image='https://images.unsplash.com/photo-1679215805559-3f8000e4b6ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          alt='Live from space album cover'

        />
      </Card>
      <Card
        sx={{
          display: 'flex',
          border: 'solid',
          width: '70%',
          height: '35vh',
          justifyContent: 'center',
          my:3
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            border: 'solid',
            width: '35em'
          }}
        >
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component='div' variant='h5'>
              Find your IP
            </Typography>
            <Typography
              variant='subtitle1'
              color='text.secondary'
              component='div'
            >
              Mac Miller
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              pl: 1,
              pb: 1,
              width: '100%'
            }}
          >
            <Button>View live</Button>
            <Button>code</Button>
          </Box>
        </Box>
        <CardMedia
          component='img'
          sx={{ width: '15em ' }}
          image='https://images.unsplash.com/photo-1679215805559-3f8000e4b6ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          alt='Live from space album cover'
        />
      </Card>
      <Card
        sx={{
          display: 'flex',
          border: 'solid',
          width: '70%',
          height: '35vh',
          justifyContent: 'center',
          my:3
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            border: 'solid',
            width: '35em'
          }}
        >
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component='div' variant='h5'>
              Find your IP
            </Typography>
            <Typography
              variant='subtitle1'
              color='text.secondary'
              component='div'
            >
              Mac Miller
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              pl: 1,
              pb: 1,
              width: '100%'
            }}
          >
            <Button>View live</Button>
            <Button>code</Button>
          </Box>
        </Box>
        <CardMedia
          component='img'
          sx={{ width: '15em ' }}
          image='https://images.unsplash.com/photo-1679215805559-3f8000e4b6ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          alt='Live from space album cover'
        />
      </Card>
    </Box>
  )
}
