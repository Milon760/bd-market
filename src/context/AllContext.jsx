import React from 'react'
import ProductProvider from './ProductContext';
import ThemeProvider from './ThemeContext'
import AuthProvider from './AuthContext';

const AllContext = ({ children }) => {
    return (
        <ProductProvider>
            <AuthProvider>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </AuthProvider>
        </ProductProvider>
    )
}

export default AllContext;