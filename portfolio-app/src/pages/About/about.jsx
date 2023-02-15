import React from 'react'
import './about.css'
import Me from '../../assets/Me.JPG'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To know</h5>
      <h2>
        About Me
      </h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className="about_me-image">
            <img src={Me} alt="Me" />
          </div>
        </div>

        <div className=' about_content'>
          <div className='about_cards'>
            <article className="about_card">
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>3+ Year Working</small>
            </article>

            <article className="about_card">
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>3+ Year Working</small>
            </article>

            <article className="about_card">
            <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>13+ Year Working</small>
            </article>

          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur molestiae, temporibus deleniti et beatae hic illum asperiores dolorem animi aperiam omnis quia! Suscipit, atque veniam culpa eos vero nam quas.
          </p>

          <a href ='#contact' className ='btn btn-primary'> Let's Talk</a>
        
          
        </div>
      </div>





    </section>
  )
}

export default About