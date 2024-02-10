import /*toast,*/ { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";

import Product from "./Pages/Product";
import Inscription from "./authentification/Inscription";
import Login from "./authentification/Login";
import Layout from "./layout/Layout";

import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductRedux } from './redux/ProductSlice';
import Success from './Pages/Success';
import Menu from './Pages/Menu';
import Cart from './Pages/Cart';

function App() {
  const dispatch = useDispatch();
 const productData = useSelector((state)=>state.product);
 console.log(productData);

 useEffect(() => {
  
  const fetchData = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_SERVER}/products`);
      console.log(res);
      dispatch(setProductRedux(res.data));

    } catch (error) {
      console.error("Une erreur s'est produite lors de la récupération des produits :", error);
    }
  };

  fetchData(); 

}, [dispatch]);

console.log(productData);
  return (

    <div className=''>
      <Toaster />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >

            <Route index element={<Home />} />

            <Route  path="menu/:filterby" element={<Menu />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="inscription" element={<Inscription />} />
            <Route path="product" element={<Product />} />
            <Route path="success" element={<Success />} />
            <Route path="cart" element={<Cart />} />

          </Route>



        </Routes>

      </BrowserRouter>

    </div>


  );
}

export default App
