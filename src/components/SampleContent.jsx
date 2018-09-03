import React from 'react';
import './SampleContent.css';

const SampleContent = (props) => {
    return (
        <div className="sample-content__container">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <p>Unit: {props.unit}</p>
            <div className="sample-content__content">
                <div className="sample-content__content-text" style={props.style}>
                {"Sample Text"}
                </div>
            </div>
            <div className="sample-content__controls">
                X: <input type={props.inputType} onChange={props.handleChangeX} value={props.valueX}/>
                <br />
                Y: <input type={props.inputType} onChange={props.handleChangeY} value={props.valueY}/>
            </div>
        </div>
    )
}

export default SampleContent;