import React from "react";

function TodoList(props) {
  return (
    <div>
      <ul>
        {props.map((item) => {
          <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default TodoList;
