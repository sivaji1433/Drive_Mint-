import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Project/Navbar.jsx'
import Booking from './Project/Home/Booking.jsx'
import Main2 from './Project/Main2.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <BrowserRouter>

<App />
<Main2 />

  </BrowserRouter>
)
