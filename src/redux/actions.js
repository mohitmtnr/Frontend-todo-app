// action types
export const ADD_TASK = "ADD_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const MARK_COMPLETED = "MARK_COMPLETED";
export const EDIT_TASK = "EDIT_TASK";

// action creators
export function addTask(task) {
  return { type: ADD_TASK, payload: task };
}
export function removeTask(id) {
  return { type: REMOVE_TASK, payload: id };
}
export function markTaskAsCompleted(id) {
  return { type: MARK_COMPLETED, payload: id };
}
export function editTask(id, newTask) {
  return { type: EDIT_TASK, payload: { id, newTask } };
}
