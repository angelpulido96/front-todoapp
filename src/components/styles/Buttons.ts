import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'

export const PrimaryButton = styled(Button)({
    borderRadius: 3,
    fontSize: 14,
    fontWeight: 700,
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
    ':hover': {
        borderRadius: 16,
    }
})

export const SecondaryButton = styled(Button)({
    borderRadius: 6,
    fontSize: 14,
    fontWeight: 700,
    padding: '6px 17px',
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
    ':hover': {
        borderRadius: 16,
    }
})