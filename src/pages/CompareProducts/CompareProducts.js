import React, { useState } from "react";
import { Button } from "antd";
import { FaPlus } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { ComparisionTable } from "./ComparisionTable";

export const CompareProducts = () => {
  const location = useLocation();
  const [productList, setProductList] = useState(
    location.state?.productList || []
  );

  const handleRemoveProduct = (id) => {
    setProductList(productList.filter((product) => product.id !== id));
  };

  return (
    <div>
      <Button
        type="primary"
        icon={<FaPlus />}
        size={"large"}
        disabled={productList.length >= 4}
        style={{ float: "right", marginBottom: "8px" }}
        //   onClick={handleCompareClick}
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
