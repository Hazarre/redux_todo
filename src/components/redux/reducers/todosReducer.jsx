import shortid from "shortid";

//reducer: a pure function that receives a previous and an action, then return a new state


const initialState = [
  {id: 1, status: "active", color:'red', title:"Task one"}, 
  {id: 2, status: "active", color:'red', title:"Task two"}, 
  {id: 3, status: "active", color:'red', title:"Task three"}, 
  {id: 4, status: "active", color:'red', title:"Task four"}, 
  {id: 5, status: "active", color:'green', title:"Task five"}, 
  {id: 6, status: "active", color:'green', title:"Task six"}, 
  {id: 7, status: "active", color:'green', title:"Task seven"}, 
  {id: 8, status: "active", color:'green', title:"Task eight"}, 
]

export default function todosReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    
    case "ADD_TODO":
      return [...state, payload];
    case "EDIT_TODO":
        const _state = state.filter((_todo) => _todo.id !== payload.id);
        return [..._state, payload];
    case "DELETE_TODO":
      return state.filter((_todo) => _todo.id !== payload);
    case "CLEAR_COMPLETED": 
      return state.filter((_todo) => _todo.status !== "completed");
    case "mark_all_complete": 
      return state.map((td) =>  { 
        return {...td, status: "completed"}
       });

    default:
      return state;
  }
}

export function addTodo(title) {
  return {
    type: "ADD_TODO",
    payload: {
      id: shortid.generate(),
      status: "active",
      color: "red", 
      title,
    },
  };
}

export function toggleTodoStatus(payload) {
  return {
    type: "EDIT_TODO",
    payload: {
      ...payload,
      status: (payload.status === "completed") ? "active":"completed"
    },
  };
}

export function changeTodoColor(payload, color) {
  return {
    type: "EDIT_TODO",
    payload: {
      ...payload,
      color: color,
    },
  };
}

export function deleteTodo(id) {
  return {
    type: "DELETE_TODO",
    payload: id,
  };
}
