import { Navigate, useNavigate } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import PersonIcon from "@mui/icons-material/Person";
import useSignup from "../../Shared/useSignup";
import { useState, useEffect } from "react";

let regexEmail = /^\w+@[a-zA-Z_]+\.[a-zA-Z]{2,6}$/;
let regexPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

const SignUp_page = () => {
  let [Name, setName] = useState("");
  let [PhoneNumber, setPhoneNumber] = useState("");
  let [Email, setEmail] = useState("");
  let [Password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  let [Submit, setSubmit] = useState(false);
  const navigate = useNavigate();

  const getIsFormValid = () => {
    return (
      Email.match(regexEmail) &&
      Password.value.match(regexPassword) &&
      Name.length >= 1 &&
      PhoneNumber.length == 11
    );
  };

  let nameChanged = (e) => {
    setName(e.target.value);
    console.log(Name);
  };

  let phonenumberChanged = (e) => {
    setPhoneNumber(e.target.value);
    if (PhoneNumber.length == 11) {
      console.log(PhoneNumber + "phone-number accepted");
    } else {
      console.log(PhoneNumber + "wrong phone-number schema");
    }
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
    if (getIsFormValid()) {
      console.log(
        `name: ${Name} ==> phone-number: ${PhoneNumber} ==> email: ${Email} ==> password: ${Password.value}`
      );
      setSubmit(true);
    }
  };

  useSignup(Name, PhoneNumber, Email, Password.value, Submit);
  Submit ? navigate("/") : console.log("not yet");

  //let validated = Email && Password.value;

  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center"
      style={{
        height: "100%",
        position: "fixed",
        backgroundImage: "url('./Images/storm.jpg')",
        backgroundSize: "cover",
      }}
      // onSubmit={submitHandle}
    >
      <div
        className="card d-flex-column justify-content-center p-3 col-12 col-sm-10 col-md-6"
        style={{ border: "solid 3px green", borderRadius: "10px" }}
      >
        <div className="ms-2 mb-2" style={{ textAlign: "start" }}>
          Sign up
        </div>

        <form onSubmit={submitHandle}>
          {/* name area */}
          <div class="emailInput input-group ms-1 me-1 mt-1 mb-3">
            <span class="input-group-text d-none d-sm-inline" id="basic-addon1">
              <PersonIcon />
            </span>
            {/* <span class="input-group-text d-inline d-md-none" id="basic-addon1">
              <AlternateEmailIcon />
            </span> */}
            <input
              value={Name}
              onChange={nameChanged}
              type="text"
              class="form-control"
              placeholder="name"
              aria-label="name"
              aria-describedby="basic-addon1"
              required
            />
          </div>
          {/* phone_number area */}
          <div class="emailInput input-group ms-1 me-1 mt-1 mb-3">
            <span class="input-group-text d-none d-sm-inline" id="basic-addon1">
              <PhoneIphoneIcon />
            </span>
            {/* <span class="input-group-text d-inline d-md-none" id="basic-addon1">
              <AlternateEmailIcon />
            </span> */}
            <input
              value={PhoneNumber}
              onChange={phonenumberChanged}
              type="text"
              class="form-control"
              placeholder="0123456789"
              aria-label="phonenumber"
              aria-describedby="basic-addon1"
              required
            />
          </div>
          {/* email area */}
          <div class="emailInput input-group ms-1 me-1 mt-1 mb-3">
            <span class="input-group-text d-none d-sm-inline" id="basic-addon1">
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
              placeholder="ABC@xyz.com"
              aria-label="email"
              aria-describedby="basic-addon1"
            />
          </div>
          {/* password area */}
          <div class="passwordInput input-group ms-1 me-1 mt-1 mb-3">
            <span class="input-group-text d-none d-sm-inline" id="basic-addon1">
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
              placeholder="********"
              aria-label="password"
              aria-describedby="basic-addon1"
              required
            />
          </div>
          {Password.isTouched && Password.value.length < 8 ? (
            <p style={{ color: "red" }}>password must be of min 8 length</p>
          ) : null}

          {/* remember me + forgot password */}

          {/* login btn */}
          <div className="d-grid gap-2">
            <button className="btn btn-primary" disabled={!getIsFormValid()}>
              SignUp
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
    </div>
  );
};

export default SignUp_page;
