import React from 'react';
import { Route, Routes } from 'react-router-dom';

export const AppRoutes = () => {
    return (

        <Routes>
          <Route exact path="/" element={<h4>Product Details Page</h4>} />
          <Route
            path="/product-details"
            element={<h4>Product Details Page</h4>}
          />
          <Route
            path="/compare-products"
            element={<h4>Compare Product Page</h4>}
          />
          <Route path="*" element={<h4>404 Not found</h4>} />
        </Routes>
    )
}