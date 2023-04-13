import ChangeTheme from '@/modules/ChangeTheme'
import { useHomeStyles } from '@/styles/useStyles/homeStyles'
import Login from '../modules/Login'



export default function Home() {

  const classes = useHomeStyles()

  return (
    <>
      <ChangeTheme />
      <div className={classes.content}>
        <Login />
      </div>
    </>
  )
}
