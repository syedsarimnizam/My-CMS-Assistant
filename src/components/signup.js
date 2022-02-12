import React,{useState} from "react";
import {Button} from 'reactstrap'
import {NavLink,useNavigate} from 'react-router-dom'
import axios from 'axios'
import StatusModal from './modal'

const Signup = () => {
  const navigate=useNavigate()
  const [name,setname]=useState('')
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const [confirmpassword,setconfirmpassword]=useState('')
  const [status,setstatus]=useState('')
  const [token,settoken]=useState(undefined)
  const [data,setdata]=useState(undefined)


  const  submit= async (e)=>{
    e.preventDefault()
    if(password !== confirmpassword){
      alert('Password does not match')
    }else{
      // console.log(name,email,password,confirmpassword)
      await axios.post('https://bergmediagroup.com/web_api/api/v1/register',{
        name,
        email,
        password,
        confirm_password:confirmpassword,
        device_type:'web',
        device_token:'12345'
      })
      .then((response)=>{
          console.log(response)
          console.log(response.data.data)
          setdata(response.data.data)
          settoken(response.data)
          setstatus(response.data.message)
        })
      .catch((err)=>console.log(err))
    }
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
                      type="text"
                      class="form-control"
                      placeholder="Name"
                      value={name}
                      onChange={(e)=>setname(e.target.value)}
                      required
                    />
                </div>
                <div class="form-group mb-4">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email"
                      value={email}
                      onChange={(e)=>setemail(e.target.value)}
                      required
                    />
                </div>
                <div class="form-group mb-4">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      value={password}
                      onChange={(e)=>setpassword(e.target.value)}
                      required
                    />
                </div>
                <div class="form-group mb-4">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Confirm Password"
                      value={confirmpassword}
                      onChange={(e)=>setconfirmpassword(e.target.value)}
                      required
                    />
                </div>
                <div className="d-flex flex-column justify-content-center">
                    <Button type="submit" className="gradient-btn">Signup</Button>
                    <p className="my-3 text-color text-center">OR</p>
                    <NavLink to="/login" className="btn btn-outline-success">Login</NavLink>
                </div>
            </form>
          </div>
        </div>
      </div>
      {status === 'login!' && ( localStorage.setItem('token',`${token.data.api_token}`) , navigate('/dashboard', {state:{data}} ) )}
      {status === 'The password must be at least 6 characters.' && <StatusModal status={status} sets={setstatus}></StatusModal>}
      {status === 'The email has already been taken.' && <StatusModal status={status} sets={setstatus}></StatusModal>}
    
      {/* {token && console.log(token.data.api_token)} */}
    </div>
  );
};
export default Signup;
