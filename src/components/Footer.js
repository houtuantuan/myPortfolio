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
import useScrollTrigger from "@mui/material/useScrollTrigger";
 

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
          <LinkedInIcon sx={{ marginRight: '10px' }} />
          <GitHubIcon sx={{ marginLeft: '10px' }} />
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
        >
          
          
        </Box>
      </Box>
    </Box>
  )
}
