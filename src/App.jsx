import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter } from "react-router";
import AppRoutes from "./AppRoutes";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container fluid={true} style={{ marginLeft: "10vw", width: "90vw" }}>
        <AppRoutes />
      </Container>
    </BrowserRouter>
  );
}

export default App;
