import React, { Component } from 'react'
import "./index.css"
import Item from "../Item"
export default class Main extends Component {
    
    render() {
        const {todos}=this.props
        console.log(this.props)
        return (
            <ul className="todo-main">
                {
                    todos.map((todo)=>{
                        return <Item updateTodo={this.props.updateTodo} key={todo.id} {...todo} deleteTodo={this.props.deleteTodo}></Item>
                    })
                }
            </ul>
        )
    }
}
