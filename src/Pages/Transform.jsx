import React, { Component } from 'react';
import SampleContent from '../components/SampleContent';
import descriptions from '../util/descriptions';

class Transform extends Component {
  state = {
    translateX: 0,
    translateY: 0,
    scaleX: 1,
    scaleY: 1,
    rotateX: 0,
    rotateY: 0,
    skewX: 0,
    skewY: 0,
    transformOriginX: 'center',
    transformOriginY: 'center',
  }

  handleTransformPropertyChange = (transformProperty) => (event) => {
    this.setState({[transformProperty]: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <SampleContent
          title={'Translate'}
          description={descriptions['translate']}
          valueX={this.state.translateX}
          valueY={this.state.translateY}
          unit={'px'}
          inputType={'number'}
          handleChangeX={this.handleTransformPropertyChange('translateX')}
          handleChangeY={this.handleTransformPropertyChange('translateY')}
          style={{
            'transform': `translateX(${this.state.translateX}px) translateY(${this.state.translateY}px)`
          }}
        />
        <SampleContent
          title={'Scale'}
          description={descriptions['scale']}
          valueX={this.state.scaleX}
          valueY={this.state.scaleY}
          unit={'none'}
          inputType={'number'}
          handleChangeX={this.handleTransformPropertyChange('scaleX')}
          handleChangeY={this.handleTransformPropertyChange('scaleY')}
          style={{
            'transform': `scaleX(${this.state.scaleX}) scaleY(${this.state.scaleY})`
          }}
        />
        <SampleContent
          title={'Rotate'}
          description={descriptions['rotate']}
          valueX={this.state.rotateX}
          valueY={this.state.rotateY}
          unit={'deg'}
          inputType={'number'}
          handleChangeX={this.handleTransformPropertyChange('rotateX')}
          handleChangeY={this.handleTransformPropertyChange('rotateY')}
          style={{
            'transform': `rotateX(${this.state.rotateX}deg) rotateY(${this.state.rotateY}deg)`
          }}
        />
        <SampleContent
          title={'Skew'}
          description={descriptions['skew']}
          valueX={this.state.skewX}
          valueY={this.state.skewY}
          unit={'deg'}
          inputType={'number'}
          handleChangeX={this.handleTransformPropertyChange('skewX')}
          handleChangeY={this.handleTransformPropertyChange('skewY')}
          style={{
            'transform': `skewX(${this.state.skewX}deg) skewY(${this.state.skewY}deg)`
          }}
        />
        <SampleContent
          title={'Transform Origin'}
          description={descriptions['transformOrigin']}
          valueX={this.state.transformOriginX}
          valueY={this.state.transformOriginY}
          unit={'keyword | any CSS length unit'}
          inputType={'text'}
          handleChangeX={this.handleTransformPropertyChange('transformOriginX')}
          handleChangeY={this.handleTransformPropertyChange('transformOriginY')}
          style={{
            'transform': `rotate(45deg)`,
            'transformOrigin': `${this.state.transformOriginX} ${this.state.transformOriginY}`
          }}
        />
      </div>
    );
  }
}

export default Transform;
