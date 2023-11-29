import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
//import './index.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import "@mantine/core/styles.css"
import { MantineProvider, createTheme } from "@mantine/core"
import "./styles/global.scss"
import { BrowserRouter } from "react-router-dom"
import { Notifications } from "@mantine/notifications"
import '@mantine/notifications/styles.css';
const theme = createTheme({
    /** Put your mantine theme override here */
})

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                
                    <MantineProvider theme={theme}>
                        <Notifications position="top-center" />
                        <App />
                    </MantineProvider>
                
            </QueryClientProvider>
        </BrowserRouter>
  </React.StrictMode>,
)
