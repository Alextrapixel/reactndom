import Alert from 'react-bootstrap/Alert';

const Header = () => {
    return (
        <div id="rn-header" className="header">
            <h1>Reactndom</h1>
            <Alert variant="success">
                <Alert.Heading>Welcome,</Alert.Heading>
                <p>
                    Here is new webapp to randomize a range of number using ReactJs framework.
                    This project currently work in progress. So stay tunned!
                </p>
                <hr />
                <p className="mb-0">
                    Fork me at <a href='https://github.com/Alextrapixel/reactndom' target={'_blank'} rel="noreferrer">github</a>
                </p>
            </Alert>
        </div>
    );
}

export default Header;