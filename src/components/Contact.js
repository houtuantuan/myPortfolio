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

export default function Contact ({contactSection}) {
  
  return (
    <Box ref={contactSection}>
      <Grid sx={{  backgroundColor: 'white',marginBottom:"2em" }}>
        <Card
          style={{
            height: '80%',
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
     
    </Box>
  )
}
