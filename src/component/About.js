import React from 'react'

const About=()=> {
  return (
    <div>
        <div style={{marginTop:"3rem"}} className="accordion mx-4" id="accordionPanelsStayOpenExample">
  <div style={{backgroundColor: "#ebdde9"}}   className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
      <button style={{backgroundColor:"lightblue" }}   className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
      Overview
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div className="accordion-body">
        <strong>Mynotebook app is a notes and images saver application which is developed with the help of 
modern web technologies such as MongoDB, ReactJS, ExpressJS, and NodeJS. The application is 
designed to provide a seamless user experience for users who want to store their notes and images 
in one place.</strong>
      </div>
    </div>
  </div>
  <div style={{backgroundColor: "#ebdde9"}}   className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
      <button style={{backgroundColor:"lightblue" }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      Browser Compatibility
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div className="accordion-body">
        <strong>MyNotebook supports modern web browsers including Google Chrome, Mozilla Firefox, Safari, Opera, Edge, Internet Explorer and Steam browser.</strong> 
      </div>
    </div>
  </div>
  <div style={{backgroundColor: "#ebdde9"}}   className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
      <button style={{backgroundColor:"lightblue" }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      About
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div className="accordion-body">
        <strong>This web app is a free product, which can be used by any individual, company, school, government office etc. I originally made this for myself to help me remember ideas that will eventually end up on my personal blog. This simple tool that all started as a simple project has helped my productivity immensely and I hope it helps you too.</strong> 
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default About