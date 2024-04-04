

import { colorsList } from "../../ColorFilter";

const selectedColors = colorsList; 

export function statusFilterReducer(state = "all", action) {

  switch (action.type) {
    case "all": {
      return "all";
    }
    case "active": {
      return "active";
    }
    case "completed": {
      return "completed";
    }
    default:
      return state;
  }
}




export function colorsFilterReducer(state = [], action) {

  const { type, color } = action;

  switch (type) {  
    case "add_color":
      return [...state, color];
    case "remove_color":
      return state.filter((_color) => _color !== color);
    default: 
      return state;
  }

}



