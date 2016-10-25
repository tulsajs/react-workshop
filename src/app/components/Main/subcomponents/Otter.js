import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Otter extends Component {

  constructor (props) {
    super(props);

    this.state = {
      color: 'red'
    };
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

  setButtonColor () {
    this.setState({color: this.refs.name.value});
  }

  // Note the :: operator is just a shortcut for .bind(this)
  render () {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <input type='text' ref='name' />
        <button type='submit' style={{backgroundColor: this.state.color}} onClick={::this.setButtonColor}> Get Name</button>
        <div>
          <Link to={'/hello'}>go to hello world</Link>
        </div>
      </div>
    );
  }
}
