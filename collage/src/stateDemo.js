import { Component } from 'react';

class StateDemo extends Component {
    name = "RAJU"

    constructor() {
        super();
        this.city = "bayyaram"

        this.state = {
            username:"SWATHI",
            city:"CHANAI"
        }
    }

    render() {
        return <div>
            <h1>State demo -{this.name}-from {this.city}</h1>
            <p>{this.welcome()}</p>
            <h3> this is{this.state.username}   from   {this.state.city}</h3>
        </div>

    }
    welcome = () => {
        return this.city;
    }

}
export default StateDemo