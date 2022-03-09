import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@mui/material";
import Skills from "./../Skills";

function Index() {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    age: "",
    resume: "",
    skills: [],
    bio: "",
  });
  const handleSubmit = async () => {
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ ...state }),
      credentials: "include",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    setState({
      username: "",
      email: "",
      password: "",
      age: "",
      resume: "",
      skills: [],
      bio: "",
    });
  };
  return (
    <div>
      <div
        class="form-container"
        style={{
          width: "95%",
          margin: "auto",
          boxShadow: "0 0 20px 0 rgba(0,0,0,0.1)",
        }}
      >
        <div class="card   light-1">
          <div class="card-content white-text">
            <span class="card-title">
              Basic Register Form Using Materialize
            </span>
            <div class="row">
              <form class="col s12" id="reg-form">
                <div class="row">
                  <div class="input-field col s3">
                    <input
                      type="text"
                      class="validate"
                      value={state.username}
                      onChange={(e) =>
                        setState({ ...state, username: e.target.value })
                      }
                    />
                    <label for="first_name">User Name</label>
                  </div>
                  <div class="input-field col s3">
                    <input
                      type="text"
                      class="validate"
                      value={state.email}
                      onChange={(e) =>
                        setState({ ...state, email: e.target.value })
                      }
                    />
                    <label for="last_name">Email</label>
                  </div>
                  <div class="input-field col s3">
                    <input
                      type="text"
                      class="validate"
                      value={state.password}
                      onChange={(e) =>
                        setState({ ...state, password: e.target.value })
                      }
                    />
                    <label for="password">Password</label>
                  </div>
                  <div class="input-field col s3">
                    <input
                      type="number"
                      class="validate"
                      value={state.age}
                      onChange={(e) =>
                        setState({ ...state, age: e.target.value })
                      }
                    />
                    <label for="email">Age</label>
                  </div>
                </div>
                <div class="row"></div>
                <div class="row">
                  <div class="input-field col s3">
                    <input
                      id="last_name"
                      name="last_name"
                      type="file"
                      class="validate"
                      value={state.resume}
                      onChange={(e) =>
                        setState({ ...state, resume: e.target.value })
                      }
                    />
                    <label style={{ transform: "translate(100px)" }}>
                      Upload Resume
                    </label>
                  </div>
                  <div class="input-field col s3">
                    <input
                      type="text"
                      class="validate"
                      value={state.location}
                      onChange={(e) =>
                        setState({ ...state, location: e.target.value })
                      }
                    />
                    <label>Location</label>
                  </div>
                  <div class="input-field col s3">
                    <Autocomplete
                      multiple
                      id="tags"
                      options={["React", "Redux", "HTML", "CSS", "Javascript"]}
                      getOptionLabel={(option) => option}
                      defaultValue={state.skills}
                      onChange={(event, value) =>
                        setState({ ...state, skills: [...value] })
                      }
                      filterSelectedOptions
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          disableUnderline={false}
                          label="Add Skill"
                          placeholder="Favorites"
                        />
                      )}
                    />
                  </div>
                  <div class="input-field col s3">
                    <textarea
                      style={{
                        outline: "none",
                        border: "1px solid gray",
                        resize: "none",
                        minHeight: "80px",
                      }}
                      type="text"
                      class="validate"
                      value={state.bio}
                      onChange={(e) =>
                        setState({ ...state, bio: e.target.value })
                      }
                    />
                    <label>Bio</label>
                  </div>
                </div>
                <div class="row">
                  <button
                    class="btn teal"
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      console.log(state);
                      handleSubmit();
                    }}
                    style={{ color: "#fff", fontWeight: "500" }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
