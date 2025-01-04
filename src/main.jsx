/********************************************************
 * File Name: 
 * Date: 1/2/2025
 * Description: 
 * Dependencies: 
 * Author(s): Ivan Wong
 ********************************************************/


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
