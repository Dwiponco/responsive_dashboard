import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import { useStateContext } from "./contexts/ContextProvider";
import Login from "./pages/Auth/Login";
import FullLayout from "./pages/FullLayout/FullLayout";

const App = () => {
  const { currentMode } = useStateContext();

  const user = localStorage.getItem("auth");
  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <FullLayout />
        {/* <Routes>
          <Route path="/" element={<Login />} />
        </Routes> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
