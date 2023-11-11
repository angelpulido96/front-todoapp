import React from 'react'
import { PrimaryButton, SecondaryButton } from './styles/Buttons'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'

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
    >
      <DialogTitle>
        {props.title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {props.description}
        </DialogContentText>
      </DialogContent>
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