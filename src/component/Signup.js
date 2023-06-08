import React ,{useState,useRef}from 'react'
import { useNavigate } from 'react-router-dom';

import "../style.css"

function Signin(props) {
  //http://localhost:8000/
  const host ='https://mynotebook-ohw5.onrender.com/';
   const [credential, setcredential] = useState({name:"",email:"",password:"" })
   const [otp, setotp] = useState({ eotp:""})
   const [value, setvalue] = useState("")
   let navigate = useNavigate();

   const change = (e)=>{
    setcredential({...credential, [e.target.name]: e.target.value})

}

const ref= useRef(null);//ye modal open krne k liye
const refclose= useRef(null);//ye close
//ye hmne modal k andar value dalne k liye
const changemodal=(event)=>{
  setotp({...otp ,[event.target.name]:event.target.value})
  }

  const handleSubmit= async(event)=>{
    event.preventDefault();
    props.setprogress(10)
    ref.current.click();
    props.setprogress(20)
    const response1 = await fetch(`${host}api/auth/verify`, {
      
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: credential.email})
  });
  props.setprogress(40)
  const json1 = await response1.json()
  setvalue(json1.otp)
  props.setprogress(70)

  props.showalert(json1.status,json1.message)
  props.setprogress(100)
}




   
   const handlemodal = async (e) => {
    e.preventDefault();
    props.setprogress(10)
    ref.current.click();
  let b = parseInt(value);
  const a = parseInt(otp.eotp) 
  props.setprogress(30)
  if (a===b) {

    // create user in db
    const response = await fetch(`${host}api/auth/create-user`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name:credential.name,email: credential.email, password: credential.password})
    });
    props.setprogress(40)
    const json = await response.json()
    props.setprogress(60)
    if (json.success){
        // Save the auth token and redirect
        localStorage.setItem('token', json.token); 
        props.showalert("Signup Successfully",'success')
        props.setprogress(100)
        navigate('/login');

    }
    else{
      props.setprogress(100)
        props.showalert(" ",json.error);
    }

  }else{
    props.setprogress(100)
    setotp({ eotp:""})
    alert("You enter wrong otp please try again")
    


  }

   }





    

   
  return (
    <>
    <div className='signcss'>
      
      <h2 style={{color:"white"}}  className='text-center' >Create an account to use MyNotebook</h2>
      <div>
        
      <div className ="pb-3 mx-4">
     
      <form onSubmit={handleSubmit}  >
      <div style={{backgroundColor: "rgba(0,0,0,0.5) !important"}}  className='border border-secondary rounded p-4'>
      <div style={{color:"white"}}   className="mb-3">
    <label  htmlFor="text" className="form-label">Name</label>
    <input type="text" onChange={change}  className="form-control" name="name" value={credential.name} id="name" aria-describedby="emailHelp" minLength={3} required/>
  </div> 
  <div  style={{color:"white"}}  className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" onChange={change} className="form-control" name="email" value={credential.email} id="email" aria-describedby="emailHelp"/>
    <div id="emailHelp"  className="form-text"><span style={{color:"#3a2626cc"}}>We'll never share your email with anyone else. </span></div>
  </div>
  <div style={{color:"white"}}   className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" onChange={change} className="form-control" name="password" value={credential.password} id="password"  autoComplete="on" minLength={5} required/><span style={{color:"#3a2626cc"}}>Password aleast 5 characters </span>
  </div>
 
  <button className="button-56" >Submit</button>
  </div>
</form>
    </div>
    </div>
    </div>



{/* 
    // modal */}

    <button ref={ref} type="button" className="btn btn-primary my-3 d-none" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>


<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel"> </h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <form>
        <div className="mb-3 " >
        
        <div className="mb-3">
          <label htmlFor="title" className="form-label"><h4>Enter OTP that would have come to your email</h4></label>
          <input type="text" className="form-control" onChange={changemodal} value={otp.eotp} name="eotp"  id="title"/>
        </div>
 
        </div>


        
      </form>


            </div>
      <div className="modal-footer">
        <button ref={refclose} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={handlemodal} >Submit</button>
      </div>
    </div>
  </div>
</div>
</>
  )
}

export default Signin