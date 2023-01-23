import { useEffect } from "react";
import { connect } from "react-redux";
import { Spinner } from "react-bootstrap";

function unsetLoading() {
    return { type: 'SET_LOADING', loading: false }
}

const LoadingPage = (props) => {
    useEffect(() => {
        setTimeout(() => {
            props.unsetLoading();
        }, 500);
    }, [props.menu]);

    return (
        <div className="my-5 d-flex justify-content-center">
            <Spinner animation="border" role="status" variant="secondary">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            <span className="text-secondary ms-3 d-flex align-items-center">loading...</span>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        menu: state.menu
    }
}
const mapDispatchToProps = { unsetLoading }

export default connect(mapStateToProps, mapDispatchToProps)(LoadingPage);