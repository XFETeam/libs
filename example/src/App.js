import React, { Component } from 'react'
import qs from 'qs'

import ExampleComponent from 'lib'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.value = (qs.parse(window.location.search.slice(1)) || {}).value;
  }

  render () {
    return (
      <div>
        <ExampleComponent code={this.value} />
      </div>
    )
  }
}
