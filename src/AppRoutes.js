import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProductDetails } from './pages/ProductDetails/ProductDetails';
import { CompareProducts } from './pages/CompareProducts/CompareProducts';

export const AppRoutes = () => {
    return (

        <Routes>
          <Route exact path="/" element={<ProductDetails />} />
          <Route
            path="/product-details"
            element={<ProductDetails />}
          />
          <Route
            path="/compare-products"
            element={<CompareProducts />}
          />
          <Route path="*" element={<h4>404 Not found</h4>} />
        </Routes>
    )
}