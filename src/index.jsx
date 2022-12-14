import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import App from './App'
import {ContextProvider} from "./Context"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ContextProvider>
        <App />
      </ContextProvider>
    </Router>
  </React.StrictMode>
  

)
