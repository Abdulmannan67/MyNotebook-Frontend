import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import "../style.css"
import { Link } from "react-router-dom";
const Home = () => {
  const [imageNum, setImageNum] = useState(1);
  const sliderImages = [
     {
        url: "https://images.pexels.com/photos/1410226/pexels-photo-1410226.jpeg",
     },
     {
        url: "https://images.pexels.com/photos/4238524/pexels-photo-4238524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
     },
     {
        url: "https://images.pexels.com/photos/442574/pexels-photo-442574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
     },
     {
        url: "https://images.pexels.com/photos/4126743/pexels-photo-4126743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
     },
     {
        url: "https://images.pexels.com/photos/3059747/pexels-photo-3059747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
     },
  ];

  return (
    <>
    <div className='holecard' >
        <div className="cardhome" >
        <div className="image">
        <SimpleImageSlider 
            width={300}
            height={400}
            images={sliderImages}
            showBullets={true}
            showNavs={true}
            autoPlay={true} 
            onStartSlide = {(index, length) => {
               setImageNum(index);
            }}
               autoPlayDelay = {3}
         />
        </div>
  </div>
  <div className="cardhome-body">
  <h1 className="h1home" >Get more from your note-taking app</h1>
    <p className="cardhome-text">Capture important ideas and information in ways that help you
                stay productive.</p>
                {localStorage.getItem('token')?
                <div id="bt" className="d-flex">
                 <Link to="/notes" className="button-primary mx-2 my-2">
                 Click here for save note
               </Link> 
               <Link to="/img" className="button-primary mx-2 my-2 ">
                 Click here for save images
               </Link> 
             </div>
                 : <div id="btsin" className="d-flex">
                 <Link to="/signup" className="button-primary">
                 Sign up for free
               </Link>
               <Link id="btlog" to="/login" className="button-primary mx-4">
                 Login to continue
               </Link> </div>}


               
  </div>
  </div>




  <div className='holecard2' >
        <div className="cardhome" >
        <div className="image">
        <img id="homeimg" src="https://images.pexels.com/photos/760710/pexels-photo-760710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ></img>
        </div>
  </div>
  <div className="cardhome-body">
  <h1 className="h1home2" >Safe and synced</h1>
    <p className="cardhome-text">Tired of not having the right info handy when you need
                        it? Mynotebook automatically saves notes and images online and syncs
                        them to all your devices.</p>
                 
  </div>
  </div>



  <div className='holecard' >
        <div className="cardhome" >
        <div className="image">
        <img id="homeimg2" src="https://images.pexels.com/photos/1410226/pexels-photo-1410226.jpeg"  ></img>
        </div>
  </div>
  <div className="cardhome-body">
  <h1 className="h1home2" >Sharing made easy</h1>
    <p className="cardhome-text">User can easily share notes on whatsapp and telegram. Can also send notes to email.  </p>
                 
  </div>
  </div>




  <div className='holecard2' >
        <div className="cardhome" >
        <div className="image">
        <img id="homeimg1" src="https://images.pexels.com/photos/301943/pexels-photo-301943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ></img>
        </div>
  </div>
  <div className="cardhome-body">
  <h1 className="h1home2" >Take notes and take action</h1>
    <p className="cardhome-text">Users can easily create, edit and delete notes, as well as upload and save images. The app allows for easy organization and customization of notes, making it a powerful tool for personal and professional use. MyNotebook app offers an innovative and user-friendly solution for managing notes and images that is accessible anytime, anywhere.</p>
                 
  </div>
  </div>

  {/* <!--Bottom Footer--> */}
		<div class="bottom section-padding">
			<div class="container">
				<div class="row">
					<div class="col-md-12 text-center">
						<div class="copyright">
							<p>© <span>2023</span> <a href="#" class="transition">MyNotebook</a> Created by Abdul Mannan and Daud</p>
						</div>
					</div>
				</div>
			</div>
		</div>
{/* <!--Bottom Footer--> */}
        
    </>
  )
}

export default Home