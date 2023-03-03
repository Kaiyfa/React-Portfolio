import React from "react";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";
import IMG from '../assets/Me.JPG'
import CV from '../assets/Adama-Sall.pdf'
import '../style.css'

function Home() {
    return (
        <Container id="home" className="align-center" style={{ paddingBottom: "300px" }}>
            <Row>
                <Col size="sm-9">
                    <Jumbotron id='jumbotron'>
                        <h1 style={{ borderBottom: "solid 1px", marginBottom: "25px" }}>Hello, Community!</h1>
                        <div className='me'>
                            <img src={IMG} alt='me' />
                        </div>
                        <p className="lead">Hi My name is Adama Sall, and I am a web developer.</p>

                        <p className="lead">Visit my portfolio to see how far I've come on my journey.</p>
                        
                            <a className="btn btn-outline-info mb-3" href="/react_portfolio/portfolio" role="button">Portfolio</a>
                            <br />
                            <a href={CV} className="btn btn-primary" target="blank" > My
                                Resume</a>
                        
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;
