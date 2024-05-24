import {React,useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
function Login() {
  const[credential,Setcredential]=useState({email:"",password:""})

  let navigate=useNavigate()
  const handleSubmit= async(e)=>
  {
      e.preventDefault();
      const  response= await  fetch("http://localhost:1900/api/loginuser",{
        method:'POST',
        headers:{
          'Content-Type' : 'application/json'
        },
      body:JSON.stringify({email:credential.email,password:credential.password})
      })
      const json= await response.json()
      console.log(json)
  
      if(!json.success)
      {
        alert("Enter Valid Credentials")
      }
      if(json.success)
      {

        localStorage.setItem("userEmail",credential.email)
        localStorage.setItem("authToken",json.authToken)
        console.log(localStorage.getItem("authToken"))
       navigate("/")
      }
  }
  
  
  const onChange=(e)=>{
   Setcredential({...credential,[e.target.name]:e.target.value})
  }
  
  return (
   <>
    <div className='container mt-4 '>
<form onSubmit={handleSubmit}>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' value={credential.email}    onChange={onChange}   />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' value={credential.password}   onChange={onChange}     />
  </div>
  
  
  <button type="submit" className="m-3 btn btn-success bg-success">Submit</button>
  <Link to="/createuser" className='btn btn-danger'>I'm a New User</Link>
</form>
   
</div>

   
  
   </>
  )
}

export default Login