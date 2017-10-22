import * as types from "../actions/action-types"

export function showEditorAction() {
  return {
    type: types.SHOW_EDITOR
  }
}

export function showPreviewerAction() {
  return {
    type: types.SHOW_PREVIEWER
  }
}
