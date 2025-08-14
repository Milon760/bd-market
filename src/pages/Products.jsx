import React, { useContext, useState } from 'react'
import { ProductContext } from '../context/ProductContext'
import { ThemeContext } from '../context/ThemeContext'
import { useNavigate } from 'react-router-dom'

const Products = () => {

  const { products, addCart, successMsg } = useContext(ProductContext)
  const { mode, setMode } = useContext(ThemeContext)

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');

  const navigate = useNavigate()



  const moreInfoDiv = (id) => {
    navigate(`/moredetails/${id}`)
  }



  const filteredProducts = selectedCategory === 'All' ? products : products.filter(product => product.category === selectedCategory);

  const sortedProducts = [...filteredProducts];

  if (sortBy === 'lowToHigh') {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'highToLow') {
    sortedProducts.sort((a, b) => b.price - a.price);
  }


  return (
    <div>
      {
        successMsg && <div
          className="fixed top-14 md:top-16 right-1  bg-green-500 text-white font-medium px-3 py-2 rounded shadow-lg z-50">
          ✅ {successMsg}
        </div>
      }

      <h1 className={`text-2xl md:text-3xl lg:text-4xl text-center font-bold ${ mode ? 'text-blue-200' : 'text-gray-700'} mb-6 md:mb-10 lg:mb-16 pt-20 md:pt-24 lg:pt-32`} > All Products </h1>

      <div  className={`flex justify-between items-center ${ mode ? 'bg-[#405364] text-white' :'bg-white'}  px-2 md:px-5 py-5 md:py-10 my-10 md:mx-5 shadow rounded`}>
        <div className='flex items-center gap-3'>
          <label htmlFor="" className=' font-medium'> Category : </label>
          <select onChange={(e) => setSelectedCategory(e.target.value)} className={`border border-gray-300  ${ mode ? 'text-white bg-[#405364]' : 'bg-[#f8f8f8]'} py-1 lg:py-2 px-1 md:px-2 rounded-md outline-none  focus:ring focus:ring-blue-600`}>
            <option value="All">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Wearable">Wearable</option>
            <option value="Audio">Audio</option>
            <option value="Accessories">Accessories</option>
            <option value="Office">Office</option>
            <option value="Home">Home</option>
          </select>
        </div>
        <div className='flex items-center gap-3'>
          <label htmlFor="" className=' font-medium'> Sort By : </label>
          <select onChange={(e) => setSortBy(e.target.value)} className={`border border-gray-300  ${ mode ? 'text-white bg-[#405364]' : 'bg-[#f8f8f8]'} py-1 lg:py-2 px-1 md:px-2 rounded-md outline-none  focus:ring focus:ring-blue-600`}>
            <option value="default"> Default </option>
            <option value="lowToHigh"> Low to High </option>
            <option value="highToLow"> High to Low </option>
          </select>
        </div>
      </div>


      <div className='md:grid grid-cols-2 lg:grid-cols-3'>
        {
          sortedProducts.map(product => <div key={product.id}
            onClick={() => moreInfoDiv(product.id)}
            className=' bg-white m-5 p-5 text-center rounded shadow-lg shadow-black transition-transform duration-300 ease-in-out  hover:-translate-y-1.5 relative'>
            <h2 className=' absolute left-2 top-1 font-medium'> {product.category} </h2>
            <img src={product.image} alt="product Photo" className='w-48 mx-auto mt-3' />
            <h1 className='text-2xl font-medium my-4'> {product.name} </h1>
            <h1> {product.description} </h1>
            <h1 className='text-2xl text-[#ec9b05] font-bold mt-4'> ${product.price} </h1>
            <button onClick={(e) => { e.stopPropagation(); addCart(product) }} className='border bg-blue-700 rounded-full px-5 lg:px-8 py-1 text-lg md:text-xl my-5 text-white font-medium'> Add To Cart </button>
          </div>)
        }
      </div>
    </div>
  )
}

export default Products