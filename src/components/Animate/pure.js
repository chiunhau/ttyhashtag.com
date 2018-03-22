import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';

class Animate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.inProp !== nextProps.inProp && nextProps.inProp) {
      setTimeout(() => {
        this.setState({
          show: true
        })
      }, this.props.delay || 0)
    }

    if (this.props.inProp !== nextProps.inProp && !nextProps.inProp) {
      this.setState({
        show: false
      })
    }
  }
  render () {
    const {children, defaultStyles, styles, timeout, inProp, delay} = this.props;

    const baseStyles = {
      transition: `all ${timeout}ms`
    }
    const transitionStyles = {
      entering: styles,
      entered: styles,
      exiting: {...defaultStyles, transition: 'none'},
      exited: defaultStyles
    }
    return (
      <Transition timeout={timeout} in={this.state.show}>
        {
          state => (
            this.props.children({...baseStyles, ...transitionStyles[state]}, state)
          )
        }
      </Transition>
    )
  }
}

export default Animate;
