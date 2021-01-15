import React, { Component } from 'react';
import Apparatus from "./Apparatus"

class Apparatuses extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            apparatuses: [
                { id: null, name: null, abbreviation: null },
                { id: null, name: null, abbreviation: null },
                { id: null, name: null, abbreviation: null },
                { id: null, name: null, abbreviation: null },
                { id: null, name: null, abbreviation: null },
            ],
            routineName: null,
            apparatusId: 0,
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    async componentDidMount() {
        const url = "http://localhost:5000/api/apparatus/all";
        await fetch(url)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    loading: false,
                    apparatuses: json
                });
            })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const url = "http://localhost:5000/api/routine/create";
        let data = {
            Name: this.state.routineName,
            ApparatusId: parseInt(this.state.apparatusId, 10),
            SkillLevelId: 1
        }
        fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(response => {
            return response.json()
        }).then(response => {
            this.props.history.push({
                pathname: `/routine/${response.id}`
            });

        }).catch(error => {
            console.error(error)
        })
    }

    handleInputChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (this.state.loading || !this.state.apparatuses ?
            (
                <div role="loading">Loading...</div>
            ) : (
                <div role="apparatuses">
                    <h2>Create routine</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div><input required minLength="5" type="text" role="textbox" placeholder="Routine Name" name="routineName" onChange={this.handleInputChange} /></div>
                        <div>
                            {this.state.apparatuses.map(apparatus => (
                                <Apparatus role="apparatus" inputHandler={this.handleInputChange} key={apparatus.id} apparatus={apparatus} />
                            ))}
                        </div>
                        <button role="button" type="submit">Create Routine</button>
                    </form>
                </div>
            )
        );
    }
}

export default Apparatuses;