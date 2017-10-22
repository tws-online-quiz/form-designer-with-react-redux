import React, { Component, PropTypes } from 'react'
import * as containerAPI from "../handler/container-api"
import FormEditor from "./FormEditor.js"
import FormPreviewer from "./FormPreviewer.js"

class MyContainer extends Component {
  constructor(props) {
    super(props);
    this.renderEditor = this.renderEditor.bind(this);
    this.renderPreviewer = this.renderPreviewer.bind(this);
  }

  renderEditor() {
    containerAPI.showEditor();
  }

  renderPreviewer() {
    containerAPI.showPreviewer();
  }

  render() {
    if (this.props.status === 'edit') {
      return (
        <div>
          <button className="btn btn-default btn-sm" onClick={this.renderPreviewer}>
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

export default MyContainer;
