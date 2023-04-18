import React from 'react'
import SignUpModule from '@/modules/SignUp'
import { useSignupStyles } from '@/styles/useStyles/signupStyles'
import { useHomeStyles } from '@/styles/useStyles/homeStyles'

const SignUp = () => {

  const classes = useHomeStyles()

  return (
    <div className={classes.content}>
      <SignUpModule />
    </div>
  )
}

export default SignUp