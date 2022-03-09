import { TextField } from "@material-ui/core";
import { Autocomplete } from "@mui/material";
import React from "react";
import Skills from "./../Skills";

function index() {
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
                    <input type="text" class="validate" />
                    <label for="username">User Name</label>
                  </div>
                  <div class="input-field col s3">
                    <input type="email" class="validate" />
                    <label for="email">Email</label>
                  </div>
                  <div class="input-field col s3">
                    <input type="password" class="validate" />
                    <label for="password">Password</label>
                  </div>
                  <div class="input-field col s3">
                    <input type="number" class="validate" />
                    <label for="age">Age</label>
                  </div>
                </div>
                <div class="row"></div>
                <div class="row">
                  <div class="input-field col s3">
                    <input
                      id="resume"
                      name="resume"
                      type="file"
                      class="validate"
                    />
                    <label style={{ transform: "translate(100px)" }}>
                      Upload Resume
                    </label>
                  </div>
                  <div class="input-field col s3">
                    <input type="text" class="validate" />
                    <label>Location</label>
                  </div>
                  <div class="input-field col s3">
                    <Autocomplete
                      multiple
                      id="tags-outlined"
                      options={["React", "Redux", "HTML", "CSS", "Javascript"]}
                      getOptionLabel={(option) => option}
                      defaultValue={[]}
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
                    <input type="text" class="validate" />
                    <label>Location</label>
                  </div>
                </div>
                <div class="row">
                  <button class="btn teal" type="submit">
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

export default index;
