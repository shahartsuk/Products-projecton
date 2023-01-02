import React from "react";

export const ProductData = ({ productData }) => {
  console.log(productData);
  return (
    <div>
      {productData.map((PD) => {
          return (
            <div className="card">
              <div className="card-header">Product Name:{PD.Name}</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Product ID:{PD.ID}</li>
                <li className="list-group-item">Unit Price:{PD.UnitPrice}$</li>
                <li className="list-group-item">
                  Quantity PerUnit:{PD.QuantityPerUnit}
                </li>
                <li className="list-group-item">
                  Units On Order:{PD.UnitsOnOrder}
                </li>
                <li className="list-group-item">
                  Reorder Level:{PD.ReorderLevel}
                </li>
              </ul>
            </div>
          );
        })}
    </div>
  );
};
