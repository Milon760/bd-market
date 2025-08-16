import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2'


const SignIn = () => {

    const [show, setShow] = useState(false);

    const navigator = useNavigate()

    const { signInEmailAndPassword, signUpGoogle, setUserInfo, setErrorMsg } = useContext(AuthContext)


    const SignInHandle = (e) => {
        e.preventDefault();
        console.log(e);


        const email = e.target.email.value;
        const pass = e.target.pass.value;





        signInEmailAndPassword(email, pass)
            .then(data => {
                const user = data.user
                console.log(data.user);

                setUserInfo(user)
                Swal.fire({
                    title: " Success",
                    text: " Successfully Signed In ",
                    icon: "success"
                });
                setTimeout(() => {
                    navigator('/')
                }, 2000)

            }).catch(error => {
                console.error(' have a error ', error);
                Swal.fire({
                    title: "Failed",
                    text: error.message,
                    icon: "error",
                });
            })

    }



    const googleSignUPHandel = (e) => {
        e.preventDefault();
        signUpGoogle()
            .then(data => {
                const user = data.user
                setUserInfo(user)
                Swal.fire({
                    title: " Success",
                    text: " Successfully Signed In ",
                    icon: "success"
                });
                setTimeout(() => {
                    navigator('/')
                }, 2000)

            }).catch(error => {
                console.error(" Have a some error", error);
                Swal.fire({
                    title: "Failed",
                    text: error.message,
                    icon: "error",
                });

            })
    }


    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className='max-w-md w-full bg-white p-8 rounded shadow-md relative'>
                <Link to={'/user'} className=' absolute right-3 top-0 text-3xl'> &times; </Link>
                <h1 className=' text-3xl text-center font-bold text-gray-700 mb-5'> Sign In </h1>
                <form onSubmit={SignInHandle} className=' space-y-4'>
                    <div>
                        <label className='text-gray-600 block mb-1 font-medium' htmlFor="email"> Email : </label>
                        <input
                            type="email"
                            name="email"
                            id='email'
                            placeholder='exampale@gamil.com'
                            required
                            className='w-full py-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                        />

                    </div>
                    <div className=' relative'>
                        <label className='text-gray-600 block mb-1 font-medium' htmlFor="pass"> Password : </label>
                        <div className='flex items-center'>
                            <input
                                type={show ? 'text' : 'password'}
                                name="pass"
                                id='pass'
                                placeholder='********'
                                required
                                className='w-full py-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                            />

                            {show ? <IoEyeOutline onClick={() => setShow(!show)} className=' absolute right-3' /> :
                                <IoEyeOffOutline onClick={() => setShow(!show)} className=' absolute right-3' />
                            }

                        </div>
                    </div>
                    <p className='text-right text-cyan-600 hover:underline '> <Link to={'/'}> Forgot Password? </Link> </p>
                    <button
                        type='submit'
                        className='bg-blue-600 w-full p-1 rounded-md text-white font-medium text-lg hover:bg-blue-700 transition duration-200 cursor-pointer'
                    > Sign In </button>

                    <div className='flex justify-center items-center space-x-3'>
                        <div className='flex-grow bg-black h-px'></div>
                        <span> OR </span>
                        <div className='flex-grow bg-black h-px'></div>
                    </div>

                    <div>
                        <button onClick={googleSignUPHandel} className=' w-full border border-gray-400 shadow-md font-medium rounded flex justify-center items-center gap-2 px-5 py-1 cursor-pointer hover:bg-amber-50'><FaGoogle /> Google </button>
                    </div>
                    {/* <div className='flex justify-center space-x-10'>
                        <button onClick={googleSignUPHandel} className='border border-gray-400 shadow-md font-medium rounded flex items-center gap-2 px-5 py-1 cursor-pointer'><FaGoogle /> Google </button>
                        <button className='border border-gray-400 shadow-md font-medium rounded flex items-center gap-2 px-5 py-1 cursor-pointer'> <FaFacebook /> Facebook </button>
                    </div> */}
                </form>
                <p className='text-center text-gray-500 mt-5 font-serif'>
                    Don't have an account? <Link to={'/signup'} className='text-blue-600 font-medium px-2 hover:underline'> Sign Up &rarr; </Link>
                </p>
            </div>
        </div>
    )
}

export default SignIn