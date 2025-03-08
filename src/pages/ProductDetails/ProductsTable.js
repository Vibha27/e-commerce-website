import React, { useEffect, useState } from "react";
import { Table } from "antd";
const columns = [
  {
    title: "Title",
    dataIndex: "title",
    showSorterTooltip: {
      target: "full-header",
    },
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

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

export const ProductsTable = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(`https://dummyjson.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setProductList(data.products);
      });
  };

  return (
    <Table
      columns={columns}
      dataSource={productList}
      onChange={onChange}
      showSorterTooltip={{
        target: "sorter-icon",
      }}
    />
  );
};
