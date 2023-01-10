import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

let randomFunc = () => {
    let randNum = Math.floor(Math.random() * 100) + 1;
    return randNum;
};

const Content = () => {
    return (
        <div>
            <Card>
                <Card.Header>Title</Card.Header>
                <Card.Body>
                    <Card.Title>Body Title</Card.Title>
                    <Card.Text>Body content {randomFunc}</Card.Text>
                    <Button variant="primary">button</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Content;