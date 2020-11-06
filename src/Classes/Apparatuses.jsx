import React, { Component } from 'react';
import Apparatus from "./Apparatus"

class Apparatuses extends Component {
    state = { 
        loading: true,
        apparatuses:[
            { id: 0, name: "", abbreviation: "" },
            { id: 0, name: "", abbreviation: "" },
            { id: 0, name: "", abbreviation: "" },
            { id: 0, name: "", abbreviation: "" },
            { id: 0, name: "", abbreviation: "" },
        ]
     }
     
  async componentDidMount(){
    const url = "http://localhost:5000/api/apparatus/all";
    await fetch(url)
    .then(res => res.json())
    .then(json =>{
        console.log("json", json)
        this.setState({
            loading: false,
            apparatuses: json
        });
    })
  }

    render() { 
        return ( this.state.loading || !this.state.apparatuses ? 
            (
                <div>Loading...</div> 
            ):(
                <div>
                    {this.state.apparatuses.map(apparatus => (
                        <Apparatus key={apparatus.id} name={apparatus.name} abbreviation={apparatus.abbreviation} />
                    ))}
                </div> 
            )
        );
    }
}
 
export default Apparatuses;