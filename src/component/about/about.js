import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

export default function About(props) {
  const [data, setDate] = useState(props.data);

  let myStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "#042743" : "white",
    border: "2px splid",
    borderColor: props.mode === "dark" ? "white" : "black",
  };

  return (
    <div className="container-fluid">
      <h1
        className="my-2"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        About Us
      </h1>
      {data.map((value) => {
        return (
          <Accordion>
            <Accordion.Item eventKey="0" style={myStyle}>
              <Accordion.Header style={myStyle}>
                <strong>
                  {value.heading} : {value.text.split(" ").length} Words
                </strong>
              </Accordion.Header>
              <Accordion.Body style={myStyle}>{value.text}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        );
      })}
    </div>
  );
}
