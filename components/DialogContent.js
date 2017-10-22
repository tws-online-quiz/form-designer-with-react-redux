import React, { Component, PropTypes } from 'react'

class DialogContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type:"date"
    }
    this.onTypeChange = this.onTypeChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onTypeChange(e) {
    this.setState({
      type: e.currentTarget.value
    });
  }

  onSubmit() {
    this.props.submitHandler(this.state);
  }

  render() {
    return <div >
      <input type="radio" name="dialogType" checked={this.state.type==="date"} onChange={e=>this.onTypeChange(e)} value="date" />date<br />
      <input type="radio" name="dialogType" checked={this.state.type==="text"} onChange={e=>this.onTypeChange(e)} value="text" />text<br />
      <button type="submit" onClick={this.onSubmit}>Submit</button>
      <button onClick = {this.props.closeDialog}>Cancel</button>
      </div>
  }
}

export default DialogContent;
