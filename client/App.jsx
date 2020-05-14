import React from "react";
import ReactRouter from "./utility/ReactRouter.jsx";
import Placeholder from "./containers/placeholder.jsx";
import Overview from "./overview/index.jsx";

const App = () => {
  return (
    <div>
      Display App
      <ReactRouter />
      <div>
        <Overview />
      </div>
    </div>
  );
};

export default App;
