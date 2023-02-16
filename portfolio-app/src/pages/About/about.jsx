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
              <small>5+ Year Working Experience</small>
            </article>

            <article className="about_card">
              <FiUsers className='about_icon'/>
              <h5>Study</h5>
              <small>15+ Years of tudy</small>
            </article>

            <article className="about_card">
            <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>15+ Worked Project</small>
            </article>

          </div>

          <p>
          front-end web developer with an electromechanics background (over 5 years of experience) tackling complex bugs with a rational problem-solving approach. graduated from the Edex Trilogy Bootcamp and developed skills in JavaScript, CSS, React.js, Bootstrap, jQuery, and responsive web design. having a thirst for lifelong learning, collaboration, and problem solving, and being equally enthusiastic about developing applications that help ordinary people make their lives easier. In order to give the best user experience possible, each project should strive to be the best at engaging the audience. I am excited to use my abilities in the future as part of a fast-paced, quality-driven team to create better web experiences. I'm excited to put my precise attention to detail and technical talents to work for a company that values growth, learning, and making a major contribution.          </p>

        
          
        </div>
      </div>





    </section>
  )
}

export default About