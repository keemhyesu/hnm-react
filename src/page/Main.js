import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductImage from "../component/ProductImage";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSearchParams } from "react-router-dom";

const Main = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProductList = async () => {
    let searchQuery = query.get("q") || "";
    let url = `https://my-json-server.typicode.com/keemhyesu/zara-react/products/?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProductList(data);
  };

  useEffect(() => {
    getProductList();
  }, [query]);

  return (
    <Container style={{ marginBottom: "200px" }}>
      <Row>
        {productList.map((item, i) => (
          <Col lg={3} width={100} key={i}>
            <ProductImage item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Main;
