import store from '../store';
import { addItemAction, removeItemAction } from '../actions/form-actions';

/**
 * Get all users
 */

export function addItem(item) {
    store.dispatch(addItemAction(item));
}

export function removeItem(index){
    store.dispatch(removeItemAction(index));
}



