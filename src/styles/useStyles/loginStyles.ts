import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'
import { useTheme } from '@mui/material/styles'

export const useLoginStyles = makeStyles((theme: Theme) => ({
  content: {
    width: 400,
    margin: '80px auto',
    [useTheme().breakpoints.down('sm')]: {
      margin: "32px auto",
      width: "calc(100% - 24px)",
    },
  }
  // autoFill: {
  //     "&:-webkit-autofill": {
  //         WebkitBoxShadow: "0 0 0 1000px gray inset", 
  //     }
  // }
}))