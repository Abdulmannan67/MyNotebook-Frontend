import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useContext} from 'react'
import noteContext from '../context/Notes/noteContext'

function User(props) {
  props.setprogress(10)
    let navigate = useNavigate();
    const context = useContext(noteContext)
    props.setprogress(40)
    const {user}=context; 

    props.setprogress(100)
    const handle=()=>{
        localStorage.removeItem('token');
        navigate("/login")
      }
  return (
    <>
    <div className='user' >
    <div id='userup' className="card">
   <div   className="card-body text-center">
    <h1>Hi there , {user.name} </h1>
    <h2>Thanks for using Mynotebook </h2>
  </div>
 </div>

 <div className="col d-flex justify-content-center mt-5">
    <div>
        <div id='userup'  className="  card text-center pt-2" style={{width:"18rem" }}>
        <i className="fa-4x fa-solid fa-user mx-3">  </i> 
  <div className="card-body">
    <h5 className="card-title">{user.name}</h5>
    <p className="card-text">{user.email}</p>
    <button onClick={handle} className="btn btn-primary " > Logout</button>
  </div>
</div>
    </div>
    </div>
    </div>
    </>
  )
}

export default User