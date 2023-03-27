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

export default function Contact () {
  return (
    <Box>
      <Grid sx={{  backgroundColor: 'white' }}>
        <Card
          style={{
            height: '80vh',
            maxWidth: 450,
            padding: '20px 5px',
            margin: '0 auto',
            border: 'none',
            boxShadow: 'none',
            backgroundColor: 'white'
          }}
        >
          <CardContent>
            <Typography sx={{mt: 5, fontSize: '3em', fontWeight: 'bold'}}
            gutterBottom variant='h5' my={5} textAlign={'center'}>
              Contact
            </Typography>
            <Typography
              variant='body2'
              color='textSecondary'
              component='p'
              gutterBottom
            >
              Feel free to contact me
            </Typography>
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder='Enter first name'
                    label='First Name'
                    variant='outlined'
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder='Enter last name'
                    label='Last Name'
                    variant='outlined'
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type='email'
                    placeholder='Enter email'
                    label='Email'
                    variant='outlined'
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type='number'
                    placeholder='Enter phone number'
                    label='Phone'
                    variant='outlined'
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label='Message'
                    multiline
                    rows={4}
                    placeholder='Type your message here'
                    variant='outlined'
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type='submit'
                    variant='outlined'
                    color='primary'
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
      <Box sx={{ backgroundColor: '#242830',
       height: '15vh',
       minHeight:"150px" 
       }}>
        <Box
          sx={{
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            // border: 'solid pink',
            paddingTop:"35px"
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
              width:"100%",
              color:"black"
            }}
          >
            <ArrowUpwardIcon
              sx={{
                border: 'solid white',
                backgroundColor: 'white',
                fontSize:40,
                position:"relative",
                top:"16px",
                right:"2px"
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
