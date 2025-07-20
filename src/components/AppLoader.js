import React from "react"
import { connect } from "react-redux";
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS


const AppLoader = (props) => {

    return (
        <>
            {props.isLoading && <div className="loader-container">
                <div className="text-center">
                    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', position: 'fixed', top: 0, left: 0, width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.8)', zIndex: 9999 }}>
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                </div>
            </div>}
        </>
    );
}

const mapStateToProps = state => {
    return {
        isLoading: state.loaderStatus
    }
}

export default connect(mapStateToProps)(AppLoader);