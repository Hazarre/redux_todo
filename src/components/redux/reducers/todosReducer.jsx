import shortid from "shortid";


import todosAPI from "../../../utils/todosAPI";
//reducer: a pure function that receives a previous and an action, then return a new state

const SET_TODOS = "SET_TODOS"
const ADD_TODO = "ADD_TODO"
const EDIT_TODO = "EDIT_TODO"
const DELETE_TODO = "DELETE_TODO"
const CLEAR_COMPLETED = "CLEAR_COMPLETED"
const MARK_ALL_COMPLETED = "MARK_ALL_COMPLETED"

const initialState = [
  {id: 1, status: "active", color:'red', title:"Todo one"}, 
  {id: 2, status: "active", color:'red', title:"Todo two"}, 
  {id: 3, status: "active", color:'red', title:"Todo three"}, 
  {id: 4, status: "active", color:'red', title:"Todo four"}, 
  {id: 5, status: "active", color:'green', title:"Todo five"}, 
  {id: 6, status: "active", color:'green', title:"Todo six"}, 
  {id: 7, status: "active", color:'green', title:"Todo seven"}, 
  {id: 8, status: "active", color:'green', title:"Todo eight"}, 
]

export default function todosReducer(state = initialState, action) {
  const { type, payload } = action;
  console.log(
    "action", action
  )
  switch (type) {
    case SET_TODOS: 
      return payload
    case ADD_TODO:
      return [...state, payload];
    case EDIT_TODO:
        const _state = state.filter((_todo) => _todo.id !== payload.id);
        return [..._state, payload];
    case DELETE_TODO:
      return state.filter((_todo) => _todo.id !== payload);
    case CLEAR_COMPLETED: 
      return state.filter((_todo) => _todo.status !== "completed");
    case MARK_ALL_COMPLETED: 
      return state.map((td) =>  { 
        return {...td, status: "completed"}
       });

    default:
      return state;
  }
}

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo
  };
}

export function toggleTodoStatus(payload) {
  return {
    type: EDIT_TODO,
    payload: {
      ...payload,
      status: (payload.status === "completed") ? "active":"completed"
    },
  };
}

export function changeTodoColor(payload, color) {
  return {
    type: EDIT_TODO,
    payload: {
      ...payload,
      color: color,
    },
  };
}



export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: id,
  };
}


const setTodos = (todos) => ({
  type: SET_TODOS,
  payload: todos,
});


// Asynchronous thunks for API calls 

export const getTodosAsync = () => async (dispatch) => {
  const { data: todos } = await todosAPI.getTodos();
  dispatch(setTodos(todos));
};

export const addTodoAsync = (title) => async (dispatch) => {
  const { data: newTodo } = await todosAPI.addTodo(title);
  dispatch(addTodo(newTodo));
};

export const deleteTodoAsync = (id) => async (dispatch) => {
  await todosAPI.deleteTodo(id);
  dispatch(deleteTodo(id));
};

export const toggleTodoStatusAsync = (todo) => async (dispatch) => {
  await todosAPI.toggleTodoStatus(todo.id);
  dispatch(toggleTodoStatus(todo));
};

export const changeTodoColorAsync = (todo, newColor) => async (dispatch) => {
  await todosAPI.setTodoColor(todo.id, newColor);
  dispatch(changeTodoColor(todo, newColor));
};
