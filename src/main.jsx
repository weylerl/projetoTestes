import React from 'react'
import ReactDOM from 'react-dom/client'
import AppCard from './AppCard'
//import App from './App'
//import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AppCard name="Fulano" email="fulano@example.com" />
     <AppCard name="Ciclano" email="ciclano@example.com" />
     <AppCard name="Beltrano" email="beltrano@example.com" />
  </React.StrictMode>,
)
