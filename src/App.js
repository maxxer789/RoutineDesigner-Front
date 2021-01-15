import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Apparatuses from './Classes/Apparatuses';
import Routine from './Classes/Routine';
import SkillGroups from './Classes/SkillGroups';
import ElementsSelect from './Classes/ElementsSelect'
import Notification from './signalR/signalR'

class App extends Component {
    render() {
        return (
            <div>
                {/*
                voor signalR uncommnet -> open special chrome
                <Notification />
                */}
                <Router>
                    <div className="App">
                        <Switch>
                            <Route path="/" exact component={Apparatuses} />
                            <Route path="/Routine/:routineId" component={Routine} />
                            <Route path="/SkillGroups/:routineId/:apparatusId" component={SkillGroups} />
                            <Route path="/Elements/:routineId/:skillGroupId" component={ElementsSelect} />
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default App;