import React, { Component } from 'react';
import SkillGroup from "./SkillGroup"

class SkillGroups extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            apparatusId: null,
            selectedSkillGroup: {},
            skillGroups: [{}],
            apparatus: {}
        }

        this.handleInput = this.handleInput.bind(this);
    }

    async componentDidMount() {
        console.log(this.props);
        this.setState({ apparatusId: this.props.match.params.apparatusId }, async () => {
            const url = `http://localhost:5000/api/Apparatus/${this.state.apparatusId}/skillGroups`
            await fetch(url)
                .then(res => res.json())
                .then(json => {
                    this.setState({
                        loading: false,
                        skillGroups: json.skillGroups,
                        apparatus: json.apparatus
                    });
                })
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.selectedSkillGroup >= 0) {
            this.props.history.push({
                pathname: `/Elements/${this.props.match.params.routineId}/${this.state.selectedSkillGroup}`
            });
        }
    }

    handleInput = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (this.state.loading || !this.state.skillGroups ?
            (
                <div>Loading...</div>
            ) : (
                <div>
                    <h2>Select a skill group to choose a new element from</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            {this.state.skillGroups.map(skillGroup => (
                                <SkillGroup required key={skillGroup.id} inputHandler={this.handleInput} skillGroup={skillGroup} />
                            ))}
                        </div>
                        <button type="submit">Select skillGroup</button>
                    </form>
                </div>
            )
        )
    }
}

export default SkillGroups;