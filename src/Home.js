import React from "react";
import "./home.css";

export default function Home() {
  const [link, setLink] = React.useState();

  async function shrink() {
    // e.preventDefault();

    let email = localStorage.getItem("email");
    let origUrl = link;
    let items = { email, origUrl };
    if (origUrl.length != 0) {
      let result = await fetch(
        "https://unshift1.herokuapp.com/api/user/urlShortner/saveUrl",
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
        console.log(result);
        // history("/Home");
      } else if (code == 400) {
        // alert("Worng Credential");
      } else if (code == 404) {
        // alert("User not exist");
      } else {
        alert(result.statusText);
      }
    } else {
      alert("Fill the Feild");
    }
  }

  function handleChange(event) {
    setLink(event.target.value);
    console.log(link);
  }

  return (
    <div className="div-flex-home">
      <h1>Shrink Url</h1>
      <br />
      <div className="div-input-btn">
        <input
          className="input-home"
          type="text"
          value={link}
          onChange={handleChange}
          placeholder="Paste the url you want to shrink "
        ></input>
        <button className="btn" onClick={shrink}>
          Shrink
        </button>
      </div>
    </div>
  );
}
