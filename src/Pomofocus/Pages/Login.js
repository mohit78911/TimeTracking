import React, { useEffect, useState } from "react";
import "./Login.css";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const trimedEmail = email.trim().trimStart().trimEnd();
  const trimedPassword = password.trim().trimStart().trimEnd();
  const loginDataHandler = (e) => {
    e.preventDefault();
    if (trimedEmail.length === 0) {
      setEmailError(true);
    } else if (trimedPassword.length === 0) {
      setPasswordError(true);
    } else if (password.length < 8) {
      toast("password must be 8 characters");
    } else {
      console.log("Login Successfully");
      console.log("email : ", email);
      console.log("password : ", password);
      setEmail("");
      setPassword("");
      toast.success("Login Successfully");
    }
  };

  useEffect(() => {
    if (trimedEmail.length > 1) {
      setEmailError(false);
    }
    if (trimedPassword.length > 1) {
      setPasswordError(false);
    }
  });
  const location = useNavigate();
  return (
    <div className="mainlogincontainer">
      <div className="titlelogo" onClick={() => location("/")}>
        <div>
          <img src="https://svgsilh.com/svg/303113.svg" width={50} />
        </div>
        &nbsp;
        <div className="pomofocus">Pomofocus</div>
      </div>
      <div className="logintxt">Login</div>
      <div className="loginContainer">
        <div className="googleLogin">
          <button className="btn btn-light googlebtn">
            <img
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
              width={35}
            />
            <a
              href="https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue%26pli%3D1&ec=GAlAwAE&hl=en&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S-1308450983%3A1694428515397302&theme=glif"
              target="otherpage"
            >
              Login With Google
            </a>
          </button>
        </div>
        <hr style={{ color: "black" }}></hr>
        <div>
          <form className="formControl" onSubmit={loginDataHandler}>
            <div
              style={{
                textAlign: "left",
                marginTop: "5px",
                fontWeight: "bold",
                opacity: "0.6",
              }}
            >
              Email :{" "}
            </div>
            <input
              placeholder="example@mail.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div
              style={{ textAlign: "left", fontWeight: "bold", opacity: "0.6" }}
            >
              Password :{" "}
            </div>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div>
              {emailError ? "Invalid Email" : ""}
              {passwordError ? "Invalid Password" : ""}
            </div>
            <button className="btn btn-dark">Log in with Email</button>
          </form>
          <div>
            <button className="btn btn-link linkbtn">Forget Password</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
