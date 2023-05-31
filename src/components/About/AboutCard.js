import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rajendar Mittapelly </span>
            from <span className="purple"> Telangana, India.</span>
            <br /> I am a Software Engineer working in Reliance Jio in Bangalore as a Backend developer.
            <br />
            Additionally, I am a chad.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games such as Cricket, Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Poems and romantic telugu songs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling in your dreams
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Rajendar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
