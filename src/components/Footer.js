import { Card } from '@mui/material'
import { Typography } from '@mui/material'
import { Button } from '@mui/material'
import { TextField } from '@mui/material'
import { CardContent } from '@mui/material'
import { Grid, Box, Container } from '@mui/material'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import { Link } from 'react-router-dom'
import { IconButton } from '@mui/material';

export default function Footer () {
  return (
    <Box
      sx={{ backgroundColor: '#242830', height: '15vh', minHeight: '150px' }}
    >
      <Box
        sx={{
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          //   border: 'solid pink',
          paddingTop: '35px'
        }}
      >
        <span>
        <IconButton href="https://github.com/houtuantuan" target="_blank">
          <LinkedInIcon
            sx={{ marginRight: '12px',color:"white" }}
            
          />
          </IconButton >
          <IconButton href="https://www.linkedin.com/in/xiaoyanhouwebdeveloper/" target="_blank">
         <GitHubIcon sx={{ marginLeft: '12px',color:"white" }} />
          </IconButton >
          
        </span>
        <Typography> © 2023 Xiaoyan Hou, All Rights Reserved.</Typography>
        <Box
          sx={{
            display: 'flex',
            height: '40%',
            maxHeight: '10vh',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            //   border: 'solid red',
            width: '100%',
            color: 'black'
          }}
        ></Box>
      </Box>
    </Box>
  )
}
