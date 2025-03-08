import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";
import { MdCompare } from "react-icons/md";

const onChange = (pagination, filters, sorter, extra) => {
//   console.log("params", pagination, filters, sorter, extra);
return
};

export const ProductsTable = ({ data = [], columns = [], onCompare=null }) => {
  const [productList, setProductList] = useState(data);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  useEffect(() => {
    setProductList(data);
  }, [data]);

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
    <>
      {onCompare && (selectedRowKeys.length > 1 && selectedRowKeys.length <= 4) && (
        <Button
          type="primary"
          icon={<MdCompare />}
          size={"large"}
          style={{ float: "right", marginBottom: "8px" }}
          onClick={() => onCompare(selectedRowKeys)}
        >
          Compare
        </Button>
      )}
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={productList}
        onChange={onChange}
        showSorterTooltip={{
          target: "sorter-icon",
        }}
      />
    </>
  );
};
