import React from 'react'
import { Link , useLocation ,useNavigate} from 'react-router-dom'
import {useContext} from 'react'
import noteContext from '../context/Notes/noteContext'
import image from "./images/wallet.png";

function Navbar() {
 const context = useContext(noteContext)
 const {getdetail}=context;

  let navigate = useNavigate();
  let location = useLocation();
  // useEffect(() => {
  //   console.log(location.pathname)
  // }, [location])

  const handleclick=()=>{
    getdetail();
    navigate("/user")
  }
  
  
  

  return (


<nav style={{backgroundColor: "lightblue"}} className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <img style={{height:"2rem", width:"2rem",margin:"10px"}} src={image} ></img>
    <Link style={{color:"#d68c45"}} className="navbar-brand" to="/home">MyNotebook</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-1">
    <Link style={{color:"#7f4f24"}} className={`nav-link ${location.pathname==="/home"?"active":" "}`} aria-current="page" to="/home" >Home</Link>
    </li>
    <li className="nav-item mx-1">
    <Link style={{color:"#7f4f24"}} className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">About</Link>
    </li>
    
    
  </ul>
  {!localStorage.getItem('token')?
  <form className="d-flex">
  
  </form>:  <i  onClick={handleclick} className="fa-2x fa-solid fa-user mx-3">  </i> 
       }
       
  </div>
</div>
</nav>
  )
}

export default Navbar