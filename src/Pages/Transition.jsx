import React, { Component } from 'react';
import TransitionSample from '../components/TransitionSample';

class Transition extends Component {
  state = {
      transitionDelay: 0,
      transitionDuration: 0,
      transitionProperty: 'all',
      transitionTimingFunction: 'ease-in',
  }

  handleTransitionDelayChange = (event) => {
    this.setState({transitionDelay: event.target.value });
  }

  handleTransitionDurationChange = (event) => {
    this.setState({transitionDuration: event.target.value });
  }

  handleTransitionPropertyChange = (event) => {
    this.setState({transitionProperty: event.target.value });
  }

  handleTransitionTimingFunctionChange = (event) => {
    this.setState({transitionTimingFunction: event.target.value });
  }

  render() {
    return (
        <div>
            <code className="code">
                {`.my-class {
                    transition-delay: 2s;
                    transition-delay: 2s;
                    transition-property: padding, margin;
                    transition-timing-function: linear;
                }`}
            </code>
            <TransitionSample
                transitionDelay={this.state.transitionDelay}
                transitionDuration={this.state.transitionDuration}
                transitionProperty={this.state.transitionProperty}
                transitionTimingFunction={this.state.transitionTimingFunction}
                handleTransitionDelayChange={this.handleTransitionDelayChange}
                handleTransitionDurationChange={this.handleTransitionDurationChange}
                handleTransitionPropertyChange={this.handleTransitionPropertyChange}
                handleTransitionTimingFunctionChange={this.handleTransitionTimingFunctionChange}
                style={{
                    'transitionDelay': `${this.state.transitionDelay}ms`,
                    'transitionDuration': `${this.state.transitionDuration}s`,
                    'transitionProperty': `${this.state.transitionProperty}`,
                    'transitionTimingFunction': `${this.state.transitionTimingFunction}`,
                }}
            />
        </div> 
    );
  }
}

export default Transition;
