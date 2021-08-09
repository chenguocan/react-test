import React, { Component } from 'react'
import "./index.css"
export default class Footer extends Component {

    handleTask=(flag)=>{
        return (event)=>{
            this.props.handleDone(event.target.checked)
        }
    }


    render() {
        const { todos } = this.props
        const todoCount = todos.length
        const doneCount = todos.reduce((pre, current) => {
            return pre += current.done ? 1 : 0
        }, 0)
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={todoCount===doneCount} onChange={this.handleTask(true)} />
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{todoCount}
                </span>
                {/* <button className="btn btn-danger" onClick={this.handleTask(false)}>清除已完成任务</button> */}
            </div>
        )
    }
}
