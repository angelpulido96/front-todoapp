import { Button, Card, OutlinedInput, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {



  return (
    <div
      style={{
        width: 400,
        margin: '80px auto'
      }}
    >
      <div
        style={{
          width: '100%',
          padding: '64px 24px',
          backgroundColor: '#ffffff',
          borderRadius: 3,
          boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
        }}
      >
        <Stack spacing={2}>
          <Typography variant='h4'>Welcome</Typography>
          <Typography >Type your email and password to log in</Typography>
          <TextField
            placeholder='Type your email'
            label='Email'
            size='small'
          />
          <TextField
            placeholder='Type your password'
            label='Password'
            size='small'
          />
          <Button
            variant='contained'
            size='small'
            sx={{
              textTransform: 'none'
            }}
          >Login</Button>
          <Button
            size='small'
            sx={{
              textTransform: 'none'
            }}
          >Sign in</Button>
        </Stack>
      </div>
    </div>
  )
}

export default Login