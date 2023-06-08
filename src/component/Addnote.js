import React ,{useContext,useState} from 'react'
import noteContext from '../context/Notes/noteContext'
import "../style.css"

const Addnote = (props) => {
    const context = useContext(noteContext);
    const {addnote, msg} = context;
    
    const [note, setnote] = useState({title:"",description:"",})
    const change=(event)=>{
    setnote({...note ,[event.target.name]:event.target.value})

    }

    const handleclick=(event)=>{
        event.preventDefault();
        addnote(note.title, note.description,);
        props.showalert(msg,"success")
        setnote({title:"",description:"",})// ye form add hone k baad jagah khali k liye kra h
    }
  return (
    <div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center" , }} className ="pt-4 mx-4">
    
        <form onSubmit={handleclick} className='addnote' >
        <div className='border border-secondary rounded p-4'>
        <div className="mb-3 " >
        <h1 style={{color:"white"}} className='text-center' >Add a Note</h1>
        <div style={{color:"white"}} className="mb-3">
          <label htmlFor="title" className="form-label"><h4>Title</h4></label>
          <input type="text" className="form-control" onChange={change} name="title" minLength={5} required value={note.title}   placeholder='Enter title here' id="title"  />
        </div>

        </div>
     <div style={{color:"white"}} className="mb-3">
          <label htmlFor="description" className="form-label"><h4>Descripton</h4></label>
          <textarea rows={5} cols={60} type="text" className="form-control" value={note.description} onChange={change} minLength='6'required  placeholder='Enter description here' name="description" id="description"  />
        </div>
        <div style={{color:"white"}} className="mb-3">
        <fieldset>
    {/* <legend>Tag </legend>
    <div>
    
      <input type="radio" onChange={change} name="tag" value="private"/>
      <label  htmlFor="private">Private</label>
      
      <input style={{marginLeft:"1vw"}} type="radio" onChange={change} name="tag" value="public"/>
      <label htmlFor="public">Public</label>
    </div> */}

    
</fieldset>
        </div>
        <button style={{backgroundColor:"white", color:"#084298"}}  type="submit" className="btn btn-primary" >Submit</button>
        </div>
      </form>
     
     </div>
    </div>
    
  )
}

export default Addnote