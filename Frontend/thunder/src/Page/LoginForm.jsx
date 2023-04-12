import React from "react";

const LoginForm = () => {
  return (
    <div
      className="vh-100 d-flex justify-content-center align-items-center"
      style={{
        border: "solid 3px yellow",
        backgroundImage:
          "URL('https://images.unsplash.com/photo-1633174076338-ac0669cf0d40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80')",
      }}
    >
      <form
        className=" col-3 container p-0 d-flex-column justify-content-center"
        action="#"
        style={{ border: "solid 3px brown" }}
      >
        <div className="emailInput input-group mb-2">
          <div className="input-group-prepend col-2 d-none d-sm-block">
            <span
              className="input-group-text w-100 d-none d-sm-block"
              id="addon-wrapping"
            >
              Email
            </span>
          </div>
          <div className="input-group-prepend col-2 d-block d-sm-none">
            <span
              className="input-group-text w-100 d-none d-sm-block"
              id="addon-wrapping"
            >
              @
            </span>
          </div>
          <input
            type="email"
            className="form-control"
            placeholder="abc@outlook.com"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
        </div>

        <div className="passwordInput input-group mb-2">
          <div className="input-group-prepend col-2">
            <span className="input-group-text" id="addon-wrapping">
              Password
            </span>
          </div>
          <input
            type="password"
            className="form-control"
            placeholder="*********************"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
