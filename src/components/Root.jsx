import React, { useContext } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'

const Root = () => {

const {mode, setMode} = useContext(ThemeContext)


  return (
    <div className={`${mode ? "bg-slate-700" : "bg-[#f8f8f8]"}`}>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Root