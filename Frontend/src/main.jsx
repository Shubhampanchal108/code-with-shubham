import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {MyProvider} from './Contexts/Main_Context.jsx'
import { BrowserRouter as Router } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
    <MyProvider>
    <App />
    </MyProvider>
    </Router>
  </StrictMode>,
)
