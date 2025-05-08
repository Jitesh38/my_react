import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Cart from './cart.jsx'


const reactElement = React.createElement(
  'a',
  {
    href : 'https://google.com',
    target : '_self'
  },
  'click me to visit google'
);

createRoot(document.getElementById('root')).render(

  <>
    reactElement
    <App />
  </>

)
