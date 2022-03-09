import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
import M from "materialize-css";
import Login from "./Component/Login";
import Home from "./Pages/Home";
import Header from "./Component/Header/Header";

function App() {
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll("select");
    var instances = M.FormSelect.init(elems);
  });

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<div>Page not found</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
