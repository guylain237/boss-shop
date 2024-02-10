import React from 'react'
import Header from '../components/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'

function Layout() {
    return (
        <div>
            <Header/>
            <main className='pt-16 bg-slate-100 min-w-[calc(100vh)]'>
            <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default Layout

