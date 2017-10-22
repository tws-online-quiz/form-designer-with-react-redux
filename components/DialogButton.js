import React, { Component, PropTypes } from 'react'
import ReactDOM from "react-dom"
import * as editorAPI from "../handler/form-editor-api"
import DialogContent from "../components/DialogContent"
import $ from "jquery"
import 'jquery-ui'

class DialogButton extends Component{
  constructor(props) {
    super(props);
    this.openDialog = this.openDialog.bind(this);
  }

  openDialog(e) {
    e.preventDefault();

    let $dialog = $('<div>').dialog({
      title: 'Choose Type',
      width: 400,
      closeText: '',
      close: function(e){
        ReactDOM.unmountComponentAtNode(this);
        $( this ).remove();
      }
    });

    let closeDialog = function(e){
      e.preventDefault();
      $dialog.dialog('close');
    }

    ReactDOM.render(<DialogContent closeDialog={closeDialog} submitHandler={this.props.addItem}/>, $dialog[0])
  }

  render() {
    return (<div>
      <button className="btn btn-default btn-sm" onClick={this.openDialog}>
        +
      </button>
    </div>);
  }
}

export default DialogButton;
