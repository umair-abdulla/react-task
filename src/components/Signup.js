import { useState  } from 'react';
import './Signup.css'
import { useNavigate} from 'react-router-dom';
import validator from 'validator'

 
function Signup() {
 
  // States for registration
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [mailError, setMailError] = useState(false);
 
  // Handling the name change
  const handleName = (event) => {
    setName(event.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (event) => {
    setEmail(event.target.value);
    // setMailError(event.target.value);
    if (validator.isEmail(email)) {
      // setMailError(false)
      setError(false)
    } else {
      // setMailError(true)
      setError(true)

    }
    setSubmitted(false);
  };
 
  // Handling the password change
  const handlePassword = (event) => {
    setPassword(event.target.value);
    setSubmitted(false);
  };

  //Email validation
  // const validateEmail = (e) => {
  //   email = e.target.value
  
  //   if (validator.isEmail(email)) {
  //     setError(false)
  //   } else {
  //     setError(true)
  //   }
  // }

  // For routing to register page
  const navigate = useNavigate();
  
 
  // Handling the form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === '' || email === '' || password === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
      localStorage.setItem('name', name);
      
    
      localStorage.setItem('email', email);
      
    
      localStorage.setItem('password', password);
      
    
      console.log("saved")
      navigate('/');


    }
  };
 
  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>{name} successfully registered!!</h1>
      </div>
    );
  };
 
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h2>Please enter the correct details</h2>
      </div>
    );
  }
 
  return (
    <div className="App">

      <div>
        <h1>User Registration</h1>
      </div>
 
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
 
      <form>
        {/* Labels and inputs for form data */}
        <label className="label">Name</label>
        <input onChange={handleName} className="input"
          value={name} type="text" />
 
        <label className="label">Email</label>
        <input onChange={handleEmail} className="input"
          value={email} type="email" />
 
        <label className="label">Password</label>
        <input onChange={handlePassword} className="input"
          value={password} type="password" />
 
        <button onClick={handleSubmit} className="btn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Signup