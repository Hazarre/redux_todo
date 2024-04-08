import React, { useState, useEffect} from "react";

import { useDispatch, useSelector } from "react-redux";
import { addTodo, addTodoAsync } from "./redux/reducers/todosReducer";
import { getTodosAsync } from "./redux/reducers/todosReducer";

import TodoItem from "./TodoItem";

export default function Todos() {

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const colorsFilter = useSelector((state) => state.colorsFilter);
  const statusFilter = useSelector((state) => state.statusFilter);

  useEffect(() => {
    dispatch(getTodosAsync());
  }, []);
  
  const remainingCount = todos.filter(
    (todos) => todos.status === "active"
  ).length;
  const [title, setTitle] = useState("");
  
  const filteredTodos = todos
    .filter((todo) => {
      if (colorsFilter.length === 0) return true;
      return colorsFilter.includes(todo.color);
    })
    .filter((todo) => {
      if (statusFilter === "all") return true;
      return statusFilter === todo.status;
    });



  return (
    <div>
      <h2> Remaining Todos {remainingCount}</h2>

      <ul className="outer">
        {filteredTodos
           .sort((a, b) => a.id - b.id)
           .map((todo) => {
          return <TodoItem todo={todo} key={todo.id} />;
        })}
      </ul>

      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={() => dispatch(addTodoAsync(title)) }>Add Todo</button>
      

    
    </div>
  );
}
