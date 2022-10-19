import React, { useEffect, useState } from "react";
import "../page/ProductDetail.scss";
import { useParams } from "react-router-dom";
import { Container, Row, Col, DropdownButton, Dropdown } from "react-bootstrap";
const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `http://localhost:5000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container style={{ height: "700px" }}>
      <Row>
        <Col className="productDetailImg">
          <img src={product?.img} alt="" />
        </Col>
        <Col className="detailInfo">
          <h2>{product?.title}</h2>
          <h4>{product?.price}원</h4>
          <div>
            <b>{product?.choice == true ? "MD CHOICE" : ""}</b>
          </div>
          <div>{product?.new == true ? "NEW" : ""}</div>
          <DropdownButton id="dropdown-basic-button" title="사이즈 선택">
            <Dropdown.Item href="#/action-1">S</Dropdown.Item>
            <Dropdown.Item href="#/action-2">M</Dropdown.Item>
            <Dropdown.Item href="#/action-3">L</Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
