import SnackbarrContext from '@/context/snackbarContext'
import ThemeContext from '@/theme/ThemeProvider'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '../pages/store/index'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContext>
      <SnackbarrContext>
        <PersistGate loading={null} persistor={persistor}>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </PersistGate>
      </SnackbarrContext>
    </ThemeContext>
  )
}