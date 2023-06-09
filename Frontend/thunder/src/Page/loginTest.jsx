import React, { useState } from "react";
import LockIcon from "@mui/icons-material/Lock";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

let regexEmail = /^\w+@[a-zA-Z_]+\.[a-zA-Z]{2,6}$/;
let regexPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

const LoginTest = () => {
  let [Email, setEmail] = useState("");
  let [Password, setPassword] = useState({
    value: "",
    isTouched: false,
  });

  const getIsFormValid = () => {
    return Email.match(regexEmail) && Password.value.match(regexPassword);
  };

  let emailChanged = (e) => {
    setEmail(e.target.value);
    if (Email.match(regexEmail)) {
      console.log(Email + "email accepted");
    } else {
      console.log(Email + "wrong email schema");
    }
  };
  let passwordChanged = (e) => {
    setPassword({ ...Password, value: e.target.value });
    if (Password.value.match(regexPassword) && Password.value.length >= 8) {
      console.log(Password.value + "  strong password");
    } else {
      console.log(Password.value + "  weak password");
    }
  };

  let submitHandle = (e) => {
    console.log("a7a");
    e.preventDefault();
    console.log(`email: ${Email} ==> password: ${Password.value}`);
  };

  //let validated = Email && Password.value;

  return (
    <form
      className="container-fluid d-flex align-items-center justify-content-center"
      style={{
        height: "100%",
        position: "fixed",
        backgroundImage: "url('./Images/storm.jpg')",
        backgroundSize: "cover",
      }}
      onSubmit={submitHandle}
    >
      <div
        className="card d-flex-column justify-content-center p-3 col-12 col-md-3"
        style={{ border: "solid 1px black", borderRadius: "10px" }}
      >
        <div className="ms-2 mb-2" style={{ textAlign: "start" }}>
          Sign in
        </div>
        {/* email area */}
        <form action="#" method="post">
          <div class="emailInput input-group ms-1 me-1 mt-1 mb-3">
            <span class="input-group-text d-none d-md-inline" id="basic-addon1">
              <AlternateEmailIcon />
            </span>
            {/* <span class="input-group-text d-inline d-md-none" id="basic-addon1">
              <AlternateEmailIcon />
            </span> */}
            <input
              value={Email}
              onChange={emailChanged}
              type="email"
              class="form-control"
              placeholder="email"
              aria-label="email"
              aria-describedby="basic-addon1"
            />
          </div>
          {/* password area */}
          <div class="passwordInput input-group ms-1 me-1 mt-1 mb-3">
            <span class="input-group-text d-none d-md-inline" id="basic-addon1">
              <LockIcon />
            </span>
            {/* <span class="input-group-text d-inline d-md-none" id="basic-addon1">
              <LockIcon />
            </span> */}
            <input
              value={Password.value}
              onChange={passwordChanged}
              onBlur={() => {
                setPassword({ ...Password, isTouched: true });
              }}
              type="password"
              class="form-control"
              placeholder="password"
              aria-label="password"
              aria-describedby="basic-addon1"
              required
            />
          </div>
          {Password.isTouched && Password.value.length < 8 ? (
            <p style={{ color: "red" }}>password must be of min 8 length</p>
          ) : null}

          {/* remember me + forgot password */}

          <div className="RememberForgot d-flex justify-content-between mb-2">
            <div class="rememberMe form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Remember me
              </label>
            </div>
            <div className="forgotPassword">
              <a className="text-reset" href="#">
                Forgot password
              </a>
            </div>
          </div>
          {/* login btn */}
          <div className="d-grid gap-2">
            <button
              className="btn btn-primary"
              type="submit"
              disabled={!getIsFormValid()}
            >
              login
            </button>
          </div>
        </form>
        {/* or */}
        <div className="orSeparator d-flex justify-content-center">
          <hr class="hr d-block col-5" />
          <span className="d-block col-2">OR</span>
          <hr className="hr d-block col-5" />
        </div>

        {/* login btn */}
        <div className="d-grid gap-2 mb-2">
          <button className="btn btn-primary" type="button">
            Facebook
          </button>
        </div>
        <div className="d-grid gap-2 mb-2">
          <button
            className="btn btn-primary"
            type="button"
            style={{ backgroundColor: "rgb(255,69,0)", border: "none" }}
          >
            G-mail
          </button>
        </div>
        <div className="d-grid gap-2 mb-2">
          <button
            className="btn btn-primary"
            type="button"
            style={{ backgroundColor: "rgb(30,144,255)", border: "none" }}
          >
            Twitter
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginTest;
