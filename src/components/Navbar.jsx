import React, { useContext, useState } from 'react'
import { BsCartFill } from 'react-icons/bs'
import { FaBars, FaMoon, FaSearch, FaSun, FaUser } from 'react-icons/fa'
import { IoCloseSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext'
import { ThemeContext } from '../context/ThemeContext'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {


    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const { mode, setMode } = useContext(ThemeContext)
    const { productData } = useContext(ProductContext)

    const {  userInfo } = useContext(AuthContext)



    return (
        <nav className='flex justify-between items-center bg-gray-600 text-white p-3 lg:p-6 fixed w-full top-0 z-40 shadow shadow-black'>
            <h1 className='text-cyan-500 font-bold md:font-extrabold text-xl lg:text-2xl'> BD <span className='text-yellow-500'>MARKET </span></h1>
            <div className='hidden md:flex items-center gap-5 lg:gap-14'>
                <ul className='flex gap-3 lg:gap-6 text-xl '>
                    <li className='font-medium hover:text-yellow-500'> <Link to={'/'}> Home  </Link></li>
                    <li className='font-medium hover:text-yellow-500'> <Link to={'/products'}> Products </Link> </li>
                    <li className='font-medium hover:text-yellow-500'> <Link to={'/about'}> About </Link> </li>
                    <li className='font-medium hover:text-yellow-500'> <Link to={'/contact'}> Contact </Link> </li>
                </ul>
                <div className='flex items-center gap-2 lg:gap-4'>
                    <div className='flex items-center relative'>
                        <input type="text" placeholder='Search Products...'
                            className='border rounded-full px-4 py-1 w-44 lg:w-52 focus:w-52 lg:focus:w-64 transition-all duration-500 ease-in-out' />
                        <FaSearch className='absolute right-3' />
                    </div>
                    <button className=' relative p-2'>
                        <Link to={'/cart'}>
                            <BsCartFill className='text-2xl' />
                            <span
                                className=' text-white bg-green-700 px-1 rounded-full font-bold absolute right-0 top-0'> {productData.length}
                            </span>
                        </Link>
                    </button>
                    <button><Link to={'/user'}> <FaUser className={`${ userInfo ? 'text-2xl text-green-400' : 'text-2xl'}`} /> </Link></button>
                    <button> {mode ? <FaSun onClick={() => setMode(!mode)} className='text-xl' /> : <FaMoon onClick={() => setMode(!mode)} className='text-xl' />} </button>
                </div>
            </div>

            {/* mobile menu  */}
            <div className='flex items-center gap-3 md:hidden relative'>
                <div className='flex items-center relative'>
                    <input type="text" placeholder='Search Products...'
                        className='border rounded-full px-4 w-44 focus:w-52 transition-all duration-500 ease-in-out' />
                    <FaSearch className='absolute right-3' />
                </div>
                <button className=' relative p-2'>
                    <Link to={'/cart'}>
                        <BsCartFill className='text-2xl' />
                        <span
                            className=' text-white bg-green-700 px-1 rounded-full font-bold absolute right-0 top-0'> {productData.length}
                        </span>
                    </Link>
                </button>
                {
                    isOpenMenu ? <IoCloseSharp onClick={() => setIsOpenMenu(!isOpenMenu)} className='text-xl' /> : <FaBars onClick={() => setIsOpenMenu(!isOpenMenu)} className='' />
                }

                <ul className={`${isOpenMenu ? "block" : "hidden"} absolute top-14 right-1 bg-gray-700 p-4 rounded`}>
                    <li className='my-2 font-medium hover:text-yellow-500'> <Link to={'/'}> Home  </Link></li>
                    <li className='my-2 font-medium hover:text-yellow-500'><Link to={'/products'}> Products </Link> </li>
                    <li className='my-2 font-medium hover:text-yellow-500'> <Link to={'/about'}> About </Link> </li>
                    <li className='my-2 font-medium hover:text-yellow-500'> <Link to={'/contact'}> Contact </Link> </li>
                    <li className='my-2 '><Link to={'/user'}> <FaUser className={`${ userInfo && ' text-green-400'}`} /> </Link></li>
                    <li className='my-2 '>{mode ? <FaSun onClick={() => setMode(!mode)} className='text-xl' /> : <FaMoon onClick={() => setMode(!mode)} className='text-xl' />} </li>
                </ul>
            </div>


        </nav>
    )
}

export default Navbar