import React, { Component } from 'react'
import axios from 'axios'

export default class H_CC_UserApi extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       users:[]
    }
  }

  componentDidMount() { 
    axios.get('https://jsonplaceholder.typicode.com/users')
                    .then( res=> {
                        console.log(res.data)
                        this.setState( {
                          users:res.data
                        })      
                    })
                    .catch( e=> {
                        console.log(e)
                    })
                   
   }  
  render() {
    return (
      <ul>
          {this.state.users.map( x => <li>{x.id}</li>)}
      </ul>
    )
  }
}
