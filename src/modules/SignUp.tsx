import React, { useState } from 'react'
import { loginAPI } from '@/api/users.api'
import { takeContext } from '@/context/SnackbarContext'
import { setLoged } from '@/pages/slices/logedReducer'
import Utils from '@/resources/Utils'
import { Button, Card, Stack, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { useSignupStyles } from '@/styles/useStyles/signupStyles'
import { SingUp } from '@/interfaces/signup'
import FileUpload from '@/components/FileUpload'
import { File } from '@/interfaces/uploadState'

const SignUpModule = () => {

  const classes = useSignupStyles()


  const dispatch = useDispatch()

  const { showSnackBar } = takeContext()

  const initialState: SingUp = {
    name: '',
    firstLastName: '',
    secondLastName: '',
    birthday: '',
    cellphone: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const initialFile: File = {
    type: '',
    size: 0,
    width: 0,
    height: 0,
    base64: '',
    fileName: ''
  }

  const initialErrors = {
    name: '',
    firstLastName: '',
    birthday: '',
    cellphone: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const [file, setFile] = useState({ ...initialFile })
  const [data, setData] = useState({ ...initialState })
  const [errors, setErrors] = useState({ ...initialErrors })
  const [login, setLogin] = useState(false)

  const router = useRouter()

  const validationData = () => {
    const newErrors = { ...errors }
    const validEmail = Utils.isValidEmail(data.email)

    if (!data.name) {
      newErrors.name = "Can't be empty"
    }

    if (!data.firstLastName) {
      newErrors.firstLastName = "Can't be empty"
    }

    if (!data.cellphone) {
      newErrors.cellphone = "Can't be empty"
    } else if (data.cellphone && data.cellphone.length < 10) {
      newErrors.cellphone = "Need 10 digits"
    }

    if (!data.email) {
      newErrors.email = "Can't be empty"
    } else if (data.email && !validEmail) {
      newErrors.email = "Email invalid format"
    }

    if (!data.password) {
      newErrors.password = "Can't be empty"
    }

    if (!data.confirmPassword) {
      newErrors.confirmPassword = "Can't be empty"
    }

    setErrors(newErrors)

    return Object.values(newErrors).every(error => !error)

  }

  const handleSignup = async () => {
    setLogin(true)
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
    setLogin(false)
  }

  const handleData = ({ target: { id, value } }: React.ChangeEvent<HTMLInputElement>) => {
    if (id === 'cellphone') {
      const regex = new RegExp('^[0-9]*$')
      if (regex.test(value)) {
        setData(prevData => ({
          ...prevData,
          [id]: value
        }))
      }
    } else {
      setData(prevData => ({
        ...prevData,
        [id]: value
      }))
    }
    setErrors(prevErrors => ({
      ...prevErrors,
      [id]: ''
    }))
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key == 'Enter') {
      handleSignup()
    }
  }

  const handleSignUp = () => router.push('/')

  const handleDeleteImage = () => {
    setFile({ ...initialFile })
  }

  const handleErrorFile = () => {
    setErrors((prevState) => ({ ...prevState, avatar: '' }))
  }

  return (
    <form onKeyDown={handleKeyDown}>
      <Card
        sx={{
          boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
        }}
        className={classes.card}
      >
        <Stack spacing={2}>
          <Typography variant='h4'>Sign Up</Typography>
          <Typography >Type below data to subscribe</Typography>
          <TextField
            id='name'
            autoFocus
            autoComplete="off"
            placeholder='Type your name(s)'
            label='Name(s)'
            size='small'
            disabled={login}
            error={!!errors['name']}
            helperText={errors['name']}
            value={data['name']}
            onChange={handleData}
            inputProps={{
              form: {
                autocomplete: 'off',
              },
            }}
          />
          <Stack direction='row' spacing={1}>
            <TextField
              id='firstLastName'
              placeholder='Type your first last name'
              label='First last name'
              size='small'
              disabled={login}
              error={!!errors['firstLastName']}
              helperText={errors['firstLastName']}
              value={data['firstLastName']}
              onChange={handleData}
              autoComplete="off"
              inputProps={{
                form: {
                  autocomplete: 'off',
                },
              }}
            />
            <TextField
              id='secondLastName'
              placeholder='Type your second last Name'
              label='Second last name'
              size='small'
              disabled={login}
              value={data['secondLastName']}
              onChange={handleData}
              autoComplete="off"
              inputProps={{
                form: {
                  autocomplete: 'off',
                },
              }}
            />
          </Stack>
          <Stack direction='row' spacing={1}>
            <TextField
              id='cellphone'
              placeholder='Type your movile number'
              label='Cellphone'
              size='small'
              disabled={login}
              error={!!errors['cellphone']}
              helperText={errors['cellphone']}
              value={data['cellphone']}
              onChange={handleData}
              inputProps={{
                maxLength: 10,
                form: {
                  autocomplete: 'off',
                },
              }}
            />
            <TextField
              id='email'
              placeholder='Type your email'
              label='Email'
              size='small'
              error={!!errors['email']}
              helperText={errors['email']}
              value={data['email']}
              onChange={handleData}
              disabled={login}
              inputProps={{
                form: {
                  autocomplete: 'off',
                },
              }}
            />
          </Stack>
          <Stack direction='row' spacing={1}>
            <TextField
              id='password'
              autoComplete='off'
              InputProps={{ autoComplete: "off" }}
              type='password'
              error={!!errors['password']}
              helperText={errors['password']}
              placeholder='Type your password'
              label='Password'
              disabled={login}
              size='small'
              value={data['password']}
              onChange={handleData}
            />
            <TextField
              id='confirmPassword'
              type='password'
              error={!!errors['confirmPassword']}
              helperText={errors['confirmPassword']}
              placeholder='Confirm your password'
              label='Confirm password'
              size='small'
              disabled={login}
              value={data['confirmPassword']}
              onChange={handleData}
            />
          </Stack>
          <FileUpload
            file={file}
            setFile={setFile}
            handleDeleteImage={handleDeleteImage}
            typesAccepted={['pdf', 'images']}
            handleErrorFile={handleErrorFile}
            disabled={login}
          />
          <Button
            variant='contained'
            size='small'
            onClick={handleSignup}
            sx={{
              textTransform: 'none'
            }}
          >Sign Up</Button>
          <Button
            color='secondary'
            size='small'
            onClick={handleSignUp}
            sx={{
              textTransform: 'none',
            }}
          >Already have an account?</Button>
        </Stack>
      </Card >
    </form >
  )
}

export default SignUpModule