import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const statusList = ["all", "active", "completed"]



export function StatusFilter () {

  const statusFilter = useSelector((state) => state.statusFilter);
  const dispatch = useDispatch();


  function selectStatusFilter(type) {
    dispatch({ type: type});
  }  
  
  function handleStatusFilter(e){
    selectStatusFilter(e.target.value)
  }
  
  return (
    <div className=".outer">
    <h1> Selected Status: {statusFilter} </h1>
    {statusList.map((status) => (
      <li key={status + "-li"}>

        <input type="radio" key={status} id={status} name={status} value={status} checked={statusFilter===status} onChange={(e)=> handleStatusFilter(e)}>
        </input>
        <label htmlFor={status} key={status + "-label"}> {status} </label>
      </li>
    ))}

  </div>
  )
}  