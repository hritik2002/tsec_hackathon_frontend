import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
import M from "materialize-css";
import Login from "./Component/Login";
import Home from "./Pages/Home";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import UserDashboard from "./Component/UserDashboard";
import CompanyDashboard from "./Component/CompanyDashboard";

function App() {
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll("select");
    var instances = M.FormSelect.init(elems);
  });

  return (
    <>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<UserDashboard />}></Route>
          <Route path='/dummy' element={<CompanyDashboard/>}></Route>
          <Route path="*" element={<div>Page not found</div>}></Route>
        </Routes>
      <Footer/>      
    </BrowserRouter>
    </>
  );
}

export default App;
