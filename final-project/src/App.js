import "./App.css";
import "./index.css";
import LoginContainer from "./Components/LoginContainer/LoginContainer";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./Static/NotFound";
import SessionContext from "./Contexts/SessionContext";
import PostViewer from "./Components/PostViewer/PostViewer";
import Admin from './Components/Admin/Admin';
import Container from './Components/Container/Container';

function App() {
  const [authenticated, setAuthenticated] = useState(localStorage.login != null ? JSON.parse(localStorage.login):{});
  return (
    <SessionContext.Provider value={{ authenticated, setAuthenticated }}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginContainer />} />
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/home" element={<Container />} />
          <Route path="/admin" element={<Admin />} />
          <Route path = "/posts/:id" element={ <PostViewer /> }/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </SessionContext.Provider>
  );
}

export default App;
