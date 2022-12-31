import React, { Component } from "react";
import axios from 'axios';

class Users extends Component {
    constructor() {
        super();

        this.state = {
            users: []
        }
    }


    async componentDidMount() {
        const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

        // api call
        const response = await axios.get(API_ENDPOINT);
        console.log(response.data)
        
        this.setState({ users: response.data })        
    }

    handleRemove = async (id) => {
        const API_ENDPOINT = `https://jsonplaceholder.typicode.com/users`;
        
        const originalUsers = this.state.users;

        const remainingUsers = this.state.users.filter(user => id !== user.id)
        this.setState({users: remainingUsers})

        const response = await axios.delete(API_ENDPOINT + `/${id}`); // .... 
        console.log('response ', response);
        
        if (response.status !== 200) {
            this.setState({users: originalUsers})
        }
    }

    handleUpdate = async (id) => {
        const API_ENDPOINT = `https://jsonplaceholder.typicode.com/users`;

        const updatedObj = {
            name: "John Cena",
            email: "john@cena.com"
        }

        const response = await axios.put(API_ENDPOINT + `/${id}`, updatedObj); // .... 
        console.log('PUT response ', response);

        for (let i=0; i < this.state.users.length; i++) {
            if (this.state.users[i].id === id) {
                this.state.users[i].name = updatedObj.name
                this.state.users[i].email = updatedObj.email
                break;
            }
        }


        this.setState({users: this.state.users})

    } 

    handleAdd = async () => {
        const API_ENDPOINT = `https://jsonplaceholder.typicode.com/users`;

        const user = {
            name: "Michael Jackson",
            email: "Maikalal@jaikisan.com"
        }

        const response = await axios.post(API_ENDPOINT, user); // .... 
        console.log('PUT response ', response);

        const newUsers = [response.data, ...this.state.users]
        this.setState({users: newUsers})
    }

    render() {
        return (
            <table className="table">
                <tr>
                    
                    <th>Name</th>
                    <th>Email</th>
                    <th>Remove</th>
                    <th>Update</th>
                    <th><button onClick={() => this.handleAdd()} className="btn btn-success">Add</button></th>
                </tr>

                {
                    this.state.users.map((user, index) => {
                        return (
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td><button onClick={() => this.handleRemove(user.id)} className="btn btn-danger">Remove</button></td>
                                <td><button onClick={() => this.handleUpdate(user.id)} className="btn btn-warning">Update</button></td>
                            </tr>
                        )
                    })
                }
            </table>

        )
    }



}


export default Users;