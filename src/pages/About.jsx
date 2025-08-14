import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'

const About = () => {
  const { mode, setMode } = useContext(ThemeContext)

  return (
    <div>

      <h1 className={`text-2xl md:text-3xl lg:text-4xl text-center font-bold ${mode ? 'text-blue-200' : 'text-gray-700'} mb-6 md:mb-10 lg:mb-16 pt-20 md:pt-24 lg:pt-32`}> About BD MARKET </h1>
      <div className={` ${ mode ? 'bg-slate-600 text-white' : 'bg-white'} text-lg font-medium p-10 mx-10 my-16 shadow shadow-black rounded`}>
        <p className='my-10'> Welcome to **BD MARKET**, your ultimate destination for high-quality products and an unparalleled shopping experience! Established in **2023**,
          we embarked on a journey to create an online marketplace where quality meets convenience. Our mission is to provide a diverse range of products that cater to your everyday needs and desires, all while ensuring exceptional customer service.
        </p>
        <p className='my-10'>
          At BD MARKET, we believe in **curating a collection** that reflects innovation, style, and practicality. From the latest electronics to trendy apparel, home essentials, and captivating books,
          every item is hand-picked to ensure it meets our rigorous standards of quality and value.
        </p>
        <p>
          We are passionate about making your online shopping journey as seamless and enjoyable as possible. Our user-friendly interface, secure payment gateways, and efficient delivery system are designed with you in mind.
          We are constantly striving to improve and expand our offerings, listening to our customers' feedback to serve you better.
        </p>
        <p className='my-10'>
          Thank you for choosing BD MARKET. We look forward to being your trusted shopping partner for years to come!
        </p>
      </div>



      <div className={` ${mode ? 'bg-slate-600' : 'bg-white'} py-8 px-3 md:flex justify-center items-center gap-16 m-10 shadow text-center`}>
        <img
          src='milon.png'
          alt="Md Milon Mia"
          className=" w-60 h-60 md:w-72 md:h-72 mx-auto md:mx-0 object-cover border-2 rounded-full"
        />

        <div>
          <p className={`mt-10 font-medium md:w-md lg:w-2xl ${mode ? 'text-white' : 'text-black'}`}>
            I am <span className="font-semibold text-cyan-400">Md Milon Mia</span>, a confident and enthusiastic web developer.
            I work with <span className="font-semibold text-cyan-400">HTML</span>,
            <span className="font-semibold text-cyan-400"> CSS </span>,
            <span className="font-semibold text-cyan-400"> JavaScript </span>,
            <span className="font-semibold text-cyan-400"> React.js </span>,
            <span className="font-semibold text-cyan-400"> Tailwind CSS </span>, and
            <span className="font-semibold text-cyan-400"> Firebase </span>.
            I love building
            <span className="font-semibold text-cyan-400"> responsive </span>,
            <span className="font-semibold text-cyan-400"> fast-loading </span>, and
            <span className="font-semibold text-cyan-400"> user-friendly websites </span>.
            I’m ready to prove myself in larger and more challenging projects
            with my full dedication and effort.
          </p>
          <button className='mt-8 border rounded-full px-6 py-1 text-lg font-medium bg-blue-600 text-white hover:bg-blue-500'> <Link to={'/contact'}> Contact Me </Link> </button>
        </div>

      </div>

    </div>
  )
}

export default About