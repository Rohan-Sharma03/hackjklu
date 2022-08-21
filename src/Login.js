import React from "react";
import "./login.css";
import SignUp from "./SignUp.js";
import Home from "./Home.js";
import { Redirect } from "react-router";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
// import SignUp from "./SignUp.js";

export default function Login() {
  let history = useNavigate();
  const [loginDetails, setLoginDetials] = React.useState({
    email: "",
    password: "",
  });

  function handelChange(event) {
    setLoginDetials((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
    // console.log(loginDetails.email);
    // console.log(loginDetails.password);
  }
  async function login(e) {
    // e.preventDefault();

    console.log(loginDetails.email);
    console.log(loginDetails.password);
    let email = loginDetails.email;
    let password = loginDetails.password;
    let items = { email, password };
    if (email.length != 0 || password.length != 0) {
      localStorage.setItem("email", email.toString());
      localStorage.setItem("logged", true);

      let result = await fetch(
        "https://unshift1.herokuapp.com/api/user/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(items),
        }
      );
      // result = result.json();
      // localStorage.setItem("user-info",JSON.stringify(result));
      let code = result.status;
      if (code === 200) {
        console.log(result.status);
        history("/Home");
      } else if (code == 400) {
        alert("Worng Credential");
      } else if (code == 404) {
        alert("User not exist");
      } else {
        alert(result.statusText);
      }
    } else {
      alert("Fill the Feilds");
    }
  }
  return (
    <div className="div-flex-login">
      <div className="form">
        <h2>Login </h2>
        <label htmlFor="emailId">Email: </label>
        <br />
        <input
          className="FeildValue"
          type="email"
          id="emailId"
          required
          placeholder="Enter Your Email "
          onChange={handelChange}
          name="email"
          value={loginDetails.email}
        ></input>
        <br />
        <label htmlFor="passwordF">Password: </label>
        <br />
        <input
          type="password"
          id="passwordF"
          required
          placeholder="Enter your security key "
          onChange={handelChange}
          name="password"
          value={loginDetails.password}
        ></input>
        <br />
        <button className="Btn" type="submit" onClick={login}>
          Login
        </button>

        {/* <Link href="/temp">
          <a>Click me to </a>
        </Link> */}
        <p>
          No Account ? <Link to="/SignUp">Click me to get one!</Link>
        </p>
      </div>
    </div>
  );
}
