import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import CreateEditTasks from '@/components/CreateEditTasks'
import Table from '@/components/Table'
import { tasksAPI } from '@/api/tasks.api'
import { takeContext } from '@/context/SnackbarContext'
import ConfirmModal from '@/components/ConfirmModal'
import { CompleteTask } from '@/interfaces/createTasks'

const Tasks = () => {

  const { showSnackBar } = takeContext()

  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState<CompleteTask | null | string>(null)
  const [openModal, setOpenModal] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)

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

  const handleEditModal = (item: CompleteTask) => {
    setOpenModal(true)
    setTask(item)
  }

  const handleDeleteTask = async () => {
    try {
      let id = typeof task === 'string' ? task : ''
      const request = await tasksAPI.deleteTask(id)
      if (request.error) {
        throw new Error(request.error.message)
      }
      showSnackBar('Task deleted', false)
      setTask(null)
      setConfirmDelete(false)
      handleGetTasks()
    } catch (error: any) {
      showSnackBar(error.message, true)
    }
  }

  const handleConfirmDelete = (item: CompleteTask) => {
    setTask(item)
    setConfirmDelete(true)
  }

  const handleCloseDeleteModal = () => {
    setTask(null)
    setConfirmDelete(false)
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
        onDelete={handleConfirmDelete}
      />
      <CreateEditTasks
        open={openModal}
        task={task}
        handleClose={handleCloseModal}
        handleGetTasks={handleGetTasks}
      />
      <ConfirmModal
        open={confirmDelete}
        title='Delete task?'
        description='Are you sure?. If delete this task, can"t will show again'
        onConfirm={handleDeleteTask}
        handleClose={handleCloseDeleteModal}
      />
    </>
  )
}

export default Tasks