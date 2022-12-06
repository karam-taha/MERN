import React, {Component} from 'react';

class PersonCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            addAge: this.props.age,
            show:true
        };
    }
    render(){
        return (
        <div>
            <h1>{this.props.firstname}, {this.props.lastname}</h1>
            <p>Age: {this.state.addAge}</p>
            <p>Hair Color: {this.props.haircolor}</p>
            <button onClick={ () => { this.setState({ addAge: this.state.addAge + 1 }) } }>Birthday button for {this.props.firstname} {this.props.lastname}</button>
        </div>
        );
    }
}

export default PersonCard;