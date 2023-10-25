import React, { Component } from 'react'


export class L_CC_3 extends Component {
constructor(props) {
  super(props)

  this.state = {
     
  }
}

changeValueIn3 = () => {
    this.props.changeValueIn2('new value from child')
}
  render(props) {
    return (
      <div>
        <h2>component 3</h2>
        {this.props.valueTo3}

        <button onClick={ this.changeValueIn3}>Change</button>
      </div>
      
    )
  }
}

export default L_CC_3