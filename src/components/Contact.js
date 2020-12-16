import React from "react";
import { Helmet } from "react-helmet";
import "../styles/style.css";
import { Container } from "reactstrap";
export default function Contact() {
  return (
    <>
      <div>
        <Helmet>
          <title>Contact Us</title>
        </Helmet>

        <Container
          className="py-5 mt-5 text-center text-white "
          style={{ fontFamily: "Poppins" }}
        >
          <img
            className="rounded-pill mb-5"
            src="/assets/team/team2-circle.png"
            alt="developer"
            width="250px"
          />
          <h2>Contact Our Fullstack Developer.</h2>
          <h6 className="py-3">
            {" "}
            <span>Name: </span> Darwin L. Camahalan
          </h6>
          <h6 className="py-3">
            {" "}
            <span>Email: </span> camahalandarwin@gmail.com
          </h6>
          <h6 className="py-3">
            {" "}
            <span>Contact Number: </span> +639754270609
          </h6>
          <h6 className="py-3">
            {" "}
            <span>LinkedIn: </span>{" "}
            <a
              href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHsZbq48Zt-IQAAAXZqT7u4026bmjEh8la9I3FkMNd-aYwQw-AvzQAlOl1fkWhgVQ6IS7CtdC-Zv5Se8RaGAZ3G26b5Se9i6yWoIMa_hTCtDdI-b0EkjVNwDge-UfMrtju08w8=&originalReferer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2FDarwinCamahalan"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Darwin Camahalan
            </a>{" "}
          </h6>
          <h6 className="py-3">
            {" "}
            <span>Facebook: </span>{" "}
            <a
              href="https://www.facebook.com/darpax101/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Darwin
            </a>{" "}
          </h6>
        </Container>
      </div>
    </>
  );
}
