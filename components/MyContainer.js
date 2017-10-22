import React, { Component, PropTypes } from 'react'
import * as containerAPI from "../handler/container-api"
import FormEditor from "../components/FormEditor.js"
import FormPreviewer from "../components/FormPreviewer.js"
import $ from "jquery"

class MyContainer extends Component{
  constructor(props){
    super(props);

  }

  renderEditor(){
    containerAPI.showEditor()

  }

  renderPreview(){
    containerAPI.showPreview()

  }

  render(){
    if (this.props.status === 'edit') {
      return (
        <div>
          <button className="btn btn-default btn-sm" onClick={this.renderPreview}>
            preview
          </button>
          <FormEditor items={this.props.items} />
        </div>
      );
    }
    return (
      <div>
        <button className="btn btn-default btn-sm" onClick={this.renderEditor}>
          edit
        </button>
        <FormPreviewer items={this.props.items}/>
      </div>);
  }

}

export default MyContainer
