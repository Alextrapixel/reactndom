import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useRef, useState } from 'react';
import Header from "./components/Header";
import Content from "./components/Content";
import Menu from "./components/Menu";

function App() {
  const r1FormRef = useRef();
  const r1CtnRef = useRef();

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
            <Col xs={{ span: 12, order: "last" }} md={{ span: 8, order: "first" }}>
              <Row>
                <Col xs={0} md={2} lg={3}></Col>
                <Col xs={12} md={8} lg={6}><Content formRef={r1FormRef} ctnRef={r1CtnRef} /></Col>
                <Col xs={0} md={2} lg={3}></Col>
              </Row>
            </Col>
            <Col xs={{ span: 12, order: "first" }} md={{ span: 4, order: "last" }} className="mb-3 mb-md-0">
              <Menu r1FormRef={r1FormRef} r1CtnRef={r1CtnRef} />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
