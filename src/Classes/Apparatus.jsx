import React, { Component } from 'react'; 

class Apparatus extends Component {
    state = { 
        id: this.props.id,
        name: this.props.name,
        abbreviation: this.props.abbreviation
     }
    render() { 
        return ( 
            <div>
                <div>{this.state.name}</div>
                <div>{this.state.abbreviation}</div>
            </div>
         );
    }
}
 
export default Apparatus;