import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import Login_Flawless from "./Pages/Login_Flawless";
import Main_Flawless from "./Pages/Main_Flawless";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/Login_Flawless" element={<Login_Flawless/>}/>
      <Route path="/" element={<Main_Flawless/>}/>

    </Routes>
    
    </BrowserRouter>
  </>

  )
}

export default App
