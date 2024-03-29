import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import MenuAppBar from './TopBar'

const Navbar = () => {

  const { pathname } = useRouter()

  if (pathname !== '/' && pathname !== '/signup') {
    return <MenuAppBar />
  } else {
    return null
  }

}

export default Navbar