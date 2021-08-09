import React, { Component } from "react";
import "./App.css"
import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer"
import { nanoid } from "nanoid"
class App extends Component {
  state = {
    todos: [{
      id: nanoid(),
      name: '吃饭',
      done: true
    }, {
      id: nanoid(),
      name: '睡觉',
      done: false
    }]
  }

  addTodo = (todoObj) => {
    const { todos } = this.state
    this.setState({
      todos: [todoObj, ...todos]
    })
  }
  //* todo赋值
  updateTodo = (id) => {
    const { todos } = this.state
    const newObj = todos.map((todo) => {
      if (todo.id === id) return { ...todo, done: !todo.done }
      else return todo
    })
    this.setState({
      todos: newObj
    })
  }

  deleteTodo = (id) => {
    console.log(id)
    const { todos } = this.state
    const newTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    this.setState({
      todos: newTodos
    })
  }

  handleDone = (flag) => {
    console.log(flag)
    const { todos } = this.state
    const newObj=todos.map((todo) => {
      return { ...todo, done: flag }
    })
    this.setState({
      todos:newObj
    })
  }
  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}></Header>
          <Main todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}></Main>
          <Footer todos={todos} handleDone={this.handleDone}></Footer>
        </div>
      </div>
    )
  }
}
export default App;
