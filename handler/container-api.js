import store from '../store';
import { showEditorAction, showPreviewerAction } from '../actions/container-action';

export function showEditor() {
  store.dispatch(showEditorAction());
}

export function showPreviewer() {
  store.dispatch(showPreviewerAction());
}
