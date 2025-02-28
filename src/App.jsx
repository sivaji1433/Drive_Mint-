
import { Contact, Home } from 'lucide-react'
import './App.css'
import Navbar from './Project/Navbar'
import Booking from './Project/Home/Booking'
import Car from './Project/Home/Car'
import { Routes,Route } from 'react-router-dom'
import Login from './Project/Home/Login'


function App() {
  

  return (
    <>
<Navbar />

{/* <Photo /> */}







<Routes>

<Route path='/home' element={<Home />} />
<Route path='/booking' element={<Booking />} />
<Route path='/car' element={<Car />} />
<Route path='/contact' element={<Contact />} />
<Route path='/login' element={<Login />} />


</Routes>


{/* <CarBooking /> */}




    </>
  )
}

export default App




