import React, { Component } from 'react'
import store from "../../redux/store.js"
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from "../../redux/count_action"
export default class CountCom extends Component {
    state = {
        count: 0
    }

    increment = () => {
        const { value } = this.selectNumber
        store.dispatch(createIncrementAction(value * 1))
    }
    decrement = () => {
        const { value } = this.selectNumber
        store.dispatch(createDecrementAction(value * 1))
    }
    incrementIfOdd = () => {
        const { value } = this.selectNumber
        const count = store.getState()
        if (count * 1 % 2 === 0) {
            store.dispatch(createIncrementAction(value * 1))
        }
    }
    incrementAsync = () => {
        const { value } = this.selectNumber
        store.dispatch(createIncrementAsyncAction(value * 1, 500))
    }
    render() {
        return (
            <div>
                <div>
                    和:{store.getState()}
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
