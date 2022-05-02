import React from "react";
import { Route,Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import Home from "../components/Home";
import { Products } from "../components/Products";
import About from "../components/About";


const MainRoutes = () => {
  return <>{/* Navbar and all the routes */}
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/about' element={<About/>}></Route>
    </Routes>
    
  </>;
};
export { MainRoutes };
