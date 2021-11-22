import "./App.css";
import "./index.css";
import LoginContainer from "./Components/LoginContainer/LoginContainer";
import { useState, useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./Static/NotFound";
import Empty from "./Static/Empty";
import SessionContext from "./Contexts/SessionContext";

function App() {
  const [authenticated, setAuthenticated] = useState(localStorage.login != null ? JSON.parse(localStorage.login):{});
  return (
    <SessionContext.Provider value={{ authenticated, setAuthenticated }}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginContainer />} />
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/home" element={<Empty />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </SessionContext.Provider>
  );
}

export default App;
