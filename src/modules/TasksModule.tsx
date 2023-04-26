import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import CreateEditTasks from '@/components/CreateEditTasks'
import Table from '@/components/Table'
import { tasksAPI } from '@/api/tasks.api'
import { takeContext } from '@/context/SnackbarContext'

const Tasks = () => {

  const { showSnackBar } = takeContext()

  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState(null)
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    handleGetTasks()
  }, [])

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
  const handleOpenModal = () => setOpenModal(true)

  const handleCloseModal = () => {
    setOpenModal(false)
    setTask(null)
  }

  const handleEditModal = (item: any) => {
    setOpenModal(true)
    setTask(item)
  }

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
        onEdit={handleEditModal}
      />
      <CreateEditTasks
        open={openModal}
        task={task}
        handleClose={handleCloseModal}
        handleGetTasks={handleGetTasks}
      />
    </>
  )
}

export default Tasks