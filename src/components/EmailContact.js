import React, { useState, useEffect } from 'react'
import { Typography, Grid, Button, TextField, Card } from '@mui/material'
import validate from 'validate.js'
import emailjs from 'emailjs-com'

const USER_ID = process.env.REACT_APP_EMAILJS_USERID
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATEID
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICEID

console.log(USER_ID)
const schema = {
  name: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 128
    }
  },
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 300
    }
  },
  message: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 300
    }
  }
}

const EmailContact = ({ contactSection }) => {
const [emailIsSent,setEmailIsSent]=useState(false)

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then(res => {
        console.log('SUCCESS!', res.status, res.text)
        setEmailIsSent(true)
        setTimeout(()=>setEmailIsSent(false),10000)
    })
      .catch(error => console.log('FAILED...', error))

    setFormState(formState => ({
      ...formState,
      isValid: false,
      values: {},
      touched: {},
      errors: {}
    }))
  }

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  })

  useEffect(() => {
    const errors = validate(formState.values, schema)

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }))
  }, [formState.values])

  const handleChange = e => {
    e.persist()
    console.log(1111)
    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [e.target.name]:
          e.target.type === 'checkbox' ? e.target.checked : e.target.value,
        [e.target.message]: e.target.value
      },
      touched: {
        ...formState.touched,
        [e.target.name]: true,
        [e.target.message]: true
      }
    }))
    console.log(222)
  }

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false

  return (
    <div ref={contactSection}>
      <form headers='application/json' name='contact-form' onSubmit={sendEmail}>
        <Card
          style={{
            height: '100%',
            maxWidth: 650,
            padding: '30px 5px',
            margin: '1em auto',
            
            boxShadow: 'none',
            backgroundColor: 'white'
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{margin:"1em"}}>
              <Typography variant='h4' align='center' sx={{fontSize:"3em"}}>
                <strong>Contact </strong>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                placeholder='Name'
                label='Name *'
                variant='outlined'
                size='medium'
                name='name'
                id='name'
                fullWidth
                helperText={hasError('name') ? formState.errors.name[0] : null}
                error={hasError('name')}
                onChange={handleChange}
                type='text'
                value={formState.values.name || ''}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                placeholder='E-mail'
                label='E-mail *'
                variant='outlined'
                size='medium'
                name='email'
                fullWidth
                helperText={
                  hasError('email') ? formState.errors.email[0] : null
                }
                error={hasError('email')}
                onChange={handleChange}
                type='email'
                value={formState.values.email || ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                placeholder='message'
                multiline
                rows={4}
                label='Message *'
                variant='outlined'
                size='medium'
                name='message'
                id='message'
                fullWidth
                
                error={hasError('message')}
                onChange={handleChange}
                type='text'
                value={formState.values.message || ''}
              />
            </Grid>
            {emailIsSent ?(<Grid item xs={12} sx={{display:"flex", justifyContent:"center",marginTop:"1em"}}>
                <Typography>Your message has been sent.</Typography>
            </Grid>):<></>
            }
            
            <Grid item xs={12} sx={{display:"flex", justifyContent:"center",marginTop:"1em"}}>
              <Button
                size='large'
                variant='contained'
                type='submit'
                color='primary'
                disabled={!formState.isValid}
                
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </Card>
      </form>
    </div>
  )
}

export default EmailContact
