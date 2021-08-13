import CountUI from "../../component/CountCom"
import {connect} from "react-redux"
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from "../../redux/count_action"
function mapStateToProps(state){
    return {count:state}
}

function mapDispatchToProps(dispatch){
    return {
        add:(value)=>{
            dispatch(createIncrementAction(value))
        },
        subtract:(value)=>{
            dispatch(createDecrementAction(value))
        },
        asyncAdd:(value,time)=>{
            dispatch(createIncrementAsyncAction(value,time))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CountUI)