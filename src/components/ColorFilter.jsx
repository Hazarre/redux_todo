import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


export const colorsList = ["green", "blue", "orange", "purple", "red"];


export function ColorFilter () {

  const colorsFilter = useSelector((state) => state.colorsFilter);
  const dispatch = useDispatch();



  function handleColorFilter(e){
    if(e.target.checked) {
      dispatch({type: "add_color", color: e.target.value})
    }
    else {
      dispatch({type: "remove_color", color: e.target.value})
    }
  }
  
  return (
    <div className=".outer">
    <h1> Selected Colors: {colorsFilter.join(" ")} </h1>

    {colorsList.map((color) => (
      <li key={color + "-li"}>
        <input 
          type="checkbox" 
          key={color} 
          value={color}
          id={color}
          checked={ colorsFilter.includes(color) }
          onChange={(e)=> handleColorFilter(e)}>
        </input>
        <label htmlFor={color} key={color + "-label"}> {color} </label>
      </li>
    ))}
  </div>
  )
}  