import React, { Component } from 'react';
import './index.scss';

class SyncExample extends Component {
  //User events start with 'handle'
  handleClickDecrement = () => {
    this.props.onClickDecrement()
  }

  handleClickIncrement = () => {
    this.props.onClickIncrement()
  }

  render() {
    return (
      <div className="sync-example">
        <h2>Sync Example</h2>
        <span>{this.props.times}</span>
        <button className="button" onClick={this.handleClickDecrement}>-</button>
        <button className="button" onClick={this.handleClickIncrement}>+</button>
      </div>
    );
  }
}

export default SyncExample;
