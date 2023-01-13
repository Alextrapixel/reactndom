import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from "react-bootstrap/Button";

const Menu = (props) => {
    return (
        <div>
            <Card>
                <Card.Header>Menu</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item><Button variant="outline-primary" size="sm" className="rounded-pill px-3">Random number (default)</Button></ListGroup.Item>
                    <ListGroup.Item>TBD...</ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    );
};

export default Menu;