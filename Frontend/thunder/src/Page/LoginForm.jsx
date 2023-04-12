import React from "react";

const LoginForm = () => {
  return (
    <section classNameName="" style={{ height: "100%", position: "fixed" }}>
      <div classNameName="container-fluid">
        <div classNameName="row">
          <div classNameName="col-sm-6 text-black">
            <div classNameName="px-5 ms-xl-4">
              <i
                classNameName="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"
                style={{ color: "#709085" }}
              ></i>
              {/* <span classNameName="h1 fw-bold mb-0">Logo</span> */}
              <img
                src="./Images/logo.jpg"
                style={{ width: "200px", height: "200px" }}
                alt=""
              />
            </div>

            <div classNameName="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
              <form style={{ width: "23rem" }}>
                <h3
                  classNameName="fw-normal mb-3 pb-3"
                  style={{ letterSpacing: "1px" }}
                >
                  Log in
                </h3>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    @
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>

                <div classNameName="form-outline mb-4">
                  <input
                    type="password"
                    id="form2Example28"
                    classNameName="form-control form-control-lg"
                  />
                  <label classNameName="form-label" for="form2Example28">
                    Password
                  </label>
                </div>

                <div classNameName="pt-1 mb-4">
                  <button
                    classNameName="btn btn-info btn-lg btn-block"
                    type="button"
                  >
                    Login
                  </button>
                </div>

                <p classNameName="small mb-5 pb-lg-2">
                  <a classNameName="text-muted" href="#!">
                    Forgot password?
                  </a>
                </p>
                <p>
                  Don't have an account?{" "}
                  <a href="#!" classNameName="link-info">
                    Register here
                  </a>
                </p>
              </form>
            </div>
          </div>
          <div classNameName="col-sm-6 px-0 d-none d-sm-block">
            <img
              src="https://images.wallpaperscraft.com/image/single/lighthouse_waves_storm_149202_1920x1200.jpg"
              alt="Login image"
              classNameName="w-100 vh-100"
              style={{ objectFit: "cover", objectPosition: "left" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
