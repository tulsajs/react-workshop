import React, { Component } from 'react';

export default class Otter extends Component {

  getText () {
    console.log(this.refs.name.value);
  }

  // Note the :: operator is just a shortcut for .bind(this)
  render () {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <input type='text' ref='name' />
        <button type='submit' onClick={::this.getText}> Get Name</button>
      </div>
    );
  }
}
