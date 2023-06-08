
import React ,{useContext,useEffect, useRef , useState} from 'react'
import Noteitem from './Noteitem'
import Addnote from './Addnote'
import noteContext from '../context/Notes/noteContext'
import { useNavigate } from 'react-router-dom';

const Notes = (props) => {
    const context = useContext(noteContext);
    let navigate = useNavigate();
    const {notes, getNotes ,editNote} = context;

    //ye sirf modal k liye kiya
    const [note, setnote] = useState({ id:"",etitle:"",edescription:""})

    useEffect(() => {
      props.setprogress(30)
      if(localStorage.getItem('token')){
        props.setprogress(100)
        getNotes()
      }
      else{
        navigate('/login');
      }
    }, )

    const ref= useRef(null);//ye modal open krne k liye
    const refclose= useRef(null);//ye close

    const updatenote = (currentnote)=>{
      ref.current.click();
      props.setprogress(10)
      setnote({id:currentnote._id , etitle:currentnote.title,  edescription:currentnote.description , etag:currentnote.tag})
      props.setprogress(100)
    }

    //ye hmne modal k andar value dalne k liye
    const change=(event)=>{
      props.setprogress(10)
      setnote({...note ,[event.target.name]:event.target.value})
      props.setprogress(100)
      }
  
      const handleclick=(event)=>{
          event.preventDefault();
          props.setprogress(10)
          ref.current.click();
          props.setprogress(30)
          editNote(note.id ,note.etitle , note.edescription  ,note.etag)
          props.showalert("Edit Successfully",'success')
          props.setprogress(100)
      }

  return (
    <>
    <Addnote showalert={props.showalert} />

    
<button ref={ref} type="button" className="btn btn-primary my-3 d-none" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>


<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <form>
        


        
        <div className="mb-3 " >
        
        <div className="mb-3">
          <label htmlFor="title" className="form-label"><h4>Title</h4></label>
          <input type="text" className="form-control" onChange={change} value={note.etitle} name="etitle"  id="title"/>
        </div>
 
        </div>
     <div className="mb-3">
          <label htmlFor="description" className="form-label"><h4>Descripton</h4></label>
          <textarea type="text" className="form-control" onChange={change} value={note.edescription} name="edescription" id="description"/>
        </div>

        
      </form>


            </div>
      <div className="modal-footer">
        <button ref={refclose} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={handleclick} >Save changes</button>
      </div>
    </div>
  </div>
</div>




    
    <div className='row pt-3 mx-2' >
        <h1 style={{color:"black"}} className='text-center'>Your Notes</h1>
        {notes.length===0 && "No notes to display"}
        {notes.map((no)=>{
      return <Noteitem key={no._id} update={updatenote} notes={no}  /> 
    })}
    </div>
    </>
  )
}

export default Notes