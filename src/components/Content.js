import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Content = ({ formRef }) => {
    let randomFunc = () => {
        let randNum = Math.floor(Math.random() * 100) + 1;
        return randNum;
    };

    return (
        <div>
            <Card ref={formRef} className="">
                <Card.Header>Input Number Range</Card.Header>
                <Card.Body>
                    <Card.Title>Body Title</Card.Title>
                    <Button variant="primary">button</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header>Title</Card.Header>
                <Card.Body>
                    <Card.Title>Body Title</Card.Title>
                    <Card.Text>Body content {randomFunc()}</Card.Text>
                    <Button variant="primary">button</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Content;