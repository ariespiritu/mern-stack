import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Main extends Component {

  constructor() {
    super()
  }

  componentDidUpdate() {
    ReactDOM.findDOMNode(this).scrollTop = 0
  }

  render() {
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default Main
