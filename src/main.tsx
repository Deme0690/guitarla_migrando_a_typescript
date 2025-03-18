// Archivo principal de react
import React from 'react'
import ReactDOM from 'react-dom/client' 
import App from './App.tsx'
import './index.css' 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Operador !: Assertion not null - non null assertion operator 
// Es como decirle a typescript (ts): "Este elemento existe, no va a ser null"

