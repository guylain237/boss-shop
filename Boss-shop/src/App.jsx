import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Layout from "./layout/Layout";
import Home from "./Pages/Home";
import { Menu } from "./Pages/Menu";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Product from "./Pages/Product";

function App() {

  return (
   
      <div className=''>

      <BrowserRouter>
<Routes>
<Route path='/' element={<Layout/>} >

<Route index  element={<Home/>} />

<Route path="menu"  element={<Menu/>} />
<Route path="contact"  element={<Contact/>} />
<Route path="about"  element={<About/>} />
<Route path="login"  element={<Login/>} />
<Route path="product"  element={<Product/>} />

</Route>



</Routes>

      </BrowserRouter>
      
      </div>

  
  );
}

export default App
