import CountUI from "../../component/CountCom"
import { connect } from "react-redux"
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from "../../redux/count_action"


export default connect(
    state => ({ count: state }),
    {
        add: dispatchcreateIncrementAction,
        subtract: createDecrementAction,
        asyncAdd: createIncrementAsyncAction
    }
)(CountUI)