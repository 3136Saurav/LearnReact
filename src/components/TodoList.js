import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class TodoList extends Component {

    constructor() {
        super();

        this.state = {
            value: "",
            todos: ["Eat", "Sleep", "Code"]
        }
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    addTodo = () => {
        console.log("Add");
        const todos = [...this.state.todos, this.state.value]

        this.setState({todos: todos, value: ""})
    }

    removeTodo = (id) => {
        console.log(id);

        const todos = this.state.todos.filter((todo, index) => index !== id)
        this.setState({todos: todos})
    } 
    
    markDone = (e, id) => {
        
        console.log(e.target.style);
        
        e.target.style.textDecoration = "line-through"
        
        
    }

    render() {
        return (
            <>
                <div className="jumbotron">
                    <h1>Todo List</h1>
                </div>

                <input value={this.state.value} onChange={this.handleChange} placeholder="Add Todo" type="text"></input>
                <button onClick={this.addTodo} className="btn btn-success">Add</button>

                <table className="table">
                    <tbody>
                        {
                        this.state.todos.map((todo, index) => 
                        (
                            <tr key={index}>
                                <td onClick={(e) => this.markDone(e, index)}>{todo}</td>
                                {/* <td><button onClick={(e) => this.markDone(e, index)} className="btn btn-warning">Done</button></td> */}
                                <td><button onClick={() => this.removeTodo(index)} className="btn btn-danger">Remove</button></td>  </tr>
                                
                        ) 
                        )}  
                        </tbody>
                    </table>
                
            </>
        )
    }

}


export default TodoList;
 
// Add ---------------------


// ...
// ...  [Done --- Remove]


