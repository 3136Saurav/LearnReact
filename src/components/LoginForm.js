import React, { Component } from 'react';
import Input from './Input';


class LoginForm extends Component {
    constructor() {
        super();

        this.state = {
            account: {
                username: "",
                password: ""
            },
            errors: {

            }
        }
    }

    validate = () => {
        const errors = {};

        if (this.state.account.username.trim() === '') {
            errors.username = 'Username is required'
        }

        if (this.state.account.password.trim() === '') {
            errors.password = 'Password is required'
        }

        return Object.keys(errors).length === 0 ? null : errors;
    }

    handleSubmit = (e) => {
        e.preventDefault();

        // Form Validation
        const errors = this.validate()
        console.log(errors);

        this.setState({errors: errors || {}})
        
        if (errors) {
            return;
        }


        // Saving the details into the server

        

        console.log("Form Submitted")
    }

    handleChange = (e) => {
        const account = this.state.account;
        account[e.currentTarget.name] = e.currentTarget.value;

        this.setState({account: account})
    }
    

    render() {
        return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                       <Input error={this.state.errors.username} label="Username" name="username" value={this.state.account.username} onChange={this.handleChange} />
                       <Input error={this.state.errors.password} label="Password" name="password" value={this.state.account.password} onChange={this.handleChange} />
                        <button className="btn btn-primary">Login</button>
                    </form>
                </div>

            )

    }
}


export default LoginForm;