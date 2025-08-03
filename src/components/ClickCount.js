import React from "react";
import { connect, useSelector } from "react-redux";

function ClickCount(props) {
    let count = useSelector((state) => state.count)
    return(
        <>
        <div>
            Component Click-Count:
        </div>
        {/* <span>With mapStateToProps :: {props.numOfCount}</span> */}
        <span>With useSelector Hook :: {count}</span>
        </>
        
    );
}
// const mapStateToProps = state => {
//     // console.log("Click state ::>", state);
//     return {
//         numOfCount: state.count
//     }
// }
// export default connect(mapStateToProps)(ClickCount);

export default ClickCount;