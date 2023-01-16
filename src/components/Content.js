import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Form, Row, Col } from "react-bootstrap";

const Content = ({ formRef, ctnRef }) => {
    const [ranval, setRandval] = useState(0);
    const [minval, setMinval] = useState(0);
    const [maxval, setMaxval] = useState(0);
    const [title, setTitle] = useState("");

    let randomFunc = () => {
        let randNum = parseInt(minval) + Math.floor(Math.random() * (parseInt(maxval) - parseInt(minval))) + 1;
        setRandval(randNum);
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
                    <Form.Group className="mb-3" controlId="formMin">
                        <Form.Control type="text" placeholder="Card title" value={title} onChange={e => { setTitle(e.target.value) }} />
                    </Form.Group>
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
                <Card.Header className="fw-bold">{title}</Card.Header>
                <Card.Body>
                    <Card.Title className="my-3 fw-bold"><h1>{ranval}</h1></Card.Title>
                    <Button variant="primary" size="sm" className="rounded-pill px-3" onClick={randomFunc}>randomize</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Content;