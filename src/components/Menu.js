import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from "react-bootstrap/Button";

const Menu = (props) => {
    let randomLegacy = () => {
        props.r1CtnRef.current.classList.add('d-none');
        props.r1FormRef.current.classList.remove('d-none');
    };

    return (
        <div>
            <Card className="rounded-4">
                <Card.Header className="fw-bold">Menu</Card.Header>
                <Card.Body>
                    <Button variant="outline-primary" size="sm" className="rounded-pill px-3 mb-2" type="button" onClick={randomLegacy}>Random number (default)</Button>
                    <div>TBD...</div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Menu;