import { useLoginStyles } from '@/styles/useStyles/loginStyles'
import { Button, Card, Stack, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

const Login = () => {

  const classes = useLoginStyles()

  const router = useRouter()

  const handleLogin = () => {
    router.push('/tasks')
  }

  return (
    <div
      className={classes.content}
    >
      <Card
        sx={{
          padding: '32px 12px',
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
          // InputProps={{
          //   classes: { input: classes.autoFill } only found when global autofill is not going
          // }}
          />
          <TextField
            type='password'
            placeholder='Type your password'
            label='Password'
            size='small'
          />
          <Button
            variant='contained'
            size='small'
            onClick={handleLogin}
            sx={{
              textTransform: 'none'
            }}
          >Login</Button>
          <Button
            color='secondary'
            size='small'
            sx={{
              textTransform: 'none'
            }}
          >Sign in</Button>
        </Stack>
      </Card >
    </div>
  )
}

export default Login