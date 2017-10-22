import React, { Component, PropTypes } from 'react'
import * as editorAPI from "../handler/form-editor-api"
import DialogButton from "../components/DialogButton.js"
import $ from "jquery"

class FormEditor extends Component{

   constructor(props){
     super(props);
     this.removeItem = this.removeItem.bind(this);
     this.addItem = this.addItem.bind(this);
   }

  removeItem(event){
    let index = $(event.currentTarget).data("item-index");
    editorAPI.removeItem(index);
  }

  addItem(item) {
    editorAPI.addItem(item);
  }

  render() {
    return (<div>

      <div>
        <ul>
           {this.props.items.map((item,index) => {
             return (<li key={index}>
                        <input type={item.type} />
               <button className="btn btn-default btn-sm" onClick={this.removeItem} data-item-index={index} >
                 -
               </button>
             </li>)
           })}
        </ul>
        <DialogButton addItem={this.addItem}/>
      </div>
    </div>);
  }
}

export default FormEditor
