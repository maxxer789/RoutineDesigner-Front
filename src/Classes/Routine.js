import React, { Component } from 'react';
import Apparatus from "./Apparatus"

class Routine extends Component{
    constructor(props){
        super(props)

        this.state = {
            apparatusId: 0,
            Apparatus,

        }
    }
    render(){
        return(
            <div>{this.state.apparatusId}</div>
        )
    }
}

export default Routine