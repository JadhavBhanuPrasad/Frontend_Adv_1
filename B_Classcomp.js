import React, { Component } from 'react'

export class B_Classcomp extends Component {

    constructor(props) {
        super(props)
        console.log(' cc2 constructor is called ')
        this.state = {
           first : 'mundhu'
        }
      }
    
     static getDerivedStateFromProps(props, state) {
        console.log( ' cc2 getDerivedStateFromProps is called')
        return null;
     }
      
      componentDidMount() {
        console.log('cc2 componentDidMount is called')
        //here do api calls because it is only a called once
      }

    //   componentDidUpdate(prevProps, prevState) { 
    //     console.log('cc2 componentDidUpdate is called')
    //   } 
    
    //    shouldComponentUpdate(nextProps, nextState) { 
    //     console.log('cc2 shouldComponentUpdate is called')
    //     // return false
    //     return true
    //     }
  
  render() {
    console.log('cc2 render is called')
    return (
      <div>B_Classcomp 
        <br />
        {this.state.first}
        <br />
        <button onClick={ () => {
            this.setState( {
                first : 'taruvatha'
            })

        }}>click2</button>
        <br />
      </div>

      
    )
  }
}

export default B_Classcomp