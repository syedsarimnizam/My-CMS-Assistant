import React,{useState} from "react";
import {Button} from 'reactstrap'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import {useNavigate } from 'react-router-dom'




const Login = () => {
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  // const [status,setstatus]=useState('')

  const navigate=useNavigate()

  const submit= async (e)=>{
    e.preventDefault()
    await axios.post('https://bergmediagroup.com/web_api/api/v1/login',{
        email,
        password
      ,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then((response)=>{
      // console.log(response)
      // setstatus(response.data)
      if(response.data.message === 'Already logged in'){
        navigate('/dashboard', {state:{data:response.data.data}} )
        localStorage.setItem('token',`${response.data.data.api_token}`)
      }
    })
    .catch((err)=>{
      // console.log(err.response.data)
      if(err.response.data.message === 'invalid email or password'){
        alert(err.response.data.message)
      }
    })

  }
  return (
    <div className="container center-div my-lg-0 my-5">
      <div className="row mx-2 mx-sm-0">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <p className="h1 green-color mb-2">
            Smart Writing Assistant Using AI
          </p>
          <p className="text-color">
            A content management system (CMS) is an application that is used to
            manage web content, allowing multiple contributors to create, edit
            and publish.
          </p>
        </div>
        <div className="col-lg-4 offset-lg-1 bg-white box px-4 py-5">
          <div>
            <form onSubmit={submit}>
              <div class="form-group mb-4">
                <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    value={email}
                    required
                    onChange={(e)=>setemail(e.target.value)}
                />
              </div>
              <div class="form-group mb-4">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  value={password}
                  required
                  onChange={(e)=>setpassword(e.target.value)}
                />
              </div>
              <div className="d-flex flex-column justify-content-center">
                <Button type="submit" className="gradient-btn">
                    Login
                </Button>
                <p className="my-3 text-color text-center">OR</p>
                <NavLink to="/" className="btn btn-outline-success">Signup</NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  );
};
export default Login;
