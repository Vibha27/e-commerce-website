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
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

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

  const onSelectChange = (newSelectedRowKeys) => {
    if (selectedRowKeys.length <= 4) {
        setSelectedRowKeys(newSelectedRowKeys);
    }
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    getCheckboxProps: (record) => ({
      disabled:
        selectedRowKeys.length >= 4 && !selectedRowKeys.includes(record.key), // to disable rows if 4 rows are selected and all rows other than already selected
    }),
    columnTitle: () => null, // to remove select all checkbox
  };

  return (
    <Table
      rowSelection={rowSelection}
      columns={columns}
      dataSource={productList}
      onChange={onChange}
      showSorterTooltip={{
        target: "sorter-icon",
      }}
    />
  );
};
