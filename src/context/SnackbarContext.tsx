import { createContext, useContext, useState } from 'react'

// MUI
import { Alert, Icon, IconButton, Snackbar } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';


type Props = {
  children: string | JSX.Element | JSX.Element[]
}

type ContextType = {
  snackBarState: Object,
  showSnackBar: (message: string, error?: Boolean) => void,
}

const mainLayout = createContext<ContextType>({
  snackBarState: {},
  showSnackBar: () => { }
})

const SnackbarrContext = ({ children }: Props) => {
  const [snackBarState, setSnackBarState] = useState({
    open: false,
    message: '',
    error: false
  })

  const handleClose = () => setSnackBarState({ open: false, message: '', error: false })
  const handleOpenSnack = (message: string, error?: Boolean) => {
    setSnackBarState({
      open: !!message,
      message: message,
      error: !!error
    })
  }

  return (
    <mainLayout.Provider
      value={{
        snackBarState,
        showSnackBar: handleOpenSnack
      }}>
      <>
        <Snackbar
          open={snackBarState.open}
          onClose={handleClose}
          autoHideDuration={5000}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          action={
            <IconButton
              color='inherit'
              onClick={() => handleClose()}><CloseIcon /></IconButton>
          } >
          <Alert onClose={handleClose} severity={snackBarState.error ? 'error' : 'success'} sx={{ width: '100%' }}>
            {snackBarState.message}
          </Alert>
        </Snackbar>
        {children}
      </>
    </mainLayout.Provider>
  )
}

export const takeContext = () => {
  return useContext(mainLayout)
}


export default SnackbarrContext
