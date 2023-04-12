import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'
import { useTheme } from '@mui/material/styles'

export const useHomeStyles = makeStyles((theme: Theme) => ({
  content: {
    width: '100%',
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.default
  }
}))