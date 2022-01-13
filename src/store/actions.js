import types from "./actionTypes";

export const actions = {
  taskComlited: (id) => {
    return { type: types.taskUpdated, payload: { id, complited: true } };
  },
  titleChanged: (id) => {
    return { type: types.taskUpdated, payload: { id, title: `New title for task ${id}` } };
  },
  taskDeleted: (id) => {
    return { type: types.taskDeleted, payload: { id } };
  },
}

export default actions;
