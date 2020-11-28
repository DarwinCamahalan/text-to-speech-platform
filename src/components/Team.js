import React from "react";
import "../styles/style.css";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "reactstrap";
export default function Team() {
  const team1 = [
    {
      img: "/assets/team/team1-circle.png",
      name: "Nimfa Sumalinog ",
      to: "",
    },
    {
      img: "/assets/team/team2-circle.png",
      name: "Darwin Camahalan",
    },
    {
      img: "/assets/team/team3-circle.png",
      name: "John Wendell Go",
      to: "",
    },

    {
      img: "/assets/team/team4-circle.png",
      name: "Yvonne Yee ",
      to: "",
    },
  ];
  const team2 = [
    {
      img: "/assets/team/1.jpg",
      name: "Casey Joyce Bendijo",
      to: "",
    },
    {
      img: "/assets/team/team2-circle.png",
      name: "Darwin Camahalan",
      to: "",
    },
    {
      img: "/assets/team/team6-circle.jpg",
      name: "Lester Hanz Beja",
      to: "",
    },

    {
      img: "/assets/team/1.jpg",
      name: "Dave Leonard Jaguit",
      to: "",
    },
    {
      img: "/assets/team/1.jpg",
      name: "Aila Marie Casing",
      to: "",
    },
    {
      img: "/assets/team/team9-circle.jpg",
      name: "Irvin Francis Go",
      to: "",
    },
  ];
  let myaudio3 = new Audio("/assets/music/wow.mp3");
  let myaudio2 = new Audio("/assets/music/yooo.mp3");
  let myaudio = new Audio("/assets/music/clap.mp3");
  let myaudio4 = new Audio("/assets/music/stop.mp3");
  let myaudio5 = new Audio("/assets/music/bruh.mp3");
  const start = () => {
    myaudio.play();
    myaudio2.play();
  };

  const start2 = () => {
    myaudio3.play();
    myaudio3.volume = "1";
    myaudio.play();
  };
  const stop = () => {
    myaudio4.play();
  };
  const stop2 = () => {
    myaudio5.play();
  };
  return (
    <div className="py-5 mb-5 team">
      <Helmet>
        <title>Team Members 🤣</title>
      </Helmet>
      <audio autoPlay loop>
        <source src="/assets/music/team-bg.mp3" />
      </audio>
      <h1
        className="text-center"
        style={{
          fontFamily: "Arial",
          fontSize: "30px",
          color: "#fff",
          fontWeight: "bold",
        }}
      >
        <p className="mt-3" style={{ fontFamily: "Nosifer", color: "#6dd5ed" }}>
          Text to Speech <br />
          <span style={{ fontFamily: "Goldman", color: "red" }}>2077</span>
        </p>
      </h1>
      <h1
        className="text-center py-5"
        style={{ fontFamily: "VT323", color: "#6dd5ed" }}
      >
        Numericals Team
      </h1>
      <Container>
        <Col>
          <Row>
            {team1.map((team1, index) => (
              <Col key={index} className="team-image">
                <img
                  onMouseEnter={start}
                  onMouseLeave={stop}
                  className=" mx-auto d-block"
                  src={team1.img}
                  alt={team1.img}
                />
                <p className="text-center">{team1.name}</p>
              </Col>
            ))}
          </Row>
          <hr />
          <h1
            className="text-center pt-5"
            style={{ fontFamily: "VT323", color: "#6dd5ed" }}
          >
            Operating System Team
          </h1>
          <Row className="py-5 mt-5">
            {team2.map((team2, index) => (
              <Col key={index} xl="3" className="team-image">
                {/* <a href={team2.to}> */}
                <img
                  onMouseEnter={start2}
                  onMouseLeave={stop2}
                  className="mx-auto d-block"
                  src={team2.img}
                  alt={team2.img}
                />
                <p className="text-center">{team2.name}</p>
                {/* </a> */}
              </Col>
            ))}
          </Row>
        </Col>
      </Container>
    </div>
  );
}
