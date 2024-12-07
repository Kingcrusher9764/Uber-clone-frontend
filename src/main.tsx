import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom"
import UserContext from './context/UserContext.tsx'
import DriverContext from './context/DriverContext.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <UserContext>
            <DriverContext>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </DriverContext>
        </UserContext>
    </StrictMode>,
)
