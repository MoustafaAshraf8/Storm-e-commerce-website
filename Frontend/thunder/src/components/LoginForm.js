import React from "react";

const LoginForm = () => {
  return (
    <div className="contain" style={{ border: "solid 3px blue" }}>
      <form className="loginform" action="login.html" method="POST">
        <h1>Please Login</h1>

        <div className="inputbox">
          <div className="email">
            <label className="email-label" for="emailbox">
              E-mail:
            </label>
            <input
              className="email-input"
              type="email"
              name="emailbox"
              placeholder="ABC@gmail.com"
              id="emailbox"
              required
            />
          </div>

          <div className="password">
            <label className="pass-label" for="passwordbox">
              Password:
            </label>
            <input
              className="pass-input"
              type="password"
              name="passwordbox"
              placeholder="********"
              id="passwordbox"
              required
            />
          </div>

          <input
            className="btn0"
            type="button"
            name="submitbtn"
            value="Login"
          />

          <br />
          <div>
            <input className="radio0" type="radio" name="rememberme" />
            <label className="rememberme" for="rememberme">
              remember me
            </label>
          </div>

          <a href="#" className="forgotpass">
            {" "}
            forgot password
          </a>

          <br />
          <div className="content">
            <p className="or">or</p>
          </div>

          <p className="socialacc">Sign up with your social media account</p>

          <div className="socialacc">
            <input
              className="facebookbtn"
              type="button"
              name="submitbtn"
              value="facebook"
              formtarget="_blank"
            />
            <input
              className="tweeterbtn"
              type="button"
              name="submitbtn"
              value="tweeter"
              formtarget="_blank"
            />
            <input
              className="gmailbtn"
              type="button"
              name="submitbtn"
              value="G-mail"
              formtarget="_blank"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
