import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { useStateContext } from "./contexts/ContextProvider";
import Login from "./pages/Auth/Login";
import NotFoundPage from "./pages/Dummy/NotFoundPage";
import FullLayout from "./pages/FullLayout/FullLayout";

const App = () => {
  const { currentMode } = useStateContext();

  const user = localStorage.getItem("auth");
  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        {user === "true" ? (
          <FullLayout />
        ) : (
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
};

export default App;
