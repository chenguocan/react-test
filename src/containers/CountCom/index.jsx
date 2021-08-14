import React, { Component } from 'react'
import { connect } from "react-redux"
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from "../../redux/actions/count"

class CountCom extends Component {
    increment = () => {
        const { value } = this.selectNumber
        this.props.add(value * 1)
    }
    decrement = () => {
        const { value } = this.selectNumber
        this.props.subtract(value * 1)
    }
    incrementIfOdd = () => {
        const { value } = this.selectNumber
        const { count } = this.props.count
        if (count % 2 === 0) {
            this.props.add(value * 1)
        }
    }
    incrementAsync = () => {
        const { value } = this.selectNumber
        this.props.asyncAdd(value * 1)
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <div>
                    和:{this.props.personCount}
                </div>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.incrementIfOdd}>偶数加</button>
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        )
    }
}


export default connect(
    state => ({ count: state.count,personCount:state.persons.length }),
    {
        add: createIncrementAction,
        subtract: createDecrementAction,
        asyncAdd: createIncrementAsyncAction
    }
)(CountCom)