import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import './Login.css'
const Login=()=>
{
    const history=useNavigate();
    const[login,setLogin]=useState(true);
    const[loginData,setLoginData]=useState({})
    const[signData,setSignData]=useState({})
    function checkFormData(event)
    {
      event.preventDefault();
      console.log(event.target.name);
      history("/")
    }
    function upDateLogin(event)
    {
      event.preventDefault();
      setLoginData(...loginData,event.target.name:event.target.value)
    }
  return(
    <>
    { login &&
      <div class="loginbox">
          <h1>Login Here</h1>
          <form onSubmit={(e)=>{checkFormData(e)}}>
              <label>Username</label>
              <input type="text" name="username" placeholder="Enter Username" required onChange={(e)=>setLoginData({...loginData,e.target.name:e.target.value})}/>
              <label>Password</label>
              <input type="Password" name="password" placeholder="Enter Password" required />
              <button type="submit" className="btnSubmit">Login</button>
              <a >Forgot your Password?</a><br></br>
              <a onClick={()=>setLogin(!login)} style={{cursor:"pointer"}}>Don't have account?</a>
          </form>
      </div>
    }
    {
        !login &&
        <div class="loginbox">
        <h1>Sign Here</h1>
        <form>
            <label>Username</label>
            <input type="text" name="" placeholder="Enter Username" required />
            <label>Email</label>
            <input type="text" name="" placeholder="Enter Email" required />
            <label>Password</label>
            <input type="Password" name="" placeholder="Enter Password" required />
            <button type="submit" className="btnSubmit" onClick={()=>{history("/")}}>Signin</button>
            <a onClick={()=>setLogin(!login)} style={{cursor:"pointer"}}>Go back to Login</a>
        </form>
    </div>
    }
    </>  
  )

}

export default Login;