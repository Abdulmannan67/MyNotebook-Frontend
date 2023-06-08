import React ,{useContext} from 'react';
import noteContext from '../context/Notes/noteContext'
import {
  WhatsappIcon,EmailIcon,TelegramIcon,
  WhatsappShareButton, EmailShareButton,TelegramShareButton } from "react-share";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const{deletenote}= context;
    const {notes , update}=props;
  return (
    <div className='col-md-3 my-3' >
        <div style={{backgroundColor:"lightblue", padding:"1rem"}}className="cardnote border border-secondary rounded " >
  <div className="card-body">
    <h5 className="card-title">{notes.title}</h5>
    {/* <h6 className="card-subtitle mb-2 text-muted">{notes.tag}</h6> */}
    <p className="card-text">{notes.description}</p>
    
    <i className="fa-solid fa-trash mx-3" onClick={()=>{deletenote(notes._id)}} ></i>
    <i className="fa-solid fa-pen-to-square mx-3" onClick={()=>{update(notes)}} ></i> 
    <WhatsappShareButton className='mx-2' url={notes.description}  separator=' ' title={notes.title} > 
  <WhatsappIcon size={32} round={true} />
</WhatsappShareButton>

<EmailShareButton className='mx-2' body={notes.description}  separator=' ' subject={notes.title} > 
  <EmailIcon size={32} round={true} />
</EmailShareButton>

<TelegramShareButton className='mx-2' url={notes.description}  separator=' ' title={notes.title} > 
  <TelegramIcon size={32} round={true} />
</TelegramShareButton>
    
    
  </div>
</div> 
</div> 

   
  )
}

export default Noteitem