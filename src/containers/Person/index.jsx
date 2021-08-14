import React, { Component } from 'react'
import { connect } from "react-redux"
import { addPerson } from "../../redux/actions/person"
import { nanoid } from 'nanoid'
class Persons extends Component {
    addPerson = () => {
        const obj = {
            id: nanoid(),
            name: this.addName.value,
            age: this.addAge.value
        }
        this.props.addPerson(obj)
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>我是Person组件{this.props.personCount}</h1>
                <input type="text" ref={c => { this.addAge = c }}></input>
                <input type="text" ref={c => { this.addName = c }}></input>
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.persons.map(item => {
                            return <li key={item.id}>id={item.id} name={item.name} age={item.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({ count:state.count, persons: state.persons }),
    {
        addPerson
    }
)(Persons)
