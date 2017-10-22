import React, { Component, PropTypes } from 'react'
import ReactDOM from "react-dom"
import * as editorAPI from "../handler/form-editor-api"
import DialogContent from "../components/DialogContent"
import $ from "jquery"
import 'jquery-ui'

class DialogButton extends Component{

  constructor(props) {
    super(props);
  }

  openDialog(e){
    e.preventDefault();

    var $dialog = $('<div>').dialog({
      title: 'Choose Type',
      width: 400,
      closeText: '',
      close: function(e){
        ReactDOM.unmountComponentAtNode(this);
        $( this ).remove();
      }
    });

    var closeDialog = function(e){
      e.preventDefault();
      $dialog.dialog('close');
    }

    ReactDOM.render(<DialogContent closeDialog={closeDialog} submitHandler={this.props.addItem}/>, $dialog[0])
  }

  render() {
    var self=this;
    return (<div>
      <button className="btn btn-default btn-sm" onClick={this.openDialog.bind(this)}>
        +
      </button>
    </div>);
  }
}

export default DialogButton;
