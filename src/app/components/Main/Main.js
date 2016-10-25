import React, { Component } from 'react';
import { Otter } from './subcomponents';

//initial component just is a single div.
export default class Main extends Component {
  render () {
    return (
      <div className='large-font'>
        <Otter title='hello from the props side'></Otter>
      </div>
    );
  }
}
