import types from "./types";

export function reducer(state, action) {
  const newState = [...state];

  switch (action.type) {
    case types.taskUpdated:
      const i = state.findIndex(({ id }) => id === action.payload.id)
      newState[i] = { ...newState[i], ...action.payload }
      return newState;
    case types.taskDeleted:
      return newState.filter(({ id }) => id !== action.payload.id);
    default:
      return state;
  }
}

export default reducer;
