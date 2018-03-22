import React, { Component } from 'react';
import './index.scss';

class SyncExample extends Component {
  //User events start with 'handle'
  handleClickFetch = () => {
    this.props.onClickFetch({url: 'https://jsonplaceholder.typicode.com/posts/1', id: 'randomPage'})
  }

  render() {
    return (
      <div className="sync-example">
        <h2>Async Example</h2>
        <button className="button" onClick={this.handleClickFetch}>Fetch data</button>
        {
          this.props.book &&
          <div className="">
            <h3>{this.props.book.title}</h3>
            <p>{this.props.book.body}</p>
          </div>
        }
        </div>

    );
  }
}

export default SyncExample;
