import React, { Component } from 'react'
import "./index.css"
import PropTypes from "prop-types"
import { nanoid } from 'nanoid'
export default class Header extends Component {
    
    static propTypes={
        addTodo:PropTypes.func.isRequired
    }

    addTodoList=(event)=>{
        if(event.keyCode!==13) return
        if(event.target.value.trim()==='') return window.alert('请输入内容')
        const todoObj={
            id:nanoid(),
            name:event.target.value,
            done:false,
        }
        this.props.addTodo(todoObj)
        event.target.value=''
    }

    render() {
        return (
            <div className="todo-header">
                <input type="text" onKeyUp={this.addTodoList} placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}
