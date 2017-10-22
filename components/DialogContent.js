import React, { Component, PropTypes } from 'react'


class DialogContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type:"date"
    }
  }


  onTypeChange(e) {
    this.setState({
      type: e.currentTarget.value
    });
  }

  onSubmit() {
    this.props.submitHandler(this.state)
  }

  render() {
    return <div >
      <input type="radio" name="dialogType" checked={this.state.type==="date"} onChange={e=>this.onTypeChange(e)} value="date" />date<br />
      <input type="radio" name="dialogType" checked={this.state.type==="text"} onChange={(e)=>this.onTypeChange(e)} value="text" />text<br />
      <button type="submit" onClick={e=>this.onSubmit()}>submit</button>
      <button onClick = {this.props.closeDialog}>Cancel</button>
      </div>

  }
}

export default DialogContent
