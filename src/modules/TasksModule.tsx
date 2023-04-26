import React, { useEffect, useState } from 'react'
import MenuAppBar from '@/components/TopBar'
import { Button } from '@mui/material'
import CreateTasks from '@/components/CreateTasks'
import Table from '@/components/Table'
import { tasksAPI } from '@/api/tasks.api'
import { takeContext } from '@/context/SnackbarContext'

const Tasks = () => {

  const { showSnackBar } = takeContext()

  const [openModal, setOpenModal] = useState(false)
  const [tasks, setTasks] = useState([])

  const handleOpenModal = () => {
    handleGetTasks()
    setOpenModal(!openModal)
  }



  const handleGetTasks = async () => {
    try {
      const request = await tasksAPI.getTasks('')
      if (request.error) {
        throw new Error(request.error.message)
      }
      setTasks(request.data.tasks)
    } catch (error: any) {
      showSnackBar(error.message, true)
    }
  }

  useEffect(() => {
    handleGetTasks()
  }, [])

  const columns = [
    { id: 'title', label: 'Title', size: 'xs' },
    { id: 'description', label: 'Description' },
    { id: 'limitDate', label: 'Limit date', type: 'date', size: 'xs' },
    { id: 'createdBy.name', label: 'Create By', size: 'xs' }
  ];

  return (
    <>
      <Button
        variant='outlined'
        onClick={handleOpenModal}
        style={{
          position: 'absolute',
          top: 80,
          right: 12
        }}
      >Add task</Button>
      <Table
        columns={columns}
        rows={tasks}
      />
      <CreateTasks
        open={openModal}
        handleClose={handleOpenModal}
        handleGetTasks={handleGetTasks}
      />
    </>
  )
}

export default Tasks