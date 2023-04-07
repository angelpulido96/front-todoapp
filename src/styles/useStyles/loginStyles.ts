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
    },
    card: {
        width: '100%',
        padding: '64px 24px',
        backgroundColor: '#ffffff',
        borderRadius: 3,
        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
    }
}))