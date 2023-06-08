import React ,{useState,useRef}from 'react'
import { useNavigate } from 'react-router-dom';
import "../style.css"

const Emaillogin = (props) => {

    const host ='https://mynotebook-ohw5.onrender.com/';
    const [credential, setCredential] = useState({email: ""}) 
    const [otp, setotp] = useState({ eotp:""})
    const [value, setvalue] = useState("")
    
    let navigate = useNavigate();
    

    const change = (e)=>{
      setCredential({...credential, [e.target.name]: e.target.value})
  }
  const ref= useRef(null);//ye modal open krne k liye
const refclose= useRef(null);//ye close
//ye hmne modal k andar value dalne k liye
const changemodal=(event)=>{
  setotp({...otp ,[event.target.name]:event.target.value})
  }


  const handleSubmit= async(e)=>{
    e.preventDefault();
    props.setprogress(20)
     props.setprogress(40)
     const response1 = await fetch(`${host}api/auth/forget`, {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify({email: credential.email})
   });
   props.setprogress(60)
   const json1 = await response1.json()
   props.showalert(json1.status,json1.message)
    setvalue(json1.otp);
    props.setprogress(100)
    ref.current.click();
   
   }


  const handlemodal= async(e)=>{
    e.preventDefault();
    ref.current.click();
    props.setprogress(10)
    let a = parseInt(otp.eotp)
    let b = parseInt(value)

    props.setprogress(40)

    if (a===b) {
      const response = await fetch(`${host}api/auth/forgetlogin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: credential.email})
    });
    const json = await response.json()
    if (json.success){
        // Save the auth token and redirect
        localStorage.setItem('token', json.token); 
        props.setprogress(100)
        props.showalert("login Successfully",'success')
        navigate('/home');
    }
    else{
      props.setprogress(100)
      setotp({ eotp:""})
        props.showalert("Invalid credentials",'warning');
    }
    }
  }


  return (
    <>
       <div className='logincss'>
      <h2 style={{color:"white"}} className='text-center'>Enter email  </h2>
      <div className ="mt-3 mx-4">
        
      <form onSubmit={handleSubmit}  >
      <div style={{backgroundColor: "rgba(0,0,0,0.5) !important"}}  className='border border-secondary rounded p-4'>
  <div style={{color:"white"}}  className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" onChange={change} className="form-control" name="email" value={credential.email} id="email" aria-describedby="emailHelp"/>
    <div id="emailHelp"  className="form-text">We'll never share your email with anyone else.</div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </div>
 
  </div>
</form>
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

export default Emaillogin