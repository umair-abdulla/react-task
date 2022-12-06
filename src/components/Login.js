import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";


function Login() {
  // States for login
  const [lemail, setLEmail] = useState("");
  const [lpassword, setLPassword] = useState("");

  // States for checking the errors
  const [error, setError] = useState(false);

  // Handling the email change
  const handleEmail = (e) => {
    setLEmail(e.target.value);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setLPassword(e.target.value);
  };

  const nav = useNavigate();
 

    // Showing error message if error is not true
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

 

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let pass = localStorage.getItem("password");
    let mail = localStorage.getItem("email");

    if (!lemail || !lpassword) {
      setError(true)
      console.log("EMPTY");
    } else if (lpassword !== pass || lemail !== mail) {
      setError(true)
    } else {
      setError(false)
      console.log("ok")
      
      nav('/home')
      
    }
  };

  // For routing
  const navigate = useNavigate();
  const navigateToRegister = () => {
    navigate("/signup");
  };


  return (
    <div className="App">
      <div>
        <h1>Login</h1>
      </div>

      {/* Calling to the methods */}
      <div className="messages">{errorMessage()}</div>

      <form>
        

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
