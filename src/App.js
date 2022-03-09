import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
import Login from "./Component/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="*" element={<div>Page not found</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;