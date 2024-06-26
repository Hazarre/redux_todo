import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Actions() {
	const dispatch = useDispatch(); 
	function handleMarkAllComplete(){
		dispatch({type: "MARK_ALL_COMPLETED"})
	}

	function handlClearCompleted(){ 
		dispatch({type: "CLEAR_COMPLETED"})

	}

	return (
		<>
		<button onClick={handleMarkAllComplete}> Mark All Completed </button>
		<button onClick={handlClearCompleted}> Clear Completed </button>
		</>
		)
}