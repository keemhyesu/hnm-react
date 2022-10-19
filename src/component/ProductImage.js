import React from "react";
import "../component/ProductImage.scss";

const ProductImage = ({ item }) => {
  return (
    <div className="card">
      <img src={item.img} alt="" />
      <div>{item.title}</div>
      <div>{item.price.toLocaleString()}원</div>
      <div>{item.choice == true ? "MD CHOICE" : ""}</div>
      <div>{item.new == true ? "NEW" : ""}</div>
    </div>
  );
};

export default ProductImage;
