import React from "react";
import "../styles/style.css";
import { UncontrolledCarousel } from "reactstrap";
function MainHeader() {
  const items = [
    {
      src: "/assets/image/r1.png",
      key: "1",
    },
    {
      src: "/assets/image/r4.png",
      key: "2",
    },
    {
      src: "/assets/image/r7.png",
      key: "3",
    },
    {
      src: "/assets/image/r2.png",
      key: "4",
    },
    {
      src: "/assets/image/r5.png",
      key: "5",
    },
    {
      src: "/assets/image/r3.png",
      key: "6",
    },
  ];
  return (
    <div className="head ">
      <div className="inside ">
        <UncontrolledCarousel
          className="hide "
          items={items}
          style={{ width: "20%", borderRadius: "50%" }}
        />
      </div>
      <hr />
    </div>
  );
}

export default MainHeader;
