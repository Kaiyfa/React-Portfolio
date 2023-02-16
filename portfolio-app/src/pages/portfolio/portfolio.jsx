import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Portfolio1.png'
import IMG2 from '../../assets/Portfolio 2.png'
import IMG3 from '../../assets/Portfolio 3.png'
import IMG4 from '../../assets/Portfolio 4.png'
import IMG5 from '../../assets/Portfolio5.png'
import IMG6 from '../../assets/Portfolio6.png'



const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Team_Profile_Creator',
    github: 'https://github.com/Kaiyfa/Team_Profile_Creator',
    demo: 'https://drive.google.com/file/d/1HXni-zE_ckjNFwsLubUZfFjd3Y1Vp3sv/view',
    text: 'This is a command-line tool for generating team card information'


  },
  {
    id: 2,
    image: IMG2,
    title: 'Best_README',
    github: 'https://github.com/Kaiyfa/best_readme',
    demo: 'none',
    text: 'This command line application generates a good ReadMe sample by prompting the user for all of the information that comprises the content of a ReadMe, then inputs the data into a template and saves the ReadMe to the current working directory'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Queryweather',
    github: 'https://github.com/Kaiyfa/queryweather',
    demo: 'https://kaiyfa.github.io/queryweather/',
    text: 'Build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS'



  },

  {
    id: 4,
    image: IMG4,
    title: 'Jquery-planner-app',
    github: 'https://github.com/Kaiyfa/Jquery-planner-app',
    demo: 'https://kaiyfa.github.io/Jquery-planner-app/',
    text: 'Creation of a simple calendar application that allows a user to save events for each hour of the day'

    

  },

  {
    id: 5,
    image: IMG5,
    title: 'Web_APIs-Quiz',
    github: 'https://github.com/Kaiyfa/web_apis-quiz',
    demo: 'https://kaiyfa.github.io/web_apis-quiz/',
    text: 'This coding evaluation consists of a timed coding quiz and multiple-choice questions. This app will run in the browser and will use JavaScript code to dynamically change HTML and CSS.'

  },
  {
    id: 6,
    image: IMG6,
    title: 'Password Generator',
    github: 'https://github.com/Kaiyfa/password-generator',
    demo: 'https://kaiyfa.github.io/password-generator/',
    text: 'TThis application may generate a random password based on the criteria you specify'
  }

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        {
          data.map(({id, image, title, github, demo, text}) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className='portfolio_item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <div className='portfolio_item-cta'>
                  <a href="https://github.com" className='btn' target='blank'>Github</a>
                  <a href="https://kaiyfa.github.io/" className='btn btn_primary' target='blank'>Live Demo</a>
                </div>
              </article>)
          })
        }
      </div>
    </section>
  )
}






export default Portfolio;
