import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PhoneBookContextProvider from './context/PhoneBookContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PhoneBookContextProvider>
      <App />
    </PhoneBookContextProvider>
  </React.StrictMode>
)
