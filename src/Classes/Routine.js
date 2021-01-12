import React, { Component } from 'react';

class Routine extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            routineId: 0,
            routineName: null,
            worth: 0.0,
            apparatus: { id: null, name: null, abbreviation: null },
            skillLevel: { id: null, level: null, division: null, ageGroup: null },
            elements: [],
        }
    }

    testData(data){
        this.setState({
            loading:false,
            routineId: data.routineId,
            routineName:data.routineName
        })
    }

    goToSelectSkillGroup = (event) =>{
        event.preventDefault();
        this.props.history.push({ pathname: `/SkillGroups/${this.state.routineId}/${this.state.apparatus.id}` })
    }

    async componentDidMount() {
        this.setState({ routineId: this.props.match.params.routineId }
            , async () => {
                const url = `http://localhost:5000/api/routine/${this.state.routineId}`;
                await fetch(url)
                    .then(res => res.json())
                    .then(json => {
                        this.setState({
                            loading: false,
                            routineName: json.name,
                            apparatus: json.apparatus,
                            worth: json.worth,
                            elements: json.elements,
                            skillLevel: json.skillLevel
                        });
                    })
            });
    }

    render() {
        return (this.state.loading || !this.state.apparatus || !this.state.elements ?
            (
                <div>Loading...</div>
            ) : (
                <div>
                    <div className="info">
                        <h1>{this.state.routineName}</h1>
                        <h2>Routine for: {this.state.apparatus.name}, {this.state.skillLevel.ageGroup} {this.state.skillLevel.division} division</h2>
                    </div>
                    <div className="chosen-elements">
                        <table className="chosen-elementsTable">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Difficulty</th>
                                    <th>Worth</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.elements.map(el => (
                                    <tr key={el.id}>
                                        <td>{el.name}</td>
                                        <td>{el.difficulty}</td>
                                        <td>{el.worth}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <button type="submit" onClick={this.goToSelectSkillGroup}> Add element </button>
                    </div>
                </div>
            )
        );
    }
}

export default Routine