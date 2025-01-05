/********************************************************
 * File Name: main.js
 * Date: 1/2/2025
 * Description: JSX file for main webpage for portfolio
 *              website
 * Dependencies: React
 *               index.css
 *               App.jsx
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
