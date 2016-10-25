import React, { Component } from 'react';

//initial component just is a single div.
export default class Headline extends Component {
  render () {
    return (
      <div className='larger-font'>
        {this.props.children}
      </div>
    );
  }
}
