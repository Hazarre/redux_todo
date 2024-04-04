import { combineReducers } from "redux";
import countReducer from "./countReducer";
import themeReducer from "./themeReducer";
import todosReducer from "./todosReducer";
import { statusFilterReducer, colorsFilterReducer } from "./filtersReducer";


const rootReducer = combineReducers({
  count: countReducer,
  theme: themeReducer,
  todos: todosReducer,
  statusFilter: statusFilterReducer,
  colorsFilter: colorsFilterReducer,
});

export default rootReducer;
