import "./App.css";
import { products } from "./data/productData";
import { Container, ListGroup } from "react-bootstrap";
import { Link } from "react-router";

function App() {
  return (
    <>
      <h1>Product List</h1>
      <ListGroup className="productList">
        {products.map((product) => (
          <ListGroup.Item style={{ border: 0 }}>
            <h4>
              <Link to={`/product/${product.name}`} style={{textDecoration: "none"}}>
                {product.name}
              </Link>
            </h4>
            <h5 className="fw-ligh">Price: {product.price}</h5>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}

export default App;
