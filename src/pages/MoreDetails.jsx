import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import { ThemeContext } from '../context/ThemeContext'

const MoreDetails = () => {
  const { id } = useParams();
  const { products, addCart, successMsg } = useContext(ProductContext);
  const { mode, setMode } = useContext(ThemeContext)


  const product = products.find(p => p.id === parseInt(id));


  if (!product) {
    return <div className='text-center mt-10 text-red-600'>Product not found!</div>;
  }

  return (
    <div>
      {
        successMsg && <div
          className="fixed top-14 md:top-16 right-1  bg-green-500 text-white font-medium px-3 py-2 rounded shadow-lg z-50">
          ✅ {successMsg}
        </div>
      }

      <h1 className={`text-2xl md:text-3xl lg:text-4xl text-center font-bold ${mode ? 'text-blue-200' : 'text-gray-700'} mb-6 md:mb-10 lg:mb-16 pt-20 md:pt-24 lg:pt-32`}> Product Details </h1>



      <div className={`${ mode ? 'bg-slate-600 text-white' : 'bg-white'} p-5 md:flex gap-52 mx-5 shadow mb-10`}>

        <div className='flex items-start gap-5 mb-16 my-10'>
          <img src={`/${product.image}`} alt="" className='w-44 bg-white border p-2 rounded mx-auto ' />
          <img src={`/${product.moreImage}`} alt="" className=' w-44 border bg-white p-2 rounded mx-auto ' />
        </div>

        <div>
          <h1 className='text-3xl font-medium my-8'> {product.name} </h1>
          <p className='font-medium'> Brand : {product.brand} </p>
          <h1 className='text-3xl text-[#ec9b05] font-bold mt-4'> ${product.price} </h1>
          <h1 className='text-green-500 font-medium my-5'> In Stock ( {product.stock} available ) </h1>
          <h1> {product.LongDescription} </h1>
          <button onClick={() => addCart(product)} className=' border bg-blue-700 rounded-full px-5 lg:px-8 py-1 text-lg md:text-xl mt-8 mb-14 text-white font-medium cursor-pointer'> Add To Cart </button>
          <hr />

          <h1 className='text-2xl mt-14 mb-10'> Customer Reviews ({product.rating}) </h1>

          <div className='bg-[#e4f0fc] text-black p-5 my-5 border-l-[6px] border-blue-700 rounded-md'>
            <h1 className='text-xl font-medium mb-4'> John Doe - <span className='text-[#f39010fd]'>★★★★★</span></h1>
            <p> Absolutely love this bag! The quality of the leather is fantastic and it's very spacious. </p>
          </div>

          <div className='bg-[#e4f0fc] text-black p-5 my-5 border-l-[6px] border-blue-700 rounded-md'>
            <h1 className='text-xl font-medium mb-4'> Jane Smith - <span className='text-[#f39010fd]'>★★★★☆ </span> </h1>
            <p> A beautiful bag, exactly as described. Lost one star because shipping took a bit longer. </p>
          </div>

        </div>

      </div>



    </div>
  );
};

export default MoreDetails;
