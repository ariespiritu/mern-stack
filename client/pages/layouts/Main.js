import React, { Component } from 'react'

class Main extends Component {

  componentWillMount() {
    window.scrollTo(0, 0)
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
