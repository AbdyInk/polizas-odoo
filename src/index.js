import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import 'core-js'

import App from './App'
import store from './store'
import { ChakraProvider } from '@chakra-ui/react'

import 'rsuite/dist/rsuite-no-reset.min.css';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ChakraProvider>
    <App />
    </ChakraProvider>
  </Provider>,
)
