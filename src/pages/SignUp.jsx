import React, { useContext, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom';
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { AuthContext } from '../context/AuthContext';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2'



const SignUp = () => {

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [errorMsg, setErrorMsg] = useState('')

    const navigator = useNavigate()

    const { signUpEmailPassword, setUserInfo, successMsg, setSuccessMsg } = useContext(AuthContext)

    const formHandle = (e) => {
        e.preventDefault();

        const name = e.target.fullName.value;
        const email = e.target.email.value;
        const pass = e.target.pass.value;
        const conframPass = e.target.conPass.value;

        const strongPwd = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()[\]{}\-_+~`|\\:;'",.<>/?])\S{6,}$/


        if (pass !== conframPass) {
            setErrorMsg("Password do not match.")
            return;
        }

        if (!strongPwd.test(conframPass)) {
            setErrorMsg('password must have at least 6 cher. including uppercase, lowercase, number and special chearcter.')
            return;
        }

        signUpEmailPassword(email, pass)
            .then(data => {
                const user = data.user

                updateProfile(user, {
                    displayName: name
                }).then(() => {
                    setUserInfo({
                        displayName: user.displayName,
                        email: user.email,
                        uid: user.uid
                    })
                    Swal.fire({
                        title: " Success",
                        text: " Successfuly Sign Up ",
                        icon: "success"
                    });
                    setTimeout(() => {
                        navigator('/')
                    }, 2000)

                }).catch(error => {
                    console.error('have a some error', error);
                    alert('Failed Update Profile '+ error.message)
                })

            }).catch(error => {
                console.error('have a some error', error);
                alert('Failed Sign Up '+ error.message)
            })


    }




    return (
        <div className='h-screen flex justify-center items-center '>
            <div className='bg-white w-full max-w-md p-8 rounded-md relative'>
                <Link to={'/user'} className=' absolute right-3 top-0 text-3xl'> &times; </Link>
                <h1 className='text-3xl text-center font-bold text-gray-500 mb-8'> Sign Up </h1>
                <form onSubmit={formHandle}>
                    <div className='my-3'>
                        <label htmlFor="fullName" className='block text-gray-600 mb-1 font-medium'> Full Name : </label>
                        <input type="text" name='fullName' id='fullName' placeholder='Name...' required className=' w-full py-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600' />
                    </div>
                    <div className='my-3'>
                        <label htmlFor="email" className='block text-gray-600 mb-1 font-medium'> Email : </label>
                        <input type="email" name="email" id="email" placeholder='Exampale@gmail.com' required className=' w-full py-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600' />
                    </div>
                    <div className=' my-3 relative'>
                        <label htmlFor="pass" className='block text-gray-600 mb-1 font-medium'> Password </label>
                        <div className='flex items-center'>
                            <input type={show ? 'text' : 'password'} name='pass' id='pass' placeholder='********' required className=' w-full py-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600' />
                            {show ? <IoEyeOutline onClick={() => setShow(!show)} className=' absolute right-3' /> :
                                <IoEyeOffOutline onClick={() => setShow(!show)} className=' absolute right-3' />
                            }
                        </div>
                    </div>
                    <div className=' mt-3 mb-1 relative'>
                        <label htmlFor="conPass" className='block text-gray-600 mb-1 font-medium'> Confram Password </label>
                        <div className='flex items-center'>
                            <input type={show1 ? 'text' : 'password'} name='conPass' id='conPass' placeholder='********' required className=' w-full py-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600' />

                            {show1 ? <IoEyeOutline onClick={() => setShow1(!show1)} className=' absolute right-3' /> :
                                <IoEyeOffOutline onClick={() => setShow1(!show1)} className=' absolute right-3' />
                            }
                        </div>

                    </div>
                    <span className='text-orange-600'> {errorMsg} </span>
                    <div className='my-3'>
                        <input type="checkbox" id="check" required className='cursor-pointer' />
                        <label htmlFor="check"> I agree tothe <Link to={'/'} className='text-cyan-600'> Terme & Condition </Link></label>
                    </div>
                    <button className='w-full bg-blue-600 rounded-md font-medium py-1 text-white hover:bg-blue-700 transition duration-200'> Sign Up </button>
                </form>
                <p className='text-center text-gray-500 mt-5 font-serif'>
                    Alredy have an acount? <Link to={'/signin'} className='text-blue-600 font-medium px-2 hover:underline'> Sign In &rarr; </Link>
                </p>
            </div>
        </div>
    )
}

export default SignUp;