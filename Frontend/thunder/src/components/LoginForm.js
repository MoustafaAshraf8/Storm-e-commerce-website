import React from "react";

const LoginForm = () => {
  return (
    <>
      <form class="loginform" action="login.html" method="POST">
        <h1>Please Login</h1>

        <div class="inputbox">
          <div class="email">
            <label class="email-label" for="emailbox">
              E-mail:
            </label>
            <input
              class="email-input"
              type="email"
              name="emailbox"
              placeholder="ABC@gmail.com"
              id="emailbox"
              required
            />
          </div>

          <div class="password">
            <label class="pass-label" for="passwordbox">
              Password:
            </label>
            <input
              class="pass-input"
              type="password"
              name="passwordbox"
              placeholder="********"
              id="passwordbox"
              required
            />
          </div>

          <input class="btn0" type="button" name="submitbtn" value="Login" />

          <br />
          <div>
            <input class="radio0" type="radio" name="rememberme" />
            <label class="rememberme" for="rememberme">
              remember me
            </label>
          </div>

          <a href="./mainhtml.html" class="forgotpass">
            {" "}
            forgot password
          </a>

          <br />
          <div class="content">
            <p class="or">or</p>
          </div>

          <p class="socialacc">Sign up with your social media account</p>

          <div class="socialacc">
            <input
              class="facebookbtn"
              type="button"
              name="submitbtn"
              value="facebook"
              formtarget="_blank"
            />
            <input
              class="tweeterbtn"
              type="button"
              name="submitbtn"
              value="tweeter"
              formtarget="_blank"
            />
            <input
              class="gmailbtn"
              type="button"
              name="submitbtn"
              value="G-mail"
              formtarget="_blank"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
