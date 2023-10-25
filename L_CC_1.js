import React, { Component } from 'react'
import L_CC_2 from './L_CC_2'

export class L_CC_1 extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       valueIn1 : 'class 1 data'
    }
  }
  changeState = (val) => {
    this.setState( {valueIn1 : val})
  }


  render() {
    return (

      <div>
        <h2>component 1</h2>
        {this.state.valueIn1}
         <L_CC_2 valueTo2 = {this.state.valueIn1}  changeValueIn1 = {this.changeState}> </L_CC_2>
      </div>
    )
  }
}

export default L_CC_1