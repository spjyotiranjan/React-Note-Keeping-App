import React, { Component } from 'react'
import "./Editor.css"

export default class Editor extends Component {
  constructor() {
    super()
  
    this.state = {
       input: "",
    }
  }
  inputUpdate =(e)=>{
    let value = e.target.value
    this.setState({
      input: value,
    })
  }

  render() {
    return (
    <div className="container">
        <div className="input">
            <h3>Input</h3>
            <textarea onChange={this.inputUpdate} id='input' className="input-text"/>
        </div>
        <div className="output">
            <h3>Pro Note</h3>
            <div id='output' className="output-text">{this.state.input}</div>
        </div>                
    </div>
    )
  }
}
