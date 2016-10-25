import React, { Component } from 'react';
import { Otter, Headline } from './subcomponents';

//initial component just is a single div.
export default class Main extends Component {
  render () {
    return (
      <div className='large-font'>
        <Headline>This is a headline</Headline>
        <Otter title='hello from the props side'></Otter>
      </div>
    );
  }
}
