import React from "react";
import { ProductsTable } from "../components/products/ProductsTable";
import "../style/Products.css";

export const AllProducts = (props) => {
  return (
    <div className="products-container">
      <ProductsTable />
    </div>
  );
};
