import React, { Component } from 'react'

import Snowy from 'lib'

export default class App extends Component {
  render() {
    return (
      <div style={{ height: 400 }}>
        <Snowy flakeCount="medium" />
      </div>
    );
  }
}
