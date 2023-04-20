import { ManagementRoutes } from '@/components/managementRoutes'
import SnackbarrContext from '@/context/SnackbarContext'
import ThemeContext from '@/theme/ThemeProvider'
import { $CombinedState } from '@reduxjs/toolkit'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '../pages/store/index'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ThemeContext>
      <Provider store={store}>
        <SnackbarrContext>
          <PersistGate loading={null} persistor={persistor}>
            <ManagementRoutes>
              <Component {...pageProps} />
            </ManagementRoutes>
          </PersistGate>
        </SnackbarrContext>
      </Provider>
    </ThemeContext>
  )
}