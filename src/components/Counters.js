import React, {Component} from 'react';
import Counter from './Counter';

class Counters extends Component {
    constructor() {
        super();

        this.state = {
            counters: [
                       {id: 1, initialValue: 10}, 
                       {id: 2, initialValue: 20},
                       {id: 3, initialValue: 30}, 
                       {id: 4, initialValue: 40}
                    ]
        }

        this.deleteComponent = this.deleteComponent.bind(this)
    }

    deleteComponent(id) {
        console.log("id", id);
        const counters = this.state.counters.filter(counterObj => counterObj.id !== id)
        this.setState({
            counters: counters
        })
    }

    render() {
        return(
          <ul>
                {this.state.counters.map((counterObj) => <Counter onDelete={this.deleteComponent} id={counterObj.id} key={counterObj.id} initialValue={counterObj.initialValue}></Counter>)}
          </ul>
        )
    }

}

export default Counters;


// Counters - Parent 
// Counter  - Child













