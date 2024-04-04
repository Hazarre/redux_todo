import "./App.css";

import React from "react";


import Todos from "./components/Todos"
import { StatusFilter} from "./components/StatusFilter";
import { ColorFilter } from "./components/ColorFilter";
import Actions from "./components/Actions";

function App() {
  return (
    <div className="App">
      <Todos />
      <Actions/>
      <StatusFilter/>
      <ColorFilter/>
    </div>
  );
}



export default App;
