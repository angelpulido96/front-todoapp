import React, { useState } from 'react'
import MenuAppBar from '@/components/TopBar'
import { Button } from '@mui/material'
import CreateTasks from '@/components/CreateTasks'

const Tasks = () => {

  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => setOpenModal(!openModal)

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
      <CreateTasks
        open={openModal}
        handleClose={handleOpenModal}
      />
    </>
  )
}

export default Tasks