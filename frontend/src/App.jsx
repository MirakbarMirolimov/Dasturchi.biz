import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css"
import AppLayout from "./layout/AppLayout";


function App(){
  return (
    <BrowserRouter>

      <Routes>  
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App;