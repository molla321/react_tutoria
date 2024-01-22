import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/Style.css'
import Apps from './Apps.jsx';



  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
      <Apps />
    </React.StrictMode>,
  )


