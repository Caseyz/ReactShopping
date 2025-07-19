import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import Store from '@/store'
import '@/i18n'

import * as Sentry from "@sentry/browser";
import { BrowserTracing } from "@sentry/tracing";

// use sentry catch error
Sentry.init({
  dsn: "https://examplePublicKey@o0.ingest.sentry.io/0",

  // Alternatively, use `process.env.npm_package_version` for a dynamic release version
  // if your build tool supports it.
  release: "my-project-name@2.3.12",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

import './stylesheets/index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={Store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
)
