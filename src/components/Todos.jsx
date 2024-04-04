import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  toggleTodoStatus,
  changeTodoColor,
} from "./redux/reducers/todosReducer";


import { colorsList } from "./ColorFilter";


function TodoItem({ todo }) {

  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(deleteTodo(id));
  }

  function handleToggleStatus() {
    dispatch(toggleTodoStatus(todo));
  }

  function handleSelectColor(color) {
    dispatch(changeTodoColor(todo, color));
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

export default function Todos() {
  const todos = useSelector((state) => state.todos);
  const remainingCount = todos.filter((todos) => todos.status === "active").length;
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const colorsFilter = useSelector((state) => state.colorsFilter);
  const statusFilter = useSelector((state) => state.statusFilter);

  function handleAddTodo() {
    dispatch(addTodo(title));
  }

  return (
    <div>
      <h2>Todos</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />

      <button onClick={handleAddTodo}>Add Todo</button>
      <p> Remaining Count: {remainingCount}</p>
      <div className="outer">
        {todos
          .sort((a,b)=>(a.id -b.id))
          .filter((todo) => {
            if (colorsFilter.length === 0) return true;
            return  colorsFilter.includes(todo.color);
          })
          .filter((todo) => {
            if (statusFilter === "all") return true;
            return statusFilter === todo.status;
          })
          .map((todo) => {
          return <TodoItem todo={todo} key={todo.id}/>; })
        }
      </div>


    </div>
  );
}


