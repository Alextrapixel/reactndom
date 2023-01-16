import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Form, Row, Col } from "react-bootstrap";

const Content = ({ formRef, ctnRef }) => {
    const [minval, setMinval] = useState('');
    const [maxval, setMaxval] = useState('');

    let randomFunc = () => {
        let randNum = Math.floor(Math.random() * 100) + 1;
        return randNum;
    };
    let showRandomLegacy = () => {
        formRef.current.classList.add('d-none');
        ctnRef.current.classList.remove('d-none');
    };

    return (
        <div>
            <Card ref={formRef} className="d-none rounded-4">
                <Card.Header className="fw-bold">Input Number Range</Card.Header>
                <Card.Body>
                    <Row>
                        <Col xs={6}>
                            <Form.Group className="mb-3" controlId="formMin">
                                <Form.Control type="text" placeholder="min" value={minval} onChange={e => { setMinval(e.target.value.replace(/\D/g, '')) }} />
                            </Form.Group>
                        </Col>
                        <Col xs={6}>
                            <Form.Group className="mb-3" controlId="formMax">
                                <Form.Control type="text" placeholder="max" value={maxval} onChange={e => { setMaxval(e.target.value.replace(/\D/g, '')) }} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="primary" className="w-100 rounded-pill px-3" size="sm" onClick={showRandomLegacy}>next</Button>
                </Card.Body>
            </Card>
            <Card ref={ctnRef} className="d-none rounded-4">
                <Card.Header>Title</Card.Header>
                <Card.Body>
                    <Card.Title className="my-4"><h1>{randomFunc()}</h1></Card.Title>
                    <Button variant="primary" size="sm" className="rounded-pill px-3">randomize</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Content;