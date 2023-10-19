import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import Main_Flawless from "./Pages/Main_Flawless";
import About from "./Pages/About";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";


function App() {


 
  return (
    <>
    <BrowserRouter>
    <Routes>
    
      <Route path="/" element={<Main_Flawless/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>

    </Routes>
    
    </BrowserRouter>
  </>

  )
}

export default App
