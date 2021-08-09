import React, { Component } from 'react'
import "./index.css"
export default class Item extends Component {

    state = {
        mouse: false,
    }
    changeCheck = (id) => {
        return () => {
            this.props.updateTodo(id)
        }
    }

    handleMouse = (flag) => {
        return () => {
            this.setState({
                mouse: flag
            })
        }
    }

    deleteItem=(id)=>{
        return ()=>{
            this.props.deleteTodo(id)
        }
    }

    render() {
        const { mouse } = this.state
        const { id, name, done } = this.props
        return (
            <li style={{ backgroundColor: mouse ? 'gray' : '' }} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.changeCheck(id)} />
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{ display: mouse ? '' : 'none' }} onClick={this.deleteItem(id)}>删除</button>
            </li>
        )
    }
}
