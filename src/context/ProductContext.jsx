import React, { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext()

const ProductProvider = ({ children }) =>{

  const [products, setProducts] = useState([])
  
  const [successMsg, setSuccessMsg] = useState('')

  const [productData, setProductData] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });


  useEffect(() => {
    fetch('/products.json')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => console.error("Failed to load products:", error));
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(productData));
  }, [productData]);


  const addCart = ({ id, name, price, description, image, category }) => {
    setProductData(prev => {
      const found = prev.find(item => item.name === name);
      if (found) {
        setSuccessMsg('Quantity updated!')
        return prev.map(item => item.name === name ? { ...item, quantity: item.quantity + 1 } : item)
      }
      else {
        setSuccessMsg('Product added to cart!')
        return [...prev, { id, name, price, description, image, category, quantity: 1 }]
      }
    })
  }


  setTimeout(() => {
    setSuccessMsg('');
  }, 2000);


const productInfo = {
  products,
  setProducts,
  addCart,
  productData,
  setProductData,
  successMsg
}


return (
  <ProductContext.Provider value={productInfo}>
    {children}
  </ProductContext.Provider>
)
}

export default ProductProvider;