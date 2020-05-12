import React from "react";
import ReactRouter from "./utility/ReactRouter.jsx";
import Placeholder from "./containers/placeholder.js";

const App = () => {
  return (
    <div>
      Display App
      <Placeholder />
      <ReactRouter />
    </div>
  );
};

export default App;
