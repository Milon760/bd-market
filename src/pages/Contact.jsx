import React, { useContext, useState } from 'react'
import { FaPhone } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { BiSolidMessageSquareError } from "react-icons/bi";
import { ThemeContext } from '../context/ThemeContext'
import { push, ref } from 'firebase/database';
import { database } from '../Firebase/Firebase';

const Contact = () => {

  const { mode, setMode } = useContext(ThemeContext)
  const [successMsg, setSuccessMsg] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setUserData(prev => ({
      ...prev, [e.target.name]: e.target.value,
    }))
  }

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const messageRef = ref(database, 'userContact');
      await push(messageRef, userData)
      setSuccessMsg(" Message Send Successfuly! ")
      setUserData({ name: '', email: '', subject: "", message: '' })
      setTimeout(() => {
        setSuccessMsg('')
      }, 2500)
    } catch (error) {
      console.error('have a error Message', error);
      setErrorMsg('Failed to send message')
      setTimeout(() => {
        setErrorMsg('')
      }, 2500)
    }

  }



  return (
    <div>
      <h1 className={` text-2xl md:text-3xl lg:text-4xl text-center font-bold ${mode ? 'text-blue-200' : 'text-gray-700'} mb-6 md:mb-10 lg:mb-16 pt-20 md:pt-24 lg:pt-32`}> Contact Us </h1>

      <div className={` ${mode ? 'bg-slate-600 text-white' : 'bg-white'} p-5 md:p-8 mx-5 mb-10 shadow shadow-black rounded`}>
        <p className='text-center md:w-2xl lg:w-3xl mx-auto font-medium'> We'd love to hear from you! Whether you have a question about our products,
          need assistance with an order, or just want to provide feedback, our team is ready to help.</p>

        <div className='md:flex justify-around  my-16 text-center'>
          <div className='mt-5'>
            <h1 className='text-2xl font-medium mb-5 flex items-center justify-center gap-4'> <MdEmail className=' transition-all duration-200 hover:animate-bounce hover:mt-2 hover:text-amber-300'/> Email Us </h1>
            <span className={`${mode ? 'text-amber-300' : 'text-blue-600'}`}> mdmilonmiah2005@gmail.com </span>
            <p className='text-center'> We typically respond within 24 hours. </p>
          </div>
          <div className='mt-5'>
            <h1 className='text-2xl font-medium mb-5 flex items-center justify-center gap-4'> <FaPhone className=' transition-all duration-200 hover:rotate-90 hover:mt-2 hover:text-amber-300'/> Call Us </h1>
            <span className='text-center'> +880 1782-671468 (Mon-Fri, 9 AM - 5 PM BDT) </span>
          </div>
          <div className='mt-5'>
            <h1 className='text-2xl font-medium mb-5 flex items-center justify-center gap-4'><IoLocationSharp className='transition-all duration-200 hover:animate-ping hover:text-amber-300'/> Visit Us </h1>
            <span className='text-center'>  Laxmipu, Sadullapur, Gaibandha, <br /> Bangladesh </span>
          </div>
        </div>

        <div className={` ${mode ? 'bg-slate-700' : 'bg-[#f8f8f8]'} w-[100%] sm:w-[80%] md:w-[70%] lg:w-[65%] py-10 px-4 md:px-8 my-6 mx-auto rounded`}>
          <h1 className='text-2xl text-center font-medium'> Send Us a Message </h1>
          <form onSubmit={submitForm}>
            <div className='my-3'>
              <label htmlFor="" className=' block font-medium'> Name : </label>
              <input type="text" name='name' value={userData.name} onChange={handleChange} placeholder='Full Name' required className=' bg-white text-black border w-full  py-1 px-3 mt-1 rounded text-lg' />
            </div>
            <div className='my-3'>
              <label htmlFor="" className=' block font-medium'> Email : </label>
              <input type="email" name='email' value={userData.email} onChange={handleChange} placeholder='E-mail' required className=' bg-white text-black border w-full  py-1 px-3 mt-1 rounded text-lg' />
            </div>
            <div className='my-3'>
              <label htmlFor="" className=' block font-medium'> Subject : </label>
              <input type="text" name='subject' value={userData.subject} onChange={handleChange} placeholder='Subject here...' required className=' bg-white text-black border w-full  py-1 px-3 mt-1 rounded text-lg' />
            </div>
            <div className='my-3'>
              <label htmlFor="" className=' block font-medium'> Message : </label>
              <textarea name="message" value={userData.message} onChange={handleChange} id="" placeholder='message here...' required className=' bg-white text-black border w-full  py-1 px-3 mt-1 rounded text-lg'></textarea>
            </div>
            <button type='submit' className='w-full bg-blue-600 py-1.5 mt-8 rounded text-xl text-white cursor-pointer hover:bg-blue-500 hover:text-amber-300'> Send Message </button>
          </form>
        </div>

      </div>

      <div className={`flex justify-center items-center gap-6 text-2xl h-24 mx-5 rounded ${mode ? 'bg-slate-600 text-white' : 'bg-white'} shadow`}>
        <a href="https://github.com/Milon760" target="_blank" rel="noopener noreferrer">
          <FaGithub className='text-3xl transition-all duration-200 hover:text-amber-300 hover:text-4xl' />
        </a>
        <a href="https://www.linkedin.com/in/md-milon-mia" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className='text-3xl transition-all duration-200 hover:text-amber-300 hover:text-4xl' />
        </a>
        <a href="https://www.facebook.com/mdmilonmia.milon.10048" target="_blank" rel="noopener noreferrer">
          <FaFacebook className='text-3xl transition-all duration-200 hover:text-amber-300 hover:text-4xl' />
        </a>
        <a href="https://www.instagram.com/mdmilonmiah2005" target="_blank" rel="noopener noreferrer">
          <FaInstagram className='text-3xl transition-all duration-200 hover:text-amber-300 hover:text-4xl' />
        </a>
      </div>

      {
        successMsg && <div
          className="fixed top-14 md:top-16 right-1  bg-green-500 text-white font-medium px-3 py-2 rounded shadow-lg z-50">
          ✅ {successMsg}
        </div>
      }
      {
        errorMsg && <div
          className="fixed top-14 md:top-16 right-1  bg-orange-600 text-white font-medium px-3 py-2 rounded shadow-lg z-50">
          <BiSolidMessageSquareError/> {successMsg}
        </div>
      }

    </div>
  )
}

export default Contact