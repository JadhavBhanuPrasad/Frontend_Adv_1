import React, { Component } from 'react'
import E_ErrorComponent from './E_ErrorComponent'



export class D_Child extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       cnt : 0,
       
    }
}

  componentDidMount() { 
    console.log('Dcc componentDidMount is called')
}

  componentWillUnmount() {
    console.log('Dcc componentWillUnmount is called')
}
   static  getDerivedStatefromError(error) {
    console.log('getDerivedStaeFormError is called')
    return {hasError:true}
}
   
   componentDidCatch(error,info){
    console.log('componentDidCatch is called')
    console.log('error occured',error)
}



  render() {
    return (
      <div>


        count :  {this.state.cnt}
        <br />
        <button  onClick={ () => {
            this.setState( 
                {
                cnt : this.state.cnt + 1
                
                }
            )
        }}>inc</button>

        <button  onClick={ () => {
            this.setState( 
                {
                    cnt : this.state.cnt-1
                }
            )
        }}>dec</button>


        {/* <E_ErrorComponent name="john"></E_ErrorComponent> */}
        <E_ErrorComponent name="Unknown"></E_ErrorComponent>
      </div>
    )
  }
}

export default D_Child