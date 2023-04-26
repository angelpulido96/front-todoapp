import ChangeTheme from '@/modules/ChangeTheme'
import { useHomeStyles } from '@/styles/useStyles/homeStyles'
import { getCookie } from 'cookies-next'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Login from '../modules/Login'
import { clearLoged } from './slices/logedReducer'



export default function Home() {

  const classes = useHomeStyles()

  const dispatch = useDispatch()

  useEffect(() => {
    const cookie = getCookie('authorization')
    if (!cookie) {
      dispatch(clearLoged())
    }
  }, [])


  return (
    <>
      <ChangeTheme />
      <div className={classes.content}>
        <Login />
      </div>
    </>
  )
}
