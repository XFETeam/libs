import React, { Component } from 'react'
import qs from 'qs'
import ExampleComponent from 'lib'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.uid = (qs.parse(window.location.search.slice(1)) || {}).uid;
  }

  render () {
    return (
      <div>
        <ExampleComponent uid={this.uid} />
      </div>
    )
  }
}
