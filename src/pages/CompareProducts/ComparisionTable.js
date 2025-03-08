import { Button } from "antd";
import React from "react";
import styled from "styled-components";

const TableContainer = styled.div`
  overflow-x: auto;
  width: 100%;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
`;

const Th = styled.th`
  background-color: #f8f8f8;
  padding: 10px;
  font-weight: bold;
`;

const Td = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const Image = styled.img`
  width: 80px;
  height: auto;
`;

export const ComparisionTable = ({ products = [], removeProduct }) => {
  if (products.length === 0) return <p>No products selected for comparison.</p>;

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th>Product Name</Th>
            {products.map((product) => (
              <Th key={product.id}>{product.title}</Th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>
              <strong>Image</strong>
            </Td>
            {products.map((product) => (
              <Td key={product.id}>
                <Image src={product.thumbnail} alt={product.title} />
              </Td>
            ))}
          </tr>
          <tr>
            <Td>
              <strong>Feature</strong>
            </Td>
            {products.map((product) => (
              <Td key={product.id}>{product.description}</Td>
            ))}
          </tr>
          <tr>
            <Td>
              <strong>Brand</strong>
            </Td>
            {products.map((product) => (
              <Td key={product.id}>{product.brand}</Td>
            ))}
          </tr>
          <tr>
            <Td>
              <strong>Category</strong>
            </Td>
            {products.map((product) => (
              <Td key={product.id}>{product.category}</Td>
            ))}
          </tr>
          <tr>
            <Td>
              <strong>Price</strong>
            </Td>
            {products.map((product) => (
              <Td key={product.id}>{product.price}</Td>
            ))}
          </tr>
          <tr>
            <Td>
              <strong>Discount Percentage</strong>
            </Td>
            {products.map((product) => (
              <Td key={product.id}>{product.discountPercentage}</Td>
            ))}
          </tr>

          <tr>
            <Td>
              <strong>Remove</strong>
            </Td>
            {products.map((product) => (
              <Td key={product.id}>
                <Button
                  type="primary"
                  danger
                  size={"large"}
                  disabled={products.length <= 2}
                  onClick={() => removeProduct(product.id)}
                >
                  Remove
                </Button>
              </Td>
            ))}
          </tr>
        </tbody>
      </Table>
    </TableContainer>
  );
};
