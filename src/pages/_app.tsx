import Navbar from '@/components/Navbar'
import SnackbarrContext from '@/context/SnackbarContext'
import ThemeContext from '@/theme/ThemeProvider'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '../pages/store/index'

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