import React from 'react'
import '../css/Footer.css'
import culturalforum_img from '../Images/cf_logo.png'
import instagramflogo from '../Images/instagram_footer_logo.png'

function Footer() {
  return (
    <div className='footerbar'>
        <div className="panel1">
          <div className="forumdesc">
            <img src={culturalforum_img} alt="culturalforum"/>
            <span>
              <p id='pname'>Cultural Forum</p>
              <p id='descname'>by S.K. Somaiya Degree College</p>
            </span>
          </div>

          <div className="panel1links">
            <p id='pname' style={{"position":"relative","top":"0.5vh"}} >CF.SKSC</p>
            <p>Forms</p>
            <p>Bronchure</p>
            <p>Team</p>
            <p>Gallery</p>
            <p>Contacts</p>
          </div>
        </div>

        <div className="panel2">
          <p id='cfdesc'>
            The Cultural Forum of S K Somaiya College, Somaiya Vidyavihar University is a platform that caters to the talents of students and provides them with a stage to express and explore their talents.
          </p>
          <div className="subpanel2">
            <div className="socialmedia_icons">
              <i class="fa-brands fa-square-facebook fa-xl" style={{"color": "#EAEAEA"}}></i>
              <i class="fa-brands fa-youtube fa-xl" style={{"color": "#EAEAEA"}}></i>
              <img src={instagramflogo} alt="instagram_footer" style={{"width":"1.95vw","height":"3.9vh","position":"relative","bottom":"1.7vh"}}/>
            </div>
            <span style={{"margin-left":"auto","position":"relative","bottom":"1vh","margin-top":"3vh"}} >Mail us</span>
            <span style={{"font-family": "Poppins, sans-serif;","font-weight":"500" , "fontSize":"1.5rem"}}>cfandawards.sksc@somaiya.edu</span>
          </div>
        </div>
        <div className="hrline"></div>

        <div className="panel3">
          <span>
            Designed by  <span id='enfiqid' style={{"color":"#EAEAEA"}}>ENFIQ</span>
          </span>
          <span>© Copyright 2023, All Rights Reserved by CF SKSC</span>
        </div>
    </div>
  )
}

export default Footer