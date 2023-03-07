import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import DevTools from "react-async-devtools"


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <DevTools/>
        <App/>
    </React.StrictMode>
)

