import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useRef } from 'react';
import { connect } from "react-redux";
import Header from "./components/Header";
import Menu from "./components/Menu";
import RandCard from "./components/RandCard";
import RandCard2 from "./components/RandCard2";
import StartPage from "./components/StartPage";
import LoadingPage from './components/LoadingPage';

function App(props) {
  const r1FormRef = useRef();
  const r1CtnRef = useRef();
  const r2FormRef = useRef();
  const r2CtnRef = useRef();

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
                <Col xs={12} md={8} lg={6}>
                  {props.isloading == true && <LoadingPage />}
                  {(props.isloading == false && props.menu) == 1 && <StartPage />}
                  {(props.isloading == false && props.menu) == 2 && <RandCard formRef={r1FormRef} ctnRef={r1CtnRef} />}
                  {(props.isloading == false && props.menu) == 3 && <RandCard2 formRef={r2FormRef} ctnRef={r2CtnRef} />}
                </Col>
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

function mapStateToProps(state) {
  return {
    menu: state.menu,
    isloading: state.isloading,
    minval: state.minval,
    maxval: state.maxval,
    cardtitle: state.cardtitle
  }
}

export default connect(mapStateToProps)(App);
