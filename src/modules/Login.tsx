import { useLoginStyles } from '@/styles/useStyles/loginStyles'
import { useTheme } from '@/theme/ThemeProvider'
import { Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {

  const classes = useLoginStyles()

  const { toggleTheme } = useTheme()

  return (
    <div
      className={classes.content}
    >
      <div
        className={classes.card}
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
            type='password'
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
            color='secondary'
            size='small'
            sx={{
              textTransform: 'none'
            }}
          >Sign in</Button>
        </Stack>
        <Button onClick={toggleTheme}>click me</Button >
      </div>
    </div>
  )
}

export default Login