import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Orders } from "./components/my-orders/Orders";
import { Card } from "./components/my-card/Card";
import styled from "styled-components";
import { PhoneDetails } from "./components/products/Information";
import Products from "./components/products/Products";
function App() {
  return (
    <div className="App">
      <Container>
        <Link to="/">
          <h2 style={{ marginLeft: "50px", color: "white" }}>iStore</h2>
        </Link>
        <Contproduct>
          <Link to="/products">
            <h3>Products</h3>
          </Link>
          <Link to="/card">
            <h3>My Cart</h3>
          </Link>
          <Link to="/orders">
            <h3>My Orders</h3>
          </Link>
        </Contproduct>
      </Container>
      <Routes>
        <Route path="/" />
        <Route path="/orders" element={<Orders />} />
        <Route path="/card" element={<Card />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<PhoneDetails />} />
      </Routes>
    </div>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  align-items: center;
  background-color: blue;
  color: "white";
`;

const Contproduct = styled.div`
  display: flex;
  justify-content: space-around;
  width: 600px;

  h3 {
    color: white;
  }
`;
