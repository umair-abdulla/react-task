import { useState } from "react";
import "./Login.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Signup from "./Signup";
import Home from "./Home";

function Login() {
  // States for login
  const [lemail, setLEmail] = useState("");
  const [lpassword, setLPassword] = useState("");
  const [flag, setFlag] = useState(false);

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the email change
  const handleEmail = (e) => {
    setLEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setLPassword(e.target.value);
    setSubmitted(false);
  };

  const nav = useNavigate();
  const navigateToHome = () => {
    nav("/home");
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let pass = localStorage.getItem("password");
    let mail = localStorage.getItem("email");

    if (!lemail || !lpassword) {
      setFlag(true);
      console.log("EMPTY");
    } else if (lpassword !== pass || lemail !== mail) {
      setFlag(true);
    } else {
      // setHome(!home);
      setFlag(false);
      console.log("ok")
      navigateToHome();
      
    }
  };

  // For routing
  const navigate = useNavigate();
  const navigateToRegister = () => {
    navigate("/signup");
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h2>Enter correct login details </h2>
      </div>
    );
  };

  return (
    <div className="App">
      <div>
        <h1>Login</h1>
      </div>

      {/* Calling to the methods */}
      <div className="messages">{errorMessage()}</div>

      <form>
        {/* Labels and inputs for form data */}
        {/* <label className="label">Name</label>
        <input onChange={handleName} className="input"
          value={name} type="text" /> */}

        <label className="label">Email</label>
        <input
          onChange={handleEmail}
          className="input"
          value={lemail}
          type="email"
        />

        <label className="label">Password</label>
        <input
          onChange={handlePassword}
          className="input"
          value={lpassword}
          type="password"
        />

        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>

        <button onClick={navigateToRegister} className="btn" type="submit">
          New user? Register
        </button>
      </form>
    </div>
  );
}

export default Login;
