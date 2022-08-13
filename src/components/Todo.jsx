import React, { useState } from "react";
import clsx from "clsx";
import { MdClose, MdEdit, MdCheck } from "react-icons/md";
import { useTodoLayerValue } from "../context/TodoContext";
import "../App.css";

const Todo = ({ todo }) => {
  const [{}, dispatch] = useTodoLayerValue();
  const [editable, setEditable] = useState(false);
  const [content, setContent] = useState(todo.content);

  const removeTodo = (todoId) => {
    dispatch({ type: "REMOVE_TODO", payload: todoId });
  };

  const completeTodo = (todoId) => {
    dispatch({ type: "COMPLETE_TODO", payload: todoId });
  };

  const updateTodo = (todoId, newValue) => {
    dispatch({ type: "UPDATE_TODO", payload: todoId, newValue });
  };

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      updateTodo({
        todoId: todo.id,
        newValue: content,
      });
      setEditable(false);
    }
  };

  const todoStyle = clsx({
    ["todo-row"]: true,
    ["completed"]: todo.isCompleted,
  });

  return (
    <div className={todoStyle}>
      <div onClick={() => (editable ? "" : completeTodo(todo.id))}>
        {editable ? (
          <input
            type="text"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            className="todo-input-edit"
            onKeyDown={handleKeypress}
          />
        ) : (
          todo.content
        )}
      </div>
      <div className="todo-icons"></div>
      {editable ? (
        <MdCheck
          className="todo-icon"
          onClick={() => {
            updateTodo({
              todoId: todo.id,
              newValue: content,
            });
            setContent("");
            setEditable(false);
          }}
        />
      ) : (
        <MdEdit className="todo-icon" onClick={() => setEditable(true)} />
      )}
      <MdClose className="todo-icon" onClick={() => removeTodo(todo.id)} />
    </div>
  );
};

export default Todo;
