

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../UI/Button";

const Products = () => {
  return (
    <div>
      <Container>
        <div className="box">
          <img
            src="https://m.media-amazon.com/images/I/61U6oC65TTL._AC_UF894,1000_QL80_.jpg"
            alt="SAMSUNG Galaxy S22"
          />
          <h2>SAMSUNG Galaxy S22 </h2>
          <h2>$800</h2>

          <Link to="1">
            <StyledButton>Details</StyledButton>
          </Link>
        </div>
        <div className="box-2">
          <img
            src="https://www.tehnooop.fun/wp-content/uploads/2023/02/jSXl7nJqamcmWJjD6cNlYu6tr5SRtpxW6UNsSk6O.jpeg"
            alt="Samsung Galaxy S23 "
          />
          <h2>Samsung Galaxy S23</h2>
          <h2>$600</h2>
          <Link to="2">
            <StyledButton>Details</StyledButton>
          </Link>
        </div>
        <div className="box-3">
          <img
            src="https://img.global.news.samsung.com/global/wp-content/uploads/2022/03/Galaxy-A-Unpacked_press-release_main3.jpg"
            alt="Galaxy A53 5G"
          />
          <h2>Galaxy A53 5G</h2>
          <h2>$400</h2>
          <Link to={"3"}>
            <StyledButton>Details</StyledButton>
          </Link>
        </div>
        <Button className="button">Go Back -</Button>
      </Container>
    </div>
  );
};

const StyledButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 20px;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #3e5268;
  }
`;

const Container = styled.div`
  background-size: cover;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  height: 120vh;
  .button {
    position: absolute;
    top: 50rem;
    left: 70px;
  }
  img {
    width: 100%;
    height: 400px;
    border-radius: 5%;
  }

  .box,
  .box-2,
  .box-3 {
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
    margin-top: 50px;
    width: 420px;
    height: 580px;
    border-radius: 5%;
    background-color: #87b4db;
    h2 {
      padding-left: 10px;
    }
  }
`;

export default Products;
