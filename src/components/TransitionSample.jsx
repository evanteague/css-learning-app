import React from 'react';
import descriptions from '../util/descriptions';
import './TransitionSample.css';

const SampleContent = (props) => {
    console.log(props.transitionTimingFunction);
    return (
        <div className="transition-content__container">
            <h1>{props.title}</h1>
            <p>Transition Delay: {descriptions.transitionDelay}</p>
            <p>Transition Duration: {descriptions.transitionDuration}</p>
            <p>Transition Property: {descriptions.transitionProperty}</p>
            <p>Transition Timing Function: {descriptions.transitionTimingFunction}</p>
            <p>Note: You can only transition things that have intermediate values.
                E.g. You can transition color and size, but you can't transition display.
                (Well, you can, but I've been told that the results can be unpredictable)
            </p>
            <div className="transition-content__content">
                <div className="transition-content__content-text" style={props.style}>
                {"Sample Text"}
                </div>
            </div>
            <div className="transition-content__controls">
                Transition Delay:
                <input
                    type="number"
                    onChange={props.handleTransitionDelayChange}
                    value={props.transitionDelay}
                />
                <br />
                Transition Duration:
                <input
                    type="number"
                    onChange={props.handleTransitionDurationChange}
                    value={props.transitionDuration}
                />
                <br />
                Transition Property:
                <select
                    value={props.transitionProperty}
                    onChange={props.handleTransitionPropertyChange}
                >
                    <option value="all">All</option>
                    <option value="padding">Padding</option>
                    <option value="border">Border</option>
                    <option value="font-size">Font Size</option>
                    <option value="transform">Transform</option>
                </select>
                <br />
                Transition Timing function:
                <select
                    value={props.transitionTimingFunction}
                    onChange={props.handleTransitionTimingFunctionChange}
                >
                    <option value="ease-in">Ease in</option>
                    <option value="linear">Linear</option>
                    <option value="steps(4, end)">steps(4, end)</option>
                </select>
                <br />
            </div>
        </div>
    )
}

export default SampleContent;