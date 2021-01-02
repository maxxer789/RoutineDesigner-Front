import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import * as signalR from "@aspnet/signalr";
import { render } from '@testing-library/react';
import Apparatuses from './Classes/Apparatuses';
import Routine from './Classes/Routine';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                    <Route path="/" exact component={Apparatuses} />
                    <Route path="/Apparatuses" component={Apparatuses} />
                    <Route path="/Routine" component={Routine}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;