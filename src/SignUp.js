import React from "react";

export default function SignUp() {
  const [signupDetails, setSignUpDetails] = React.useState({
    mobile: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    setSignUpDetails((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  }
  async function signUp(e) {
    // e.preventDefault();

    console.log(signupDetails.mobile);
    console.log(signupDetails.email);
    console.log(signupDetails.password);
    let mobile = signupDetails.mobile;
    let email = signupDetails.email;
    let password = signupDetails.password;
    let items = { mobile, email, password };
    if (mobile.length != 0 || email.length != 0 || password.length != 0) {
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
        // history("/Home");
      } else if (code == 400) {
        // alert("Worng Credential");
      } else if (code == 404) {
        // alert("User not exist");
      } else {
        // alert(result.statusText);
      }
    } else {
      alert("Fill the Feilds");
    }
  }

  return (
    <div className="div-flex-signup">
      <div className="form-signup">
        <h2>SignUp </h2>
        {/* <br /> */}
        <label htmlFor="tele"> Mobile Number :</label>
        <br />
        <input
          type="text"
          name="mobile"
          placeholder="555 555 5555"
          id="tele"
          required
          // pattern='[0-9] {3} [0-9] {3} [0-9] {4}'
          value={signupDetails.mobile}
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="emailId">EmailId : </label>
        <br />
        <input
          type="email"
          placeholder="Enter your mail id"
          reuquired
          name="email"
          id="emailID"
          value={signupDetails.email}
          onChange={handleChange}
        ></input>
        <br />

        <label htmlFor="passwordF">Password: </label>
        <br />
        <input
          type="password"
          id="passwordF"
          placeholder="Enter your security key "
          onChange={handleChange}
          name="password"
          value={signupDetails.password}
        ></input>

        <br />
        <button className=" Btn" type="submit">
          Sign up{" "}
        </button>
      </div>
    </div>
  );
}
