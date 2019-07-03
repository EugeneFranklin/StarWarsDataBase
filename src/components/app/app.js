import React, {Component} from 'react';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ErrorButton from "../error-button/error-button";
import PeoplePage from "../people-page/people-page";
import './app.css';
import ErrorIndicator from "../error-indicator/error-indicator";


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showRandomPlanet: true,
            selectedPerson: null,
            hasError: false
        };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        })
    }

    toggleRandomPlanet = () => {
        this.setState(state => {
                return {
                    showRandomPlanet: !state.showRandomPlanet
                }
            }
        );
    };

    render() {
        if (this.state.hasError) return <ErrorIndicator/>;
        const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;
        return (
            <div className="stardb-app">
                <Header/>
                {planet}
                <button className="toggle-planet btn btn-warning btn-lg m-1" onClick={this.toggleRandomPlanet}>
                    Toggle Random Planet
                </button>
                <ErrorButton/>
                <PeoplePage/>
                   </div>
        )
    }
}

