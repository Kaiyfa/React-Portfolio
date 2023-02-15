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
                    <Jumbotron>
                        <h1>Hello, Community!</h1>
                        <img className="img-fluid float-right rounded-circle portrait" src={IMG}
                            alt="Self Portrait" style={{ maxWidth: "30%", maxHeight: "auto" }} />
                        <p className="lead">Hi My name is Adama Sall, and I am a web developer.</p>

                        <p className="lead">Visit my portfolio to see how far I've come on my journey.</p>
                        <p className="lead">
                            <a className="btn btn-primary" href='/portfolio'>Portfolio</a>
                            <br />
                            <a href={CV} className="btn" target="blank" > My
                                Resume</a>
                        </p>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;