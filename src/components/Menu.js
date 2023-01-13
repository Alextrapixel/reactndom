import { useRef } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from "react-bootstrap/Button";

const Menu = (props) => {
    const testRef = useRef();
    let testF = () => {
        console.log(props.r1FormRef.current);
    };

    return (
        <div>
            <Card>
                <Card.Header>Menu</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item><Button variant="outline-primary" size="sm" className="rounded-pill px-3" type="button" onClick={testF}>Random number (default)</Button></ListGroup.Item>
                    <ListGroup.Item>TBD...</ListGroup.Item>
                </ListGroup>
            </Card>
            <div ref={testRef}>test</div>
        </div>
    );
};

export default Menu;