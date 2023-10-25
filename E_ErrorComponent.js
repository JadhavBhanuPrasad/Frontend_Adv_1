import React, { Component } from 'react'

export class E_ErrorComponent extends Component {
constructor(props) {
  super(props)

  this.state = {
     
  }
}
  render() {

    if(this.props.name == "Unknown")
    throw new Error("you typed Unknown which is invalid")
    return (
      <div> ErrorComponent 
        <br />
        {this.props.name}
      </div>
    )
  }
}

export default E_ErrorComponent