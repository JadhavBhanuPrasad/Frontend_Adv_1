import React, { Component } from 'react'
import L_CC_3 from './L_CC_3'

export class L_CC_2 extends Component {
constructor(props) {
  super(props)
}
  render(props) {
    return (
      <div>
        <h2>component 2</h2>
        {/* {this.props.valueTo2} */}
        <L_CC_3 valueTo3 = {this.props.valueTo2} changeValueIn2 = {this.props.changeValueIn1}></L_CC_3>
      </div>
    )
  }
}

export default L_CC_2