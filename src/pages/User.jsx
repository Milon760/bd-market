import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'
import { AuthContext } from '../context/AuthContext'

const User = () => {

  const { mode, setMode } = useContext(ThemeContext)
  const { userInfo, setUserInfo, SignOut, successMsg, setSuccessMsg } = useContext(AuthContext)


  const signOutUser = () => {
    SignOut()
      .then(res => {
        setSuccessMsg(" Sign Out SuccessFull ")
        setUserInfo('')
        setTimeout(() => {
          setSuccessMsg('')
        }, 2000)
      }).catch(error => {
        console.error('have a error', error);
        alert(error)

      })
  }


  return (
    <div className=' h-[87vh] pt-32'>
      <h1 className={`text-2xl md:text-3xl lg:text-4xl text-center font-bold ${mode ? 'text-white' : 'text-gray-500'} mb-6 md:mb-10 lg:mb-16'`}> Hello, Welcome To BD MARKET </h1>

      {
        userInfo ?
          <div className={`${mode ? 'bg-slate-500 text-white' : 'bg-white'} py-5 shadow mx-5 font-medium`}>

            <div className='text-lg p-4 overflow-auto'>
              <h1 className=''> User ID : <span className={`${mode ? 'text-amber-400' : 'text-blue-500'}`}> {userInfo.uid} </span>  </h1>
              <h1> Full Name : <span className={`${mode ? 'text-amber-400' : 'text-blue-500'}`}> {userInfo.displayName} </span></h1>
              <h1> Email : <span className={`${mode ? 'text-amber-400' : 'text-blue-500'}`}>  {userInfo.email} </span></h1>
              <button onClick={signOutUser} className='border px-4 bg-blue-400 rounded-full text-white font-medium mt-8 hover:bg-blue-500'> Sign Out </button>
            </div>
          </div>
          :
          <div className=' flex justify-center items-center gap-3'>
            <button className='border px-5 py-1 my-2 bg-cyan-600 rounded-full text-white font-medium hover:bg-cyan-500 '> <Link to={'/signin'}> Sign In </Link> </button> <br />
            <button className='border px-5 py-1 my-2 bg-cyan-600 rounded-full text-white font-medium hover:bg-cyan-500 '> <Link to={'/signup'}> Sign Up </Link> </button> <br />
          </div>
      }

      {
        successMsg && <div
          className="fixed top-14 md:top-16 right-1  bg-green-500 text-white font-medium px-3 py-2 rounded shadow-lg z-50">
          ✅ {successMsg}
        </div>
      }

    </div>
  )
}

export default User