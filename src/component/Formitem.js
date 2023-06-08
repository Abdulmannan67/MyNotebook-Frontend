import React, { useContext } from 'react'
import noteContext from '../context/Notes/noteContext';

const Formitem = (props) => {
  const context = useContext(noteContext);
  const{deletephoto}= context;
    
  return (
   
        <div className="cardform my-2" >
  <img id='formphoto' className="card-img-top my-2"  src={`https://mynotebook-ohw5.onrender.com/uploads/${props.image}`}  alt=" " />
  <div style={{display:"flex"}} >
  <i id='deletebutton' className="fa-solid fa-trash mx-3" onClick={()=>{deletephoto(props.id)}}  >
  </i>
  <p id='deletepara'>Clich Here For Delete Images</p>
  </div>
</div>
   
  )
}

export default Formitem

