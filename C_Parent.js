import React, { Component } from 'react'
import D_Child from './D_Child'

export class C_Parent extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       status : true
    }
  }
  render() {
    return (
      <div>

        <button disabled = {!this.state.status} onClick={ () => {

            this.setState( {
                status : false
            })
        }}>Unmount</button>

        <button disabled = {this.state.status} onClick={ () => {

            this.setState( {
                status : true
            })
        }}>Mount</button>

        <br />
         {this.state.status ? <D_Child/> : null}
      </div>
    )
  }
}

export default C_Parent