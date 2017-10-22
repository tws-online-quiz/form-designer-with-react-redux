import * as types from '../actions/action-types';
import { combineReducers } from 'redux';
import _ from 'lodash';


const initializedFormState ={
  status: "edit"
}

const initialItemsState  = {
  items: []
}

function itemsReducer(state = initialItemsState, action) {
  var type = action.type;
    if(type == types.ADD_ITEM) {
      let newItems = _.concat(state.items, action.item);

      return _.assign({}, state, {items: newItems});
    }
  
    if(type == types.REMOVE_ITEM) {
      let newItems = _.filter(state.items,(x, index)=> {return index != action.index});
      return _.assign({}, state, {items: newItems});
    }
    return state
}

function formReducer(state = initializedFormState, action) {
  switch (action.type) {
    case types.SHOW_EDITOR:
      return _.assign({}, state, {status:"edit"});
    case types.SHOW_PREVIEW:
      return _.assign({}, state, {status:"preview"});
    default:
      return state;
  }
}

var reducers = combineReducers({
  itemsState: itemsReducer,
  formState: formReducer
});

export default reducers;