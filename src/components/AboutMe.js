import React from 'react'
import { Box, Container } from '@mui/system'
import Button from '@mui/material/Button'
import { useRef } from 'react'
import Avatar from '@mui/material/Avatar'
import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack'
import html5 from './icons/icons8-html-5-96.png'
import css3 from './icons/icons8-css3-96.png'
import javascript from './icons/icons8-javascript-48.png'
import expressjs from './icons/icons8-express-js-80.png'
import nodejs from './icons/icons8-node-js-96.png'
import bootstrap from './icons/icons8-bootstrap-96.png'
import mui from './icons/icons8-material-ui-96.png'
import mongodb from './icons/icons8-mongodb-a-cross-platform-document-oriented-database-program-96.png'
import reactlogo from './icons/icons8-react-96.png'
import git from './icons/icons8-git-96.png'
import githublogo from './icons/icons8-github-100.png'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Typography from '@mui/material/Typography'
import ListItemButton from '@mui/material/ListItemButton'
import bewerbungsfoto from "../pics/Bewerbungsfoto-XiaoyanHou.jpg"

export default function AboutMe ({ aboutSection }) {
  const frontend = ['HTML5', 'CSS3', 'JS', 'REACT', 'MUI', 'BOOTSTRAP']
  return (
    <div style={{ width: '100%', border: 'solid white' }} ref={aboutSection}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          p: 1,
          my: 5,
          bgcolor: 'background.paper',
          borderRadius: 1,
          width: '100%',
          textAlign: 'center'
        }}
      >
        <Container sx={{ mb: 5, fontSize: '3em', fontWeight: 'bold' }}>
          About Me
        </Container>
        <Container>
          I'm a result-driven web developer passionate about software
          architecture and design who can realise elegant projects from ground
          up.
          <br />
          Connect with me, and let's create something special.
        </Container>
        <Container sx={{ mb: 5 }}>
          <img
            src={bewerbungsfoto}
            style={{ borderRadius: '90%', width: '12em', marginTop: '2em' }}
          />
        </Container>
        {/* <Container sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card xs={12} sm={4}>
            <List
              dense
              sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            >
              <ListItem>
                <ListItemButton
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    border:"solid"
                  
                  }}
                >
                  <ListItemAvatar sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    
                  
                  }}>
                    <Avatar alt={html5} src={html5} />
                  </ListItemAvatar>
                  <Typography sx={{ fontSize: '10px' }}>HMTL5</Typography>
                </ListItemButton>
              </ListItem>

              <ListItem>
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar alt='css3' src={css3} />
                  </ListItemAvatar>
                  <ListItemText primary='css3' />
                </ListItemButton>
              </ListItem>
            </List>
          </Card>
          <Card xs={12} sm={4}>
            s
          </Card>
          <Card xs={12} sm={4}>
            s
          </Card>
        </Container> */}
        <Stack
          direction='row'
          spacing={2}
          useFlexGap
          flexWrap='wrap'
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <List
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Avatar alt='html5' src={html5} />
            <Typography variant='caption'>HTML5</Typography>
          </List>
          <List
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Avatar alt='css' src={css3} />
            <Typography variant='caption'>CSS3</Typography>
          </List>
          <List
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Avatar alt='js' src={javascript} />
            <Typography variant='caption'>JS</Typography>
          </List>
          <List
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Avatar alt='bootstrap' src={bootstrap} />
            <Typography variant='caption'>BOOTSTRAP</Typography>
          </List>
          <List
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Avatar alt='react' src={reactlogo} />
            <Typography variant='caption'>REACT</Typography>
          </List>
          <List
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Avatar alt='mui' src={mui} />
            <Typography variant='caption'>MUI</Typography>
          </List>
          <List
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Avatar alt='nodejs' src={nodejs} />
            <Typography variant='caption'>NODEJS</Typography>
          </List>
          <List
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Avatar alt='expressjs' src={expressjs} />
            <Typography variant='caption'>EXPRESSJS</Typography>
          </List>
          <List
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Avatar alt='mongodb' src={mongodb} />
            <Typography variant='caption'>MONGODB</Typography>
          </List>
          <List
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Avatar alt='git' src={git} />
            <Typography variant='caption'>GIT</Typography>
          </List>
          <List
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Avatar alt='github' src={githublogo} />
            <Typography variant='caption'>GITHUB</Typography>
          </List>
        </Stack>
        <Box sx={{ my: 2, textAlign: 'center' }}>
          <Button
            variant='outlined'
            color='primary'
            target='_blank'
            href='https://drive.google.com/file/d/1not56sJG76K-K2nfQJk7YXTUgsty1v37/view?usp=share_link'
          >
            View Resume
          </Button>
        </Box>
      </Box>
      {/* <><Container style={{display:"flex", justifyContent: 'center'}}>
      <Box
        textAlign='center'
        sx={{ m: 5, fontSize: '3em', fontWeight: 'bold' }}
      >
        About Me
      </Box>
      <hr></hr>
      <Container sx={{m:5}}
      >
        
      </Container>
      <Container>
        
         
      </Container>
      </Container> */}
    </div>
  )
}
