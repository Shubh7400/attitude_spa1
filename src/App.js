import React from "react";
import './App.css'
import Contact from './Pages/Contact'
import Signup from "./Pages/Signup";
import Order from "./Pages/Order";
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./Pages/Product";
import Shoes from "./Pages/Items/Shoes";
import Shirts from '../src/Pages/Items/Shirts'
import Tshirts from '../src/Pages/Items/Tshirts'
import Joggers from '../src/Pages/Items/Joggers'
import Jeans from '../src/Pages/Items/Jeans'
import Sweatshirt from '../src/Pages/Items/Sweatshirt'
import Productdetail from "./Pages/Productdetail";




 const App=()=>{
    return(
        <>

        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route  path="/contact" element={<Contact />}></Route>
        <Route  path="/order" element={<Order />}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/details" element={<Product/>}></Route>
        <Route path="/shirts" element={<Shirts/>}></Route>
        <Route path="/tshirt" element={<Tshirts/>}></Route>
        <Route path="/joggers" element={<Joggers/>}></Route>
        <Route path="/shoes" element={<Shoes/>}></Route>
        <Route path="/jeans" element={<Jeans/>}></Route>
        <Route path="/sweatshirt" element={<Sweatshirt/>}></Route>
        <Route path="/productdetail:id" element={<Productdetail/>}></Route>      
             
        </Routes>
        </BrowserRouter>
        </>
    )
 }
 export default App;