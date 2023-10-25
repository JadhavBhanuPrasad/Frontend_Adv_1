import React, { Component } from 'react'
import B_Classcomp from './B_Classcomp'

export class A_Classcomp extends Component {

    //with strict mode we get twice this console.logs
  constructor(props) {
    super(props)
    console.log(' cc1 constructor is called ')
    this.state = {
       first : 'before'
    }
  }

 static getDerivedStateFromProps(props, state) {
    console.log( ' cc1 getDerivedStateFromProps is called')
    return null;
 }
  
  componentDidMount() {
    console.log('cc1 componentDidMount is called')
    //here do api calls because it is only a called once
  }

  componentDidUpdate(prevProps, prevState) { 
    console.log('cc1 componentDidUpdate is called')
  } 

   shouldComponentUpdate(nextProps, nextState) { 
    console.log('cc1 shouldComponentUpdate is called')
    return false //render wont work and 'before' also update to 'after' and didupdate also wont work and dont have effect on child
    // return true //render is called and comp. did update is also called
    }
  changee() {
    this.setState( {
        first : 'after'
    })
  }
  render() {
    console.log('cc1 render is called')


    return (
      <div>
        A_Classcomp
        <br />
        {this.state.first}
        <button onClick={ () => this.changee()}>click</button>
        <br />
        <B_Classcomp></B_Classcomp>
      </div>
    )
  }
}

export default A_Classcomp