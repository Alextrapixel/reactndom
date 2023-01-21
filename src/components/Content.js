import { useState } from "react";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Form, Row, Col } from "react-bootstrap";

function setMinRandom(num) {
    return {type: 'SET_MIN', num: num};
}
function setMaxRandom(num) {
    return {type: 'SET_MAX', num: num};
}
function setCardTitle(title) {
    return {type: 'SET_TITLE', title: title};
}

const Content = (props) => {
    const [ranval, setRandval] = useState(0);

    let randomFunc = () => {
        let randNum = parseInt(props.minval) + Math.floor(Math.random() * (parseInt(props.maxval) - parseInt(props.minval))) + 1;
        setRandval(randNum);
    };
    let showRandomLegacy = () => {
        props.formRef.current.classList.add('d-none');
        props.ctnRef.current.classList.remove('d-none');
    };

    return (
        <div>
            <Card ref={props.formRef} className="rounded-4">
                <Card.Header className="fw-bold">Input Number Range</Card.Header>
                <Card.Body>
                    <Form.Group className="mb-3" controlId="formMin">
                        <Form.Control type="text" placeholder="Card title" value={props.cardtitle} onChange={e => { props.setCardTitle(e.target.value) }} />
                    </Form.Group>
                    <Row>
                        <Col xs={6}>
                            <Form.Group className="mb-3" controlId="formMin">
                                <Form.Control type="text" placeholder="min" value={props.minval} onChange={e => { props.setMinRandom(e.target.value.replace(/\D/g, '')) }} />
                            </Form.Group>
                        </Col>
                        <Col xs={6}>
                            <Form.Group className="mb-3" controlId="formMax">
                                <Form.Control type="text" placeholder="max" value={props.maxval} onChange={e => { props.setMaxRandom(e.target.value.replace(/\D/g, '')) }} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="primary" className="w-100 rounded-pill px-3" size="sm" onClick={showRandomLegacy}>next</Button>
                </Card.Body>
            </Card>
            <Card ref={props.ctnRef} className="d-none rounded-4">
                <Card.Header className="fw-bold">{props.cardtitle}</Card.Header>
                <Card.Body>
                    <Card.Title className="my-3 fw-bold"><h1>{ranval}</h1></Card.Title>
                    <Button variant="primary" size="sm" className="rounded-pill px-3" onClick={randomFunc}>randomize</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        minval: state.minval,
        maxval: state.maxval,
        cardtitle: state.cardtitle
    }
}
const mapDispatchToProps = { setMinRandom, setMaxRandom, setCardTitle }

export default connect(mapStateToProps, mapDispatchToProps)(Content);