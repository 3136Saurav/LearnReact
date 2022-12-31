import React, {Component} from "react";

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: props.initialValue,
            id: props.id
        }

        console.log('props', props)
    }

    handleIncrement() {
        console.log();
        this.setState({
            count: this.state.count + 1
        })
    }

    handleDecrement() {
        if (this.state.count > 0) {
            this.setState({
                count: this.state.count - 1
            })
        }
    }


    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.handleIncrement()}>+</button>
                <button onClick={() => this.handleDecrement()}>-</button>
                <button onClick={() => this.props.onDelete(this.state.id)}>Delete</button>
            </div>
        )
    }

}


export default Counter;