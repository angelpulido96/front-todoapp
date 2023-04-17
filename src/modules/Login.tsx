import { loginAPI } from '@/api/users.api'
import { takeContext } from '@/context/SnackbarContext'
import { Login } from '@/interfaces/login'
import { setLoged } from '@/pages/slices/logedReducer'
import Utils from '@/resources/Utils'
import { useLoginStyles } from '@/styles/useStyles/loginStyles'
import { Alert, Button, Card, Snackbar, Stack, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'


const Login = () => {

  const classes = useLoginStyles()

  const dispatch = useDispatch()

  const { showSnackBar } = takeContext()

  const initialState: Login = {
    email: '',
    password: ''
  }

  const initialErrors = {
    email: '',
    password: ''
  }

  const [data, setData] = useState({ ...initialState })
  const [errors, setErrors] = useState({ ...initialErrors })

  const router = useRouter()

  const validationData = () => {
    let isValid = true
    const newData = { ...data }
    const _errors = { ...errors }
    const validEmail = Utils.isValidEmail(newData.email)

    if (!newData.email.length) {
      isValid = false
      _errors.email = "Email can't be empty"
    }

    if (newData.email && !validEmail) {
      isValid = false
      _errors.email = "Email invalid format"
    }

    if (!newData.password.length) {
      isValid = false
      _errors.password = "Password can't be empty"
    }

    setErrors(_errors)

    return isValid

  }

  const handleLogin = async () => {
    const isValid = validationData()
    try {
      if (isValid) {
        const request = await loginAPI.login(data)
        if (request.error) {
          throw new Error(request.message)
        }
        dispatch(setLoged(request.data.user))
        router.push('/tasks')
      }
    } catch (error: any) {
      showSnackBar(error.message, true)
    }
  }

  const handleData = ({ target: { id, value } }: React.ChangeEvent<HTMLInputElement>) => {
    setData(prevData => ({
      ...prevData,
      [id]: value
    }))
    setErrors(prevErrors => ({
      ...prevErrors,
      [id]: ''
    }))
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {

    if (event.key == 'Enter') {
      handleLogin()
    }
  }

  return (
    <div
      className={classes.content}
    >
      <form onKeyDown={handleKeyDown}>
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
              id='email'
              placeholder='Type your email'
              label='Email'
              size='small'
              error={!!errors['email']}
              helperText={errors['email']}
              value={data['email']}
              onChange={handleData}
            // InputProps={{
            //   classes: { input: classes.autoFill } only found when global autofill is not going
            // }}
            />
            <TextField
              id='password'
              type='password'
              error={!!errors['password']}
              helperText={errors['password']}
              placeholder='Type your password'
              label='Password'
              size='small'
              value={data['password']}
              onChange={handleData}
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
      </form>
    </div>
  )
}

export default Login