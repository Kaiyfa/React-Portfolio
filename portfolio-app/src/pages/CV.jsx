import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../style.css'
import { BsLinkedin } from 'react-icons/bs'
import { DiGithubAlt } from 'react-icons/di'


function Resume() {
    return (
        <Container id="resume" style={{ backgroundColor: "whitesmoke" }}>
            <Row>
                <Col size="sm-9">
                    <h1 style={{ borderBottom: "solid 1px", }}>Resume</h1>

                    <h2 style={{ textAlign: "center", fontWeight: "bold" }}>Adama Sall</h2>
                    <div className="text-center">
                        <a className="d-inline" href="https://github.com/kaiyfa" target={"_blank"} rel={"noopener noreferrer"}><DiGithubAlt /><i
                            className="fab fa-github"></i> GitHub • </a>
                        <a className="d-inline" href="https://www.linkedin.com/in/adsall" target={"_blank"}
                            rel={"noopener noreferrer"}><BsLinkedin /><i className="fab fa-linkedin"></i> LinkedIn • </a>

                    </div>
                    <h3 className="mt-3" style={{ textAlign: "center", fontWeight: "bold" }}>Summary</h3>
                    <p>front-end web developer with an electromechanics background (over 5 years of experience) tackling
                        complex bugs with a rational problem-solving approach. graduated from the Edex Trilogy Bootcamp
                        and developed skills in JavaScript, CSS, React.js, Bootstrap, jQuery, and responsive web design. having
                        a thirst for lifelong learning, collaboration, and problem solving, and being equally enthusiastic about
                        developing applications that help ordinary people make their lives easier. In order to give the best user
                        experience possible, each project should strive to be the best at engaging the audience. I am excited
                        to use my abilities in the future as part of a fast-paced, quality-driven team to create better web
                        experiences. I'm excited to put my precise attention to detail and technical talents to work for a
                        company that values growth, learning, and making a major contribution.
                    </p>
                    <h3 style={{ textAlign: "center", fontWeight: "bold" }}>Technical Skills</h3>
                    <ul>
                        <li>Tools: Express, React, Node, Query, Bootstrap, Server-side APIs, Enzyme, Jest, AJAX, and JSON </li>
                        <li>Languages: JavaScript ES6, CSS, HTML5, Typescript</li>
                        <li>Applications: GitHub</li>
                        {/* <li>Spoken Languages: English, French</li> */}
                    </ul>

                    <h3 style={{ textAlign: "center", fontWeight: "bold" }}>Projects</h3>
                    <ul>
                        <li>PASSWORD GENERATOR: HTTPS://GITHUB.COM/KAIYFA/PASSWORD-GENERATOR|HTTPS://KAIYFA.GITHUB.IO/PASSWORD-GENERATOR/.
                            SUMMARY: An employee can generate a random password based on criteria they’ve selected.
                            TOOLS: HTML, CSS, JavaScript, Bootstrap, GoogleFonts, wireframing
                            ROLE: SOLE AUTHOR
                        </li>
                        <li>WEB QUIZ APPLICATION: HTTPS://GITHUB.COM/KAIYFA/WEB_APIS-QUIZ |HTTPS://KAIYFA.GITHUB.IO/WEB_APIS-QUIZ/
                            SUMMARY: A timed, multiple-choice coding quiz that keeps track of high scores and quiz takers' initials
                            TOOLS: HTML, CSS, JavaScript, APIs
                            ROLE: SOLE AUTHOR
                        </li>
                        <li>PLANNER APPLICATION: HTTPS://GITHUB.COM/KAIYFA/JQUERY-PLANNER-APP |HTTPS://KAIYFA.GITHUB.IO/JQUERY-PLANNER-APP/
                            SUMMARY: An employee can generate a random password based on criteria they’ve selected.
                            TOOLS: HTML, CSS, JavaScript, Bootstrap, GoogleFonts, wireframing
                            ROLE: SOLE AUTHOR
                        </li>
                    </ul>
                    <h3 style={{ textAlign: "center", fontWeight: "bold" }}>Experience</h3>

                    <p><h5>Electromechanical Technician/Full time Employee</h5> Jun. 2019 – Nov. 2020
                        Sabodala Gold Operations Kedougou, Senegal
                        The main duty was troubleshooting breakdowns and performing preventive maintenance.
                        Key Accomplishments:
                    </p>
                    <ul>
                        <li>●Analyzed quality issues concerning a loader WA900 in a rational and methodical manner, saving
                            the firm money USD $225,000.
                        </li>
                        <li>●Led a group of 4 people for four weeks in a row, offering excellent levels of equipment
                            availability (97.8%) to our internal client while sticking to the Mean Time Between Failures,
                            resulting in a strong production bonus for all colleagues the following month.
                        </li>
                        <li>●Held a safety meeting for our department presentation for four weeks in a row (every morning
                            before beginning activities) due to my ease of public speaking and English proficiency.
                        </li>
                        <li>●Received a 5,000 CFA safety prize for holding and conducting a housekeeping operation in an
                            abandoned property.</li>
                    </ul>
                    <p> <h5>Senior Electromechanical Technician/Full-Time Employee</h5> April 2017–May 2019
                        Soeco/Poncet Thiès, Sénégal
                        I supervised, maintained, and ran a crushing unit, including machine operator maintenance.
                        Key Accomplishments:
                    </p>
                    <ul>
                        <li>● Installation of a crusher unit from the ground up in two months.
                        </li>
                        <li>● Improved and enlarged a maintenance notebook in Microsoft Excel to keep track of records
                        </li>
                        <li>● launched a new unit of two Lokotrack LT106 and LT200 HP mobile crushers that improved
                            production from 90–1200 tons per hour to 80–2500 tons per hour.</li>
                        <li>● Achieved annual goal targets in six months with both production quality and unit availability
                            allowing Soeco to open another pit and invest in new machinery and projects.
                        </li>
                        <li>● Controlling the supply chain to avoid fuel, spare parts, and oil shortages
                        </li>
                    </ul>
                    <h3 style={{ textAlign: "center", fontWeight: "bold" }}>Education</h3>
                    <p><h5>Front-End web Development Certificate - Edx Trilogy Education Services-2022-2023</h5>
                        ● A 16-week intensive program focused on developing technical programming abilities in HTML5,
                        CSS, Javascript, JQuery, Bootstrap, Node.js, Express,
                        and ReactJS.
                    </p>
                    <p><h5>Advanced Technician's Certificate in Heavy Equipment Maintenance</h5> ● Senegal-Japan Training Center
                        Dakar, Senegal 2014 - 2016
                    </p>
                    <p><h5>Baccalaureate (High school diploma) in Mechanical Manufacturing</h5> ● Technical School Maurice
                        Delafosse Dakar, Senegal 2009 - 2010
                    </p>
                    <h3 style={{ textAlign: "center", fontWeight: "bold" }}>Additiona Skills</h3>
                    <ul> Technology:
                        <li>● Office Suite (Word, Excel, PowerPoint)</li>
                        <li>● Google slide,drive and doc</li>
                        Languages:
                        <li> ● English: Intermediate level grade 7.5 on IELTS</li>
                        <li>● French: Fluent</li>
                    </ul>
                    <p>References are available on request.</p>

                </Col>
            </Row>
        </Container>
    )
}

export default Resume;