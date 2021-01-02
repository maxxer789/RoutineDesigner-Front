import { render } from '@testing-library/react';
import React, { Component } from 'react';

/*class Apparatus extends Component {
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
}*/

const showMessage = id =>{
    const url = 
}

const Apparatus = props => {
    return (
        <button onClick={() => showMessage(props.apparatus.id)} className="apparatusButton">
            <div className="apparatus">
                <div className={'apparatus ${props.name}'}>
                    {props.apparatus.name}
                </div>
                <div className="abb">
                    {props.apparatus.abbreviation}
                </div>
            </div>
        </button>
    )
}

export default Apparatus;