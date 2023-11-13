import React, { useState } from 'react'
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import  {BsPersonCircle} from 'react-icons/bs';
import {BsCartDashFill} from 'react-icons/bs';
function Header() {
    const [showMenu , setShowMenu]= useState(false);

    function handleShowmenu(){
        setShowMenu(prev=>!prev);
    }
    return (
        <header className='fixed shadow-md w-full h-16 px-2 md:p-4 z-50'>
        {/**desktop */}

<div className='flex items-center h-full justify-between'>
<Link to='/' >
<div className='h-12'>

<img src={logo} alt='logo-shop'  className='h-full'/>

</div>
</Link>


<div className='flex items-center gap-4 md:gap-7'>
    <nav className='flex gap-4 md:gap-6  text-base  md:text-lg'>
   <Link to=''>Home</Link>
   <Link to="about">A propos</Link>
   <Link to="contact">Contact</Link>
   <Link to="menu">Menu</Link>
      </nav>

<div className='text-2xl text-slate-600 cursor-pointer'>

    <BsCartDashFill/>
    <div className='absolute top-2 right-16 text-while bg-red-500 h-4 w-4 rounded-fulm-0 text-sm text-center'>0</div>

</div>
<div className='text-2xl text-slate-600' onClick={handleShowmenu}>
<div className='text-3xl cursor-pointer'>
<BsPersonCircle/>
</div>
{showMenu &&(
<div className='absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md'>
<Link to='product' className='whitespace-nowrap cursor-pointer'>Nouveau produit</Link><br/>
<Link to='login' className='whitespace-nowrap cursor-pointer'>Login</Link>
</div>
)}

</div>
</div>
</div>

        {/**mobile */}
            
        </header>
    )
}

export default Header
