import React from "react"
import Card from "react-bootstrap/Card"
import MaxH from './MaxH.png'
import { CardText } from "react-bootstrap";

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        <Card.Img variant="top" src={MaxH} />
        <Card.Body>
            <Card.Title>Max Holleran</Card.Title>
            <CardText>
                My Name is Max and I like to Ski
            </CardText>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard