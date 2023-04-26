import { Dialog, DialogActions, DialogContentText, DialogTitle, Typography } from '@mui/material'
import React from 'react'
import { PrimaryButton, SecondaryButton } from './styles/Buttons'

interface Props<T = undefined> {
  open: boolean,
  title: string,
  description: string,
  handleClose: () => void,
  onConfirm: (item?: T) => void
}

const ConfirmModal = (props: Props) => {
  return (
    <Dialog
      open={props.open}
      PaperProps={{
        style: { padding: 12 }
      }}
    >
      <DialogTitle>
        <Typography>{props.title}</Typography>
      </DialogTitle>
      <DialogContentText>
        <Typography>{props.description}</Typography>
      </DialogContentText>
      <DialogActions>
        <SecondaryButton
          onClick={props.handleClose}
        >
          Cancel
        </SecondaryButton>
        <PrimaryButton
          onClick={() => props.onConfirm()}
        >
          Confirm
        </PrimaryButton>
      </DialogActions>
    </Dialog>
  )
}

export default ConfirmModal