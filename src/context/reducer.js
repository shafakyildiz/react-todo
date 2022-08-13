export const initialState = {
  todos: [
    {
      id: 0,
      content: "My first Todo",
    },
  ],
};

const reducer = (state, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
