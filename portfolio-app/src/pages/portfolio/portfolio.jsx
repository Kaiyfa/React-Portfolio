import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Portfolio1.jpg'
import IMG2 from '../../assets/Portfolio 2.jpg'
import IMG3 from '../../assets/Portfolio 3.jpg'
import IMG4 from '../../assets/Portfolio 4.jpg'
import IMG5 from '../../assets/Portfolio5.jpg'
import IMG6 from '../../assets/Portfolio6.jpg'



const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency Dashboard & Financia Visualisation',
    github: 'https://github.com/',
    demo: 'https://dribbble.com/shortss/16673715-Crypto-currency-dashboards-and-financia-data-visualisation'

  },
  {
    id: 2,
    image: IMG2,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16580766-Orion-Ul-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'

  },

  {
    id: 4,
    image: IMG4,
    title: 'Maintaining tasks and tracking progress',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
  },

  {
    id: 5,
    image: IMG5,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/15887665-Orion-Ul-kit-Charts-templates-infographics-in-Figma'
  }

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        {
          data.map(({id, title, image, demo, repo, text}) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className='portfolio_item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio_item-cta'>
                  <a href="https://github.com" className='btn' target='blank'>Github</a>
                  <a href="https://dribbble.com/Alien_pixels" className='btn btn_primary' target='blank'>Live Demo</a>
                </div>
              </article>)
          })
        }
      </div>
    </section>
  )
}






export default Portfolio;
