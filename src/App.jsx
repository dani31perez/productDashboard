import "./App.css";
import { products } from "./data/productData";
import { Container, ListGroup } from "react-bootstrap";

function App() {
  return (
    <Container fluid={true} style={{ width: "70vw"}}>
      <h1>Product List</h1>
      <ListGroup className="productList">
        {products.map((product) => (
          <ListGroup.Item style={{ border: 0}}>
            <h4>{product.name}</h4>
            <h4>{product.price}</h4>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default App;
