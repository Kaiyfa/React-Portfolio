import React from 'react';
import { Card } from "react-bootstrap";

function ProjectCard(props) {
    return (

        <Card>
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/${props.image}`} alt="Screenshot of the project." />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    <a href={props.demo} target={"_blank"}>Demo</a> • <a href={props.repo} target={"_blank"}>GitHub Repo</a>
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">{props.text}</small>
            </Card.Footer>
        </Card>

    )
}

export default ProjectCard;