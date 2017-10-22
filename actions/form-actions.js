import * as types from "../actions/action-types"

export function addItemAction(item) {
    return {
        type: types.ADD_ITEM,
        item
    }
}


export function removeItemAction(index) {
    return {
        type:types.REMOVE_ITEM,
        index
    }
}

