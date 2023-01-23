import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function resetRange() {
    return { type: 'RESET_RANGE' }
}
function selectMenu(menu) {
    return { type: 'SELECT_MENU', menu: menu }
}

const Menu = (props) => {
    let randomLegacy = () => {
        props.resetRange();
        props.selectMenu(1);
        if (props.menu == 1) {
            props.r1CtnRef.current.classList.add('d-none');
            props.r1FormRef.current.classList.remove('d-none');
        }
    };
    let randomStack = () => {
        props.resetRange();
        props.selectMenu(2);
    }

    return (
        <div>
            <Card className="rounded-4">
                <Card.Header className="fw-bold">Menu</Card.Header>
                <Card.Body>
                    <div className="d-grid">
                        <Button variant="outline-primary" size="sm" className="rounded-pill px-3 mb-2" type="button" onClick={randomLegacy}>Random number (default)</Button>
                        <Button variant="outline-primary" size="sm" className="rounded-pill px-3 mb-2" type="button" onClick={randomStack}>Random number stack</Button>
                        <div>TBD...</div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        menu: state.menu
    }
}
const dispatchToProps = { resetRange, selectMenu }

export default connect(mapStateToProps, dispatchToProps)(Menu);