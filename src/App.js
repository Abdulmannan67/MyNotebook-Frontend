import './App.css';
import React, {useState} from 'react'
import {
  BrowserRouter, Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Login from './component/Login';
import Signup from './component/Signup'
import Navbar from './component/Navbar';
import Notes from './component/Notes';
import Alert from './component/Alert'
import About from './component/About';
import User from './component/User';
import Form from './component/Form'
// import Middle from './component/Middle'
import Home from './component/Home'
import NoteState from './context/Notes/NoteState';
import Emaillogin from './component/Emaillogin';


function App() {
  const [alert, setalert] = useState(null)
  const [progress, setprogress] = useState(0)
  const showalert=(massage,type)=>{
    setalert(
      {
        msg:massage,
        typ:type
      }
    )
    setTimeout(() => {
      setalert(null)
    }, 3000);
  }
  return (
    <>
      <NoteState>
        <BrowserRouter>
        <Navbar />
        <LoadingBar height={3} color='#f11946' progress={progress}/>
        <Alert alert={alert}/> 
        <Routes>
              
              <Route exact path="/" element={<Home setprogress={setprogress} showalert={showalert} /> }/>
              <Route exact path="/home" element={<Home setprogress={setprogress} showalert={showalert} /> }/>
              {/* <Route exact path="/" element={<Middle showalert={showalert} /> }/> */}
              <Route exact path="/notes" element={<Notes setprogress={setprogress} showalert={showalert} /> }/>
              <Route exact path="/img" element={<Form setprogress={setprogress} showalert={showalert} /> }/>
              <Route exact path="/about" element={ <About />}/>
              <Route exact path="/login" element={<Login setprogress={setprogress} showalert={showalert} /> }/>
              <Route exact path="/signup" element={<Signup setprogress={setprogress} showalert={showalert} /> }/>
              <Route exact path="/Emaillogin" element={<Emaillogin setprogress={setprogress} showalert={showalert} /> }/>
              <Route exact path="/user" element={<User  setprogress={setprogress} />  }/>
              
        </Routes>
        
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;