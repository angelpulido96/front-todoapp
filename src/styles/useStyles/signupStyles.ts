import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'
import { useTheme } from '@mui/material/styles'

export const useSignupStyles = makeStyles((theme: Theme) => ({
  card: {
    textAlign: 'center',
    width: 400,
    padding: '32px 12px',
    [useTheme().breakpoints.down('sm')]: {
      width: "100%",
    },
  },
}))