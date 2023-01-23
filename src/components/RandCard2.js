import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { Form, Row, Col } from "react-bootstrap";

function setMinRandom(num) {
    return { type: 'SET_MIN', num: num };
}
function setMaxRandom(num) {
    return { type: 'SET_MAX', num: num };
}
function setCardTitle(title) {
    return { type: 'SET_TITLE', title: title };
}

const RandCard2 = (props) => {
    const [arrStack, setArrStack] = useState([]);
    const [popNum, setPopNum] = useState('-');
    const [popArr, setPopArr] = useState([]);
    const [popMdShow, setPopMdShow] = useState(false);

    useEffect(() => {
        return () => {
            setArrStack([]);
            setPopArr([]);
        };
    }, []);

    const stackNums = () => {
        for (let astart = props.minval; astart <= props.maxval; astart++) {
            setArrStack(oldArr => [...oldArr, astart]);
        }
        props.formRef.current.classList.add('d-none');
        props.ctnRef.current.classList.remove('d-none');
    };
    const popNumFunc = () => {
        let iToPop = Math.floor(Math.random() * arrStack.length);
        if (arrStack.length > 0) {
            let aPopNum = arrStack[iToPop];
            setPopNum(aPopNum);
            setArrStack(arrStack.filter((fstack) => fstack !== aPopNum));
            setPopArr(oldArr => [...oldArr, aPopNum]);
        } else setPopNum("-");
    }

    return (
        <div>
            <Card className="rounded-4" ref={props.formRef}>
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
                    <Button variant="primary" className="w-100 rounded-pill px-3" size="sm" onClick={stackNums}>next</Button>
                </Card.Body>
            </Card>
            <div ref={props.ctnRef} className="d-none">
                <Card className="rounded-4">
                    <Card.Header className="fw-bold">{props.cardtitle}</Card.Header>
                    <Card.Body>
                        <Card.Title className="my-3 fw-bold"><h1>{popNum}</h1></Card.Title>
                        <Button variant="primary" size="sm" className="rounded-pill px-3" onClick={popNumFunc}>pop number</Button>
                    </Card.Body>
                </Card>
                <Button variant="light" size="sm" className="mt-2 rounded-pill px-3" onClick={() => setPopMdShow(true)}>popped number</Button>
            </div>
            <Modal
                show={popMdShow}
                onHide={() => setPopMdShow(false)}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                contentClassName="rounded-4"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Popped Number
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul>
                        {popArr.map(ele => (<li key={ele}>{ele}</li>))}
                    </ul>
                </Modal.Body>
            </Modal>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        minval: state.minval,
        maxval: state.maxval,
        cardtitle: state.cardtitle
    }
}
const mapDispatchToProps = { setMinRandom, setMaxRandom, setCardTitle }

export default connect(mapStateToProps, mapDispatchToProps)(RandCard2);