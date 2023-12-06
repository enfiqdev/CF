import React from 'react'
import '../css/Navbar.css'
import culturalforum_img from '../Images/cf_logo.png'
import butterfly from '../Images/butterfly.svg'

export default function Navbar() {

  return (
    <div className='Navbar'>
        <div className="Navpanel">
            <div className="forumdesc">
                <img src={culturalforum_img} alt="culturalforum"/>
                <span>
                    <p id='pname'>Cultural Forum</p>
                    <p id='descname'>by S.K. Somaiya Degree College</p>
                </span>
            </div>
            <div className="panel1links">
                <p>Forms</p>
                <p>Bronchure</p>
                <p>Team</p>
                <p>Gallery</p>
            </div>
            <div className="contactpanel">
                <p>Contact</p>
                <button id='Aurabtn'> <img src={butterfly} style={{"width":"15px","height":"15px","position":"relative;","bottom":"2px"}} alt="butterfly" /> Aura</button>
            </div>
        </div>
    </div>
  )
}
