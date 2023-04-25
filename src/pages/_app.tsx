import { authorizatonAPI } from '@/api/authorization.api'
import Navbar from '@/components/Navbar'
import SnackbarrContext from '@/context/SnackbarContext'
import ThemeContext from '@/theme/ThemeProvider'
import { deleteCookie, getCookie, setCookie } from 'cookies-next'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Provider, useSelector } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '../pages/store/index'
import { selectLoged } from './slices/logedReducer'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <ThemeContext>
        <SnackbarrContext>
          <PersistGate loading={null} persistor={persistor}>
            <Navbar />
            <Component {...pageProps} />
          </PersistGate>
        </SnackbarrContext>
      </ThemeContext>
    </Provider>
  )
}