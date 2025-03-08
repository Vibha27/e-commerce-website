import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import { FaPlus } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { ComparisionTable } from "./ComparisionTable";
import { ProductsTable } from "../ProductDetails/ProductsTable";
import { columns } from "./columns";

export const CompareProducts = () => {
  const location = useLocation();

  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [productList, setProductList] = useState(
    location.state?.productList || []
  );

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(`https://dummyjson.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(
          data.products.map((product) => ({ ...product, key: product.id }))
        );
      });
  };

  const handleRemoveProduct = (id) => {
    setProductList(productList.filter((product) => product.id !== id));
  };

  const handleOk = () => {
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleAddMore = () => {
    setShowModal(true);
  };

  return (
    <div>
      {showModal && (
        <Modal
          className="compare-modal"
          title="Select Products to compare"
          open={showModal}
          onOk={handleOk}
          onCancel={handleCancel}
          width={{
            xs: "90%",
            sm: "80%",
            md: "70%",
            lg: "60%",
            xl: "50%",
            xxl: "40%",
          }}
        >
          <ProductsTable
            columns={columns}
            data={products}
          />
        </Modal>
      )}
      <Button
        type="primary"
        icon={<FaPlus />}
        size={"large"}
        disabled={productList.length >= 4}
        style={{ float: "right", marginBottom: "8px" }}
        onClick={handleAddMore}
      >
        Add More
      </Button>

      <ComparisionTable
        products={productList}
        removeProduct={handleRemoveProduct}
      />
    </div>
  );
};
