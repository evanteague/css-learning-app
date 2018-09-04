import React from 'react';
import descriptions from '../util/descriptions';
import './TransitionSample.css';

const SampleContent = (props) => {
    console.log(props.transitionTimingFunction);
    return (
        <div className="transition-content__container">
            <h1>{props.title}</h1>
            <p><span className='property'>Transition Delay: </span>{descriptions.transitionDelay}</p>
            <p><span className='property'>Transition Duration: </span>{descriptions.transitionDuration}</p>
            <p><span className='property'>Transition Property: </span>{descriptions.transitionProperty}</p>
            <p><span className='property'>Transition Timing Function: </span>{descriptions.transitionTimingFunction}</p>
            <div style={{'textAlign': 'left'}}>
                Notes: 
                <ul>
                    <li>
                        You can only transition things that have intermediate values.
                    </li>
                    <li>
                        You can't transition things that don't have intermediate values, like display or something with width: auto.
                        (Well you can, but the effects are unpredictable)
                    </li>
                </ul>
            </div>
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