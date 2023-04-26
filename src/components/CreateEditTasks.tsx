import React, { useEffect, useState } from 'react'
import { Props, Task } from '@/interfaces/createTasks'
import { Dialog, DialogActions, DialogContent, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system';
import { PrimaryButton, SecondaryButton } from './styles/Buttons';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { takeContext } from '@/context/SnackbarContext';
import { tasksAPI } from '@/api/tasks.api';
import { useSelector } from 'react-redux';
import { selectLoged } from '@/pages/slices/logedReducer';

const CreateEditTasks = ({ open, task, ...props }: Props) => {

  const { showSnackBar } = takeContext()

  const logedUser = useSelector(selectLoged)

  const initialState: Task = {
    title: '',
    description: '',
  }

  const initialErrors = {
    title: '',
    description: '',
    limitDate: ''
  }

  const [state, setState] = useState({ ...initialState })
  const [errors, setErrors] = useState({ ...initialErrors })

  const [loading, setLoading] = useState(false)
  const [limitDate, setLimitDate] = React.useState<Dayjs | null>(dayjs(new Date()))

  useEffect(() => {
    if (task) {
      setState({
        title: task.title,
        description: task.description
      })
      setLimitDate(dayjs(task?.limitDate))
    }
  }, [task])


  const handleValidation = async () => {
    const newErrors = { ...errors }

    if (!state.title) {
      newErrors.title = "Title can't be empty"
    }

    if (!limitDate) {
      newErrors.limitDate = 'Invalid date'
    }

    if (!state.description) {
      newErrors.description = "Description can't be empty"
    }

    setErrors(newErrors)

    const isValid = Object.values(newErrors).every(error => !error)
    if (isValid) {
      return {
        title: state.title,
        description: state.description,
        limitDate: dayjs(limitDate).format('DD/MM/YYYY'),
        createdBy: logedUser.id ?? ''
      }
    }
    return null
  }

  const handleConfirm = async () => {
    setLoading(true)
    try {

      const isValid = await handleValidation()

      if (isValid) {
        if (task) {
          const editTask = await tasksAPI.editTask({ ...isValid, id: task._id })
          if (editTask.error) {
            throw new Error(editTask.message)
          }
        } else {
          const createTasks = await tasksAPI.createTask(isValid)
          if (createTasks.error) {
            throw new Error(createTasks.message)
          }
        }
        handleClose()
        props.handleGetTasks()
        showSnackBar('Task created', false)
      }
    } catch (error: any) {
      showSnackBar(error.message, true)
    }
    setLoading(false)
  }

  const handleChangeValues = ({ target: { id, value } }: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({
      ...prevState,
      [id]: value
    }))
    setErrors((prevState) => ({
      ...prevState,
      [id]: ''
    }))
  }

  const handleChange = (newValue: Dayjs | null) => {
    setErrors({ ...errors, limitDate: '' })
    setLimitDate(newValue)
  }

  const handleLimitDateError = (error: string | null) => {
    if (error) {
      setErrors({ ...errors, limitDate: 'Invalid date' })
    } else {
      setErrors({ ...errors, limitDate: '' })
    }
  }

  const handleClose = () => {
    props.handleClose()
    setErrors({ ...initialErrors })
    setState({ ...initialState })
    setLimitDate(dayjs(new Date()))
  }


  return (
    <Dialog
      open={open}
      fullWidth
      onClose={handleClose}
      PaperProps={{
        style: { padding: 12, width: 400 }
      }}
    >
      <Typography>Create task</Typography>
      <DialogContent>
        <Stack spacing={1}>
          <Stack direction='row' spacing={1}>
            <TextField
              id='title'
              label='Title'
              fullWidth
              size='small'
              disabled={loading}
              error={!!errors.title}
              helperText={errors.title}
              value={state.title}
              onChange={handleChangeValues}
            />
          </Stack>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Date desktop"
              value={limitDate}
              format="DD/MM/YYYY"
              onChange={handleChange}
              onError={handleLimitDateError}
              disabled={loading}
              slotProps={{
                textField: {
                  size: 'small',
                  fullWidth: true,
                  error: !!errors.limitDate,
                  helperText: errors.limitDate
                }
              }}
            />
          </LocalizationProvider>
          <TextField
            id='description'
            label='Description'
            size='small'
            multiline
            disabled={loading}
            fullWidth
            error={!!errors.description}
            helperText={errors.description}
            value={state.description}
            onChange={handleChangeValues}
            placeholder='Type task description'
            minRows={2}
            maxRows={6}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <SecondaryButton
          disabled={loading}
          onClick={handleClose}
          variant='outlined'
        >Cancel</SecondaryButton>
        <PrimaryButton
          variant='contained'
          disabled={loading}
          fullWidth
          onClick={handleConfirm}
        >Confirm</PrimaryButton>
      </DialogActions>
    </Dialog >
  )
}

export default CreateEditTasks