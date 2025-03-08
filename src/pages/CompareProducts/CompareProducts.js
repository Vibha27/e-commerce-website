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
  const [productKeys, setProductKeys] = useState(
    location.state?.productList || []
  );
  const [productList, setProductList] = useState([]);

  const [modalSelectedProduct, setModalSelectedProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    updateProductList();
  }, [productKeys, products]);

  const fetchData = () => {
    fetch(`https://dummyjson.com/products`)
      .then((res) => res.json())
      .then((data) => {
        let list = data.products.map((product) => ({
          ...product,
          key: product.id,
        }));

        setProducts(list);
      });
  };

  const updateProductList = () => {
    // for fetching product details of selected keys
    setProductList(
      products.filter((product) => productKeys.includes(product.key))
    );
  };

  const handleRemoveProduct = (id) => {
    // removing key from selected products
    setProductKeys(productKeys.filter((key) => id !== key));
  };

  const handleProductSelect = (selected = null) => {
    // for saving user selected product from modal
    if (selected !== null) {
      setModalSelectedProducts(selected);
    }
  };

  const handleOk = () => {
    setProductKeys([...modalSelectedProduct]); // adding modal's products keys only after submitting
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
            onProductSelect={handleProductSelect}
            selectedProducts={productKeys}
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
