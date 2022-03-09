import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
// import "./styles.css";
function Login() {
  const [state, setState] = useState({
    email: "",
    password: "",
    userType: "student",
  });
  const history = useNavigate();
  return (
    <>
      <div className="row" style={{ width: "50%", margin: "auto" }}>
        <div className="col s12 ">
          <div className="card">
            <div className="card-action teal lighten-1 white-text">
              <h3>Login Form</h3>
            </div>

            <div className="card-content">
              <div className="form-field">
                <label for="username">Username</label>
                <input
                  type="text"
                  id="username"
                  value={state.email}
                  onChange={(e) =>
                    setState({ ...state, email: e.target.value })
                  }
                />
              </div>
              <br />

              <div className="form-field">
                <label for="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={state.password}
                  onChange={(e) =>
                    setState({ ...state, password: e.target.value })
                  }
                />
              </div>
              <br />
              <br />
              <div className="form-field">
                <select
                  name=""
                  id=""
                  onChange={(e) =>
                    setState({ ...state, userType: e.target.value })
                  }
                  // value={state.userType}
                >
                  <option
                    selected={state.userType === "student"}
                    value="student"
                  >
                    Student
                  </option>
                  <option
                    selected={state.userType === "recruiter"}
                    value="recruiter"
                  >
                    Recruiter
                  </option>
                </select>
              </div>
              <br />

              <div className="form-field">
                <button
                  className="btn-large waves-effect waves-dark"
                  style={{ width: "100%" }}
                  onClick={() => {
                    console.log(state);
                    history("/dashboard");
                  }}
                >
                  Login
                </button>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
