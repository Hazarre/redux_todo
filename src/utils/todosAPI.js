
import shortid from "shortid";

const todos = [
  {
    id: shortid.generate(),
    title: "Learn about coding",
    status: "active",
    color: "",
  },
  {
    id: shortid.generate(),
    title: "Cook & clean",
    status: "active",
    color: "",
  },
  {
    id: shortid.generate(),
    title: "Eat",
    status: "active",
    color: "",
  },
  {
    id: shortid.generate(),
    title: "Sleep",
    status: "active",
    color: "",
  },
];

const getTodos = async () => {
  return {
    success: true,
    msg: "Got todos",
    data: structuredClone(todos),
  };
};

const addTodo = async (title) => {
  const newTodo = {
    id: shortid.generate(),
    title,
    status: "active",
    color: "",
  };
  todos.push(newTodo);
  return {
    success: true,
    msg: "New Todo Created",
    data: newTodo,
  };
};

const deleteTodo = async (id) => {
  const index = todos.findIndex((todo) => todo.id === id);
  todos.splice(index, 1);
  return {
    success: true,
    msg: "todo is deleted",
    data: id,
  };
};

const toggleTodoStatus = async (id) => {
  const index = todos.findIndex((todo) => todo.id === id);
  todos[index].status = todos[index].status === "active" ? "completed" : "active";

  return {
    success: true,
    msg: "todo is toggled",
    data: todos[index],
  };
};

const setTodoColor = async (id, newColor) => {
  const todo = todos.find((todo) => todo.id === id);
  todo.color = newColor;
  return {
    success: true,
    msg: "todo color set to" + newColor,
    data: todo,
  };
};

export default {
  getTodos,
  deleteTodo,
  addTodo,
  toggleTodoStatus,
  setTodoColor
};
