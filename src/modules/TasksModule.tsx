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

  const handleOpenModal = () => setOpenModal(!openModal)

  const handleGetTasks = async () => {
    try {
      const request = await tasksAPI.getTasks('')
      if (request.error) {
        throw new Error(request.error.message)
      }
      // console.log("🚀 ~ handleGetTasks ~ request:", request)
    } catch (error: any) {
      showSnackBar(error.message, true)
    }
  }

  useEffect(() => {
    handleGetTasks()
  }, [])

  const columns = [
    { id: 'colonia', label: 'Colonia' },
    { id: 'estado', label: 'Estado' },
    { id: 'total', label: 'Total' },
    { id: 'dato1', label: 'Dato1' },
    { id: 'dato2', label: 'Dato2' },
    { id: 'dato3', label: 'Dato3' },
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
      {/* <Table
        columns={columns}
        rows={sales}
      /> */}
      <CreateTasks
        open={openModal}
        handleClose={handleOpenModal}
      />
    </>
  )
}

export default Tasks