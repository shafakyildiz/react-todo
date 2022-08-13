import React from "react";
import { MdClose } from "react-icons/md";
import { useTodoLayerValue } from "../context/TodoContext";

const Todo = ({ todo }) => {
  const [{}, dispatch] = useTodoLayerValue();
  const removeTodo = (todoId) => {
    dispatch({ type: "REMOVE_TODO", payload: todoId });
  };
  return (
    <div className="todo-row">
      <div>{todo.content}</div>
      <div className="todo-icons">
        <MdClose className="todo-icon" onClick={() => removeTodo(todo.id)} />
      </div>
    </div>
  );
};

export default Todo;
