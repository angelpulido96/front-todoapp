import '@/styles/globals.css'
import ThemeContext from '@/theme/ThemeProvider'
import type { AppProps } from 'next/app'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '../pages/store/index'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContext>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </ThemeContext>
  )
}