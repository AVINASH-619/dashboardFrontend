import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import './Login.css'
const Login=()=>
{
    const history=useNavigate();
    const[login,setLogin]=useState(true);
    const [formData, setFormData] = useState({
      username: '',
      password: '',
      email: '',
    });
  
    // Destructure form data for easier access
    const { username, password ,email} = formData;
  
    // Update form data with the spread operator
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    // Handle form submission
    const checkFormLoginData = (e) => {
      e.preventDefault();
      console.log('Form Data:', formData);
      // Add your login logic or any other processing here
    };
    const checkFormSignData = (e) => {
      e.preventDefault();
      console.log('Form Data:', formData);
      // Add your login logic or any other processing here
    };
  return (
    <>
      {login && (
        <div class="loginbox">
          <h1>Login Here</h1>
          <form
            onSubmit={(e) => {
              checkFormLoginData(e);
            }}
          >
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              value={username}
              onChange={handleInputChange}
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={password}
              onChange={handleInputChange}
              required
            />
            <button type="submit" className="btnSubmit">
              Login
            </button>
            <a>Forgot your Password?</a>
            <br></br>
            <a onClick={() => setLogin(!login)} style={{ cursor: "pointer" }}>
              Don't have account?
            </a>
          </form>
        </div>
      )}
      {!login && (
        <div class="loginbox">
          <h1>Sign Here</h1>
          <form
            onSubmit={(e) => {
              checkFormSignData(e);
            }}
          >
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              value={username}
              onChange={handleInputChange}
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={password}
              onChange={handleInputChange}
              required
            />
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Enter Email"
              value={email}
              onChange={handleInputChange}
              required
            />
            <button
              type="submit"
              className="btnSubmit"
            >
              Signin
            </button>
            <a onClick={() => setLogin(!login)} style={{ cursor: "pointer" }}>
              Go back to Login
            </a>
          </form>
        </div>
      )}
    </>
  );

}

export default Login;