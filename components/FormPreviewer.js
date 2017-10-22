import React, { Component, PropTypes } from 'react'


class FormPreviewer extends Component{
  constructor(props){
    super(props);
  }

  render() {
    return (<div>
      <div>
        <ul>
          {this.props.items.map((item, index) => {
            return (<li key={index}>
              <input type={item.type} />
            </li>)
          })}
        </ul>
      </div>
    </div>);
  }
}

export default FormPreviewer
