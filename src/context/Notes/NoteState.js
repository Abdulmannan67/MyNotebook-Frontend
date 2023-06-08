import NoteContext from "./noteContext";
import { useState } from 'react';
import axios from "axios";


const NoteState = (props) => {
  const host = "https://mynotebook-ohw5.onrender.com"
    let noteinitial = [];
   const [notes, setnotes] = useState(noteinitial);
   const [msg, setmsg] = useState('');




   // get all notes
   const getNotes= async ()=>{
    const responce = await fetch(`${host}/api/notes/fetchallnotes`,{
    method:'GET',
    headers : {
      "Content-Type" : "application/json",
      "auth-token": localStorage.getItem('token')
    },
  });
  const json = await responce.json()
  setnotes(json);
}



    //update notes
      const editNote= async (id,title,description,tag)=>{
        const responce = await fetch(`${host}/api/notes/update/${id}`,{
        method:'PUT',
        headers : {
          "Content-Type" : "application/json",
          "auth-token": localStorage.getItem('token')
        },
        body : JSON.stringify({title,description,tag})
        });
        const json = await responce.json();
        console.log(json)
        // Logic to edit in client
        //isme hmne notes dobara s initialize krna prega kyuki y ho nhi rha tha
        const notesec=JSON.parse(JSON.stringify(notes))
        for (let i = 0; i < notesec.length; i++) {
          const element = notesec[i];
          if (element._id === id) {
            notes[i].title = title;
            notes[i].description = description;
            break;
          }
          }
          setnotes(notesec);
      }
      






      //add note
     const addnote = async (title,description,tag)=>{
          const responce = await fetch(`${host}/api/notes/addnote`,{
          method:'POST',
          headers : {
            "Content-Type" : "application/json",
            "auth-token": localStorage.getItem('token')
          },
          body : JSON.stringify({title,description,tag})
          });
          const json = await responce.json();
          
   
          if (json.success===true) {
            setmsg(json.message)
            
          } else {
            alert("Enter valid details")
          }
        
        const note = {
        "title": title,
        "description": description,
        
      }
      setnotes(notes.concat(note))
}



    //delete a note

    const deletenote = async (id)=>{
      const responce = await fetch(`${host}/api/notes/delete/${id}`,{
        method:'DELETE',
        headers : {
          "Content-Type" : "application/json",
          "auth-token": localStorage.getItem('token')
        },
        });
        const json = await responce.json();
      alert(json.Success)
    }


    //get user detail
    const [user, setuser] = useState([])
    const getdetail = async ()=>{
      const responce = await fetch(`${host}/api/auth/getuser`,{
        method:'POST',
        headers : {
          "Content-Type" : "application/json",
          "auth-token": localStorage.getItem('token')
        },
        });
        const json = await responce.json();
      setuser(json);
    }

    // get all images
    const [imgs, setimgs] = useState([])
    const getallimg= async ()=>{
      const responce = await fetch(`${host}/api/upload/allimg`,{
      method:'GET',
      headers : {
        "Content-Type" : "application/json",
        "auth-token": localStorage.getItem('token')
      },
    });
    const json = await responce.json()
    
    setimgs(json);
  }
    
  //post image on server
  const post =(newphoto)=>{
   
    const formData = new FormData();
    formData.append("photo", newphoto);
    const config ={
      headers:{
        "auth-token": localStorage.getItem('token')
      }
    }
    
    axios.post(`${host}/api/upload/img`,formData,config)
    .then(res=>{
      alert(res.data)
      getallimg() //isse add hote hi image dikh jaegi neeche
    }).catch(err=>{
      alert(err,"Internal Server Error")
    })
  };

  //delete photo
  

  const deletephoto = async (id)=>{
    const responce = await fetch(`${host}/api/upload/delete/${id}`,{
      method:'DELETE',
      headers : {
        "Content-Type" : "application/json",
        "auth-token": localStorage.getItem('token')
      },
      });
      const json = await responce.json();
       alert(json)
       getallimg();
  }
  



  return (
    <NoteContext.Provider value={{notes,addnote, deletenote,getNotes,editNote,getdetail,user,setuser , getallimg,imgs , post , deletephoto , msg}}>
      {props.children}
    </NoteContext.Provider>
  )

}
export default NoteState;