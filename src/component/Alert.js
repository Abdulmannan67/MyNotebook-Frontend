// import React ,{useContext} from 'react'
// import noteContext from '../context/Notes/noteContext'
import "../style.css";
import React from 'react'
const Alert = (props) => {
    // const context = useContext(noteContext);
    // let {showalert}=context;
  return (
    <div className="height" >
    {props.alert && <div  className="alert alert-success" role="alert">
<strong>{props.alert.typ}</strong>{` ${props.alert.msg}`}
   
</div>}
</div>
  )
}

export default Alert