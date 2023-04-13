import React from 'react'
import Brightness5Icon from '@mui/icons-material/Brightness5';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import { IconButton } from '@mui/material'
import { useTheme } from '@/theme/ThemeProvider';

const ChangeTheme = () => {

  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <IconButton
        sx={{
          position: 'absolute'
        }}
        onClick={toggleTheme}
      >
        {
          theme.palette.mode === 'light' ?
            <Brightness3Icon />
            :
            <Brightness5Icon />
        }
      </IconButton>
    </>
  )
}

export default ChangeTheme