import React, { useEffect, useState } from "react";
import { ProductsTable } from "./ProductsTable";
import { useNavigate } from "react-router-dom";

const columns = [
  {
    title: "Title",
    dataIndex: "title",
    showSorterTooltip: {
      target: "full-header",
    },
  },
  {
    title: "Image",
    dataIndex: "thumbnail",
    render: (src) => <img src={src} alt="Product" width="75px" />,
  },
  {
    title: "Description",
    dataIndex: "description",
  },
  {
    title: "Price",
    dataIndex: "price",
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: "Discount percentage",
    dataIndex: "discountPercentage",
    sorter: (a, b) => a.discountPercentage - b.discountPercentage,
  },
  {
    title: "Brand",
    dataIndex: "brand",
  },
  {
    title: "Category",
    dataIndex: "category",
  },
];

export const ProductDetails = () => {
  let navigate = useNavigate();

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(`https://dummyjson.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setProductList(
          data.products.map((product) => ({ ...product, key: product.id }))
        );
      });
  };

  const handleCompareClick = (selectedProducts) => {
    let products = productList.filter((product) =>
      selectedProducts.includes(product.key)
    );
    navigate("/compare-products", {
      state: {
        productList: products,
      },
    });
  };
  return (
    <ProductsTable
      data={productList}
      columns={columns}
      onCompare={handleCompareClick}
    />
  );
};
