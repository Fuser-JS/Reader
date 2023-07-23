import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./layout/Home";
import Login from "./layout/Login";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
