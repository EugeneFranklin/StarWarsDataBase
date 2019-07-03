import React from 'react';

import './error-indicator.css';
import icon from './death-star.png';

export default class ErrorBoundry extends React.Component {
    state = {
        hasError: false
    }
    componentDidCatch(error, info) {
        this.setState({
            hasError: true
        });
    }
    render () {
        if (this.state.hasError)
            return <ErrorIndicator/>;
        return this.props.children;
    }
}

export const ErrorIndicator  = () =>{
    return (
        <div className="error-indicator">
            <img src={icon} alt="error icon"/>
                <span className="boom">BOOM!</span>
                <span>
                    something has gone terribly wrong
                </span>
                <span>
                    (but we already sent droits to fix it)
                </span>

        </div>
    )
};

