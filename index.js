import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import MyContainer from './components/MyContainer.js'
import store from './store';

const rootEl = document.getElementById('root');

function render() {
  ReactDOM.render(
      <MyContainer
          items={store.getState().itemsState.items}
          status={store.getState().formState.status}
       />,
    rootEl  
  )
}

render();
store.subscribe(render);
