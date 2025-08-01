import React from "react";
import { addCount, hideLoader, showLoader } from "../actions/index1";
import { connect, useDispatch } from "react-redux";
import { useAuth } from "../contexts/AuthContext";

function ButtonClick(props) {
    const dispatch = useDispatch();
    const auth = useAuth();
    const clickMe = () => {
        dispatch(showLoader())
        // props.onClickButton();
        dispatch(addCount())
        // setTimeout(() => {props.onHideLoader()}, 200)
        setTimeout(() => {dispatch(hideLoader())}, 200)
    }
    return(
        <>
        <button onClick={auth.logout}>Logout</button>
        
        <div>Component ClickMe:</div>
        <button onClick={clickMe}>Click Me</button>
        </>
    );
}

// const mapDispatchToProps = dispatch => {
//     return {
//         onClickButton: () => {
//             dispatch(addCount())
//         },
//         onShowLoader: () => {
//             dispatch(showLoader())
//         },
//         onHideLoader: () => {
//             dispatch(hideLoader())
//         }
//     }
// }

// export default connect(null, mapDispatchToProps)(ButtonClick);

export default ButtonClick;