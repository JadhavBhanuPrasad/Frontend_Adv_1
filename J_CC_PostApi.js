import React, { Component } from 'react'
import axios from 'axios'
class J_CC_PostApi extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name: '',
        }
    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value,[e.target.id]:e.target.value })
    }

    submitHandler = e => {
        axios
            .post('http://localhost:3000/courses', this.state)
            .then(response => {
                console.log(response)
            })
            // .catch(error => {
            //  console.log(error)
           // })
    }
    render() {
        const { id,name} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input
                            type="text"
                            name="id"
                            value={id}
                            onChange={ (e) => this.setState( {
                                id:e.target.value
                            })}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={name}
                           onChange={ (e) => {
                            this.setState( {
                                name:e.target.value
                            })
                           }}
                       />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default J_CC_PostApi

 
