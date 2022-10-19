import React from "react";
import { useNavigate } from "react-router-dom";
import "../component/ProductImage.scss";

const ProductImage = ({ item }) => {
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div className="card" onClick={goToDetail}>
      <img src={item.img} alt="" />
      <div>{item.title}</div>
      <div>{item.price.toLocaleString()}원</div>
      <div>{item.choice == true ? "MD CHOICE" : ""}</div>
      <div>{item.new == true ? "NEW" : ""}</div>
    </div>
  );
};

export default ProductImage;
