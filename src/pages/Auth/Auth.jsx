import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="logo" />
        <div className="Webname">
          <h1>
            SOCIAL
            <br />
            Network
          </h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      <div className="a-right">
        <form className="infoForm authForm">
          <h3>Log In</h3>

          <div>
            <input
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
            />
          </div>

          <div>
            <input
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
            />
          </div>

          <div>
            <span style={{ fontSize: "12px" }}>
              Don't have an account <Link to="/signup">Sign up</Link>
            </span>
            <button className="button infoButton">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};
// function LogIn() {
//   return (

//   );
// }
export function SignUp() {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>
            SOCIAL
            <br />
            Network
          </h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      <div className="a-right">
        <form className="infoForm authForm">
          <h3>Sign up</h3>

          <div>
            <input
              type="text"
              placeholder="First Name"
              className="infoInput"
              name="firstname"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="infoInput"
              name="lastname"
            />
          </div>

          <div>
            <input
              type="text"
              className="infoInput"
              name="username"
              placeholder="Usernames"
            />
          </div>

          <div>
            <input
              type="text"
              className="infoInput"
              name="password"
              placeholder="Password"
            />
            <input
              type="text"
              className="infoInput"
              name="confirmpass"
              placeholder="Confirm Password"
            />
          </div>

          <div>
            <span style={{ fontSize: "12px" }}>
              Already have an account.<Link to="/login">Login</Link>!
            </span>
          </div>
          <button className="button infoButton" type="submit">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Auth;
