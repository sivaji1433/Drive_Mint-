import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Car from "./Components/Bookings/Car";
import Content from "./Components/Bookings/Content";
import Home from "./Components/Bookings/Home";
import Booking from "./Components/Bookings/Booking";
import Landingpag from "./Landing_pag/Landingpag";

function App() {
  return (




    


    
    
      <Routes>
        <Route path="/Register" element={<Register />} />
       <Route path="/login" element={<Login />} />
       <Route path="" element={<Landingpag/>}/>
       
       <Route path="/navbar" element={<Navbar />} />

{/* <Landingpag /> */}



{/* __________________________________________________ */}

   <Route path="/car" element={<Car/>}/>
   <Route path="/contact" element={<Content/>}/>
   <Route path="/home" element={<Home />} />
   <Route path="/booking" element={<Booking />}/>

      </Routes>
    




  );
}


export default App;
