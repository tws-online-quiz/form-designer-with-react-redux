import store from '../store';
import { addItemAction, removeItemAction } from '../actions/form-actions';

export function addItem(item) {
    store.dispatch(addItemAction(item));
}

export function removeItem(index){
    store.dispatch(removeItemAction(index));
}
