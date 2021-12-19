import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Test } from "./components";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Test />} />
    </Routes>
  );
}

export default App;
