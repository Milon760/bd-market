import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../context/ProductContext';
import { FaDeleteLeft } from 'react-icons/fa6';
import { FaRemoveFormat } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {

  const { productData, setProductData } = useContext(ProductContext)
  const [msg, setMsg] = useState('')

  const navigate = useNavigate()

  const increase = (name) => {
    const updated = productData.map(item => item.name === name ? { ...item, quantity: item.quantity + 1 } : item)
    setProductData(updated)
  }

  const decrease = (name) => {
    const updated = productData.map(item => item.name === name && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item)
    setProductData(updated)
  }

  const removeBtn = (name) => {
    const updated = productData.filter((item => item.name !== name));
    setProductData(updated)
    setMsg('Remove Successfull.')
  }

  setTimeout(() => {
    setMsg('')
  }, 2000);

  const totlePrice = productData.reduce((sum, item) => (sum + item.price) * item.quantity, 0)

  const moreDetailsBtn = (id) => {
    navigate(`/moredetails/${id}`)
  }



  return (
    <div className=' h-screen flex flex-col justify-center items-center'>
      <div className=' w-[99%] sm:w-[90%] md:w-[80%] lg:w-[60%] bg-white py-2 px-2 rounded shadow shadow-black mt-32'>
        <h1 className=' text-2xl md:text-3xl lg:text-4xl text-center font-bold text-gray-500 mb-6 md:mb-10 lg:mb-16 pt-5'> Shoping Cart </h1>
        <hr />

        <ul className='max-h-[500px] overflow-y-auto'>
          {
            productData.length === 0 ? <p className='text-center text-xl mt-3.5'> Cart is Empty </p> :
              productData.map(product => <div key={product.id} className='bg-white flex  gap-5 mb-4 p-1 shadow rounded relative'>
                <img src={product.image} alt="product photo" className='w-32' />
                <div>
                  <h1 className='text-xl font-medium my-2'> {product.name} </h1>
                  <p className='text-xl text-[#ec9b05] font-bold mt-3'> ${product.price} </p>
                  <div className='flex mt-5'>
                    <button onClick={() => increase(product.name)} className='bg-blue-200 px-1.5 font-bold rounded'> + </button>
                    <p className='text-lg px-1.5 font-medium '> {product.quantity} </p>
                    <button onClick={() => decrease(product.name)} className='bg-blue-200 px-2 font-bold rounded'> - </button>
                  </div>
                </div>
                <button onClick={() => removeBtn(product.name)} className=' text-orange-600 text-2xl border p-0.5  rounded absolute top-2 right-2'> <MdDelete /></button>
                <button onClick={() => moreDetailsBtn(product.id)} className=' border px-2 bg-[#d2e6f3] rounded font-medium absolute bottom-2 right-2'> More </button>

              </div>)
          }
        </ul>

        <div className=''>
          <p className='font-medium text-lg ml-5 mt-1'> Totle : ${totlePrice} </p>
          <button className='border px-5 py-1 text-xl font-medium rounded bg-blue-600 text-white ml-5 mt-2'> Buy Now  </button>
        </div>

      </div>

      {
        msg && <div
          className="fixed top-14 md:top-16 right-1  bg-orange-700 text-white font-medium px-3 py-2 rounded shadow-lg z-50">
          {msg}
        </div>
      }
    </div>
  )
}

export default Cart;