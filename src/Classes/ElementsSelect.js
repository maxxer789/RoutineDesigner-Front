import React, { Component } from 'react';
import Element from './Element'

class ElementsSelect extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            skillGroupId: null,
            elements: [{}],
            selectedElementId: null
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    async componentDidMount() {
        console.log(this.props);
        this.setState({ skillGroupId: this.props.match.params.skillGroupId }, async () => {
            const url = `http://localhost:5000/api/skillGroup/${this.state.skillGroupId}/elements`;
            await fetch(url)
                .then(res => res.json())
                .then(json => {
                    console.log(json);
                    this.setState({
                        loading: false,
                        elements: json.elements
                    });
                })
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const url = "http://localhost:5000/api/routine/addElement";
        let data = {
            routineId: parseInt(this.props.match.params.routineId, 10),
            elementId: parseInt(this.state.selectedElementId, 10)
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
        return (this.state.loading || !this.state.elements ?
            (
                <div>Loading...</div>
            ) : (
                <div>
                    <h2>Select an element</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="allElements">
                            {this.state.elements.map(el => (
                                <Element key={el.id} inputHandler={this.handleInputChange} element={el} />
                            ))}
                        </div>
                        <button type="submit"> select element</button>
                    </form>
                </div>

            )
        )
    }
}
export default ElementsSelect;