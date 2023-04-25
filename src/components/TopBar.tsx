import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { clearLoged, selectLoged } from '@/pages/slices/logedReducer'
import { deleteCookie } from 'cookies-next'

const MenuAppBar = () => {

  const router = useRouter()

  const dispatch = useDispatch()

  const logedUser = useSelector(selectLoged)

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = async () => {
    deleteCookie('authorization')
    deleteCookie('refreshToken')
    handleClose()
    dispatch(clearLoged())
    router.push('/')
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {`${logedUser.name} ${logedUser.firstLastName} ${logedUser.secondLastName}`}
          </Typography>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            {
              logedUser.avatar?.url ?
                <img src={logedUser.avatar.url} style={{ height: 30, width: 30, borderRadius: 250 }} />
                :
                <AccountCircle style={{ height: 30, width: 30 }} />
            }
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MenuAppBar