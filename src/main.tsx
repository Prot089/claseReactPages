import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from '/app
import './index.css'
import AppRouter from './Router/AppRouter'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>,
)