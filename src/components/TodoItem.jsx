import React from "react";
import { useDispatch} from "react-redux";
import {
	deleteTodoAsync,
	toggleTodoStatusAsync,
	changeTodoColorAsync,
} from "./redux/reducers/todosReducer";


import { colorsList } from "./ColorFilter";

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(deleteTodoAsync(id));
  }

  function handleToggleStatus() {
    dispatch(toggleTodoStatusAsync(todo));
  }

  function handleSelectColor(color) {
    dispatch(changeTodoColorAsync(todo, color));
  }

  return (
    <div className="rows" key={todo.id} style={{ display: "flex" }}>
      <div className="columns">
        <input
          id={todo.id}
          type="checkbox"
          checked={todo.status === "completed" ? true : false}
          onChange={() => handleToggleStatus(todo.id)}
        />
      </div>

      <div className="columns">{todo.title + "  "} </div>

      <div className="columns">
        <select
        id={"colors" + todo.id}
          name="colors"
          value={todo.color}
          size="1"
          onChange={(e) => {
            handleSelectColor(e.target.value);
          }}
        >
          {colorsList
             .map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>

      <div className="columns">
        <button onClick={() => handleDelete(todo.id)}>Delete</button>
      </div>
    </div>
  );
}
