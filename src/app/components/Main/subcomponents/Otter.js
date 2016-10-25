import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Otter extends Component {

  constructor (props) {
    super(props);
  }

  componentWillMount () {
    console.log('**** component will mount ****');
  }

  componentDidMount () {
    console.log('**** component mounted ****');
  }

  componentWillUnmount () {
    console.log('**** component will unmount ****');
  }

  componentWillUpdate () {
    console.log('**** component will update ****');
  }

  componentDidUpdate () {
    console.log('**** component did update ****');
  }

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
        <div>
          <Link to={'/hello'}>go to hello world</Link>
        </div>
      </div>
    );
  }
}
