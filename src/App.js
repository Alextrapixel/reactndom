import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Container>
          <Row>
            <Col>
              <Header />
            </Col>
          </Row>
          <Row>
            <Col>
              <Content />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
