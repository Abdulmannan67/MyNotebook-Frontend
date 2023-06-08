import React from "react";
import { useNavigate } from 'react-router-dom';
import    "../style.css"
let imgphoto = require("./images/photo.jpg")
let imgnote = require("./images/wallet.avif")



const Middle = (props) => {
  let navigate = useNavigate();
  
  
  
  const handleimg=()=>{
    if (localStorage.getItem("token")) {
      navigate("/img")
    }else{
      props.showalert("Please login","Warning")
    }
    
  }
  const handlenotes = ()=>{
    if (localStorage.getItem("token")) {
      navigate("/notes")
    }else{
      props.showalert("Please login to continue","Warning")
    }
  }

  return (
    <>
    <div className="midd">
      <div className="cardy"  >
  <img src= {imgphoto} className="" alt="..."/>
  <span>
            <ul>
                <li><button onClick={handleimg} >Save Images</button></li>
            </ul>
        </span>
</div>


<div className="cardy" >
  
  <img src= {imgnote} className="card-img-top" alt="..."/>
  <span>
            <ul>
                <li><button onClick={handlenotes} >Save Notes</button></li>
            </ul>
        </span>
</div>

</div>
        
    </>
  );
};

export default Middle;
