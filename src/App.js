import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
import M from "materialize-css";
import Login from "./Component/Login";
import Home from "./Pages/Home";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import UserDashboard from "./Component/UserDashboard";
import UserRegister from "./Component/UserRegister";

function App() {
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll("select");
    var instances = M.FormSelect.init(elems);
  });

  return (
    <>
    <BrowserRouter>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100vh",
          background: "rgba(0,0,0,0.04)",
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<UserDashboard />}></Route>
          <Route path="/user" element={<UserRegister />}></Route>
          <Route path="*" element={<div>Page not found</div>}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
