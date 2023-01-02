import React, { useEffect, useState } from "react";
import { GetProducts,RemoveProductFromDB } from "../../services/ServerConect";
import { ProductData } from "./ProductData";

import "../../style/Products.css"

export const ProductsTable = (props) => {
  const [products, setProducts] = useState([]);
  const [productData, setProductData] = useState([]);
  const [key, setKey] = useState(0);
  const ProductsData = async () => {
    setProducts(await GetProducts());
  };
  const RemoveProduct = async (id) => {
    // let temp = products.filter((p) => p.ID !== id);
    // setProducts(temp);
    await RemoveProductFromDB(id);
  };
  const GetProduct = (id) => {
    if (key === id) {
      setKey(0);
      setProductData([]);
    } else {
      let temp = products.filter((p) => p.ID === id);
      setProductData(temp);
      setKey(id);
    }
  };
  useEffect(() => {
    ProductsData();
  }, [()=>RemoveProduct()]);
  return (
    <div className="p-container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
            <th scope="col">Get Product Data</th>
          </tr>
        </thead>
        <tbody>
          {products.length >= 0 &&
            products.map((p) => {
              return (
                <tr>
                  <th scope="row">{p.Name}</th>
                  <td>{p.UnitPrice}$</td>
                  <td>{p.UnitsInStock}</td>
                  <td className="btn-space">
                    <button
                      onClick={() => GetProduct(p.ID)}
                      className="btn btn-success"
                    >
                      Product Data
                    </button>
                    <button
                      onClick={() => RemoveProduct(p.ID)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div>
       {key >0 && productData.map((p)=>{
        return <ProductData productData={productData}/>
       })} 
      </div>
    </div>
  );
};
