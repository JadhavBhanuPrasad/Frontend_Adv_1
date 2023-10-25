import React, { Component } from 'react'

export class F_Eventbinding extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       val : 'before'
    }
  }

  change1() {
    this.setState( {
        val : 'after1'
    })
  }

  change2 = () => {
    this.setState( {
        val : 'after2'
    })
  }

  change3 = () => {
    this.setState( {
        val : 'after3'
    })
  }

  change4 = () => {
    this.setState( {
        val : 'after4'
    })

    this.change4 = this.change4.bind(this)
  }


  render() {
    return (
      <div>
            {this.state.val}
            <br />

            {/* first way */}
            <button onClick={ () => this.change1() }>change1</button>
            <br />

            {/* second way */}
            <button onClick={ this.change2}>change2</button>
            <br />

            {/* third way */}
            <button onClick={ this.change3.bind(this) }>change3</button>
            <br />

            {/* fourth way */}
            <button onClick={this.change4}>change4</button>
            <br />

      </div>
    )
  }
}

export default F_Eventbinding