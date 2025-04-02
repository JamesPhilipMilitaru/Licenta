import React, { useState, useEffect } from "react";
import ProfilePicture from "./ProfilePicture";
import Table from "./Table";
import { Form, FormControl, Button } from "react-bootstrap";
import { Redirect, useHistory } from "react-router-dom";
import "./RedirectionareLectii.css";
import "./ProfilePicture.css";

interface Props {
  username: string;
  clasa: string;
}

const RedirectionareLectii: React.FC<Props> = ({ username, clasa }) => {
  const history = useHistory();
  const profileImage = "./src/assets/profile.png";
  const lessonImage = "./src/assets/lesson.png";
  const testImage = "./src/assets/testn.png";
  const logOutImage = "./src/assets/log-out.png";
  console.log(clasa);
  // Function to handle redirection with state

  const handleClick = (lectie: string, state: any) => {
    console.log(lectie);
    var pathnamee;
    if (lectie == "Componentele unui set de tobe") {
      pathnamee = "/componentele-unui-set-de-tobe";
    }
    if (lectie == "Exerciții ritmice") {
      pathnamee = "/exerciții-ritmice";
    }
    if (lectie == "Ritmuri pop") {
      pathnamee = "/ritmuri-pop";
    }
    if (lectie == "Ritmuri rock") {
      pathnamee = "/ritmuri-rock";
    }
    if (lectie == "Ritmuri country") {
      pathnamee = "/ritmuri-country";
    }
    if (lectie == "Ritmuri pe tom-uri") {
      pathnamee = "/ritmuri-pe-tomuri";
    }
    if (lectie == "Lecții") {
      pathnamee = "/lessons";
    }
    if (lectie == "StructuraUneiChitari") {
      pathnamee = "/structura-unei-chitari";
    }

    if (lectie == "Gamele muzicale") {
      pathnamee = "/gamele-muzicale";
    }
    if (lectie == "Acordurile gamelor majore") {
      pathnamee = "/acordurile-gamelor-majore";
    }
    if (lectie == "Acordurile gamelor minore") {
      pathnamee = "/acordurile-gamelor-minore";
    }
    if (lectie == "Ritmuri") {
      pathnamee = "/ritmuri";
    }
    if (lectie == "Cantece de exersat") {
      pathnamee = "/cantece-de-exersat";
    }
    if (lectie == "Elemente de baza") {
      pathnamee = "/elemente-de-baza";
    }
    if (lectie == "Note muzicale") {
      pathnamee = "/note-muzicale";
    }
    if (lectie == "Durata notelor") {
      pathnamee = "/durata-notelor";
    }
    if (lectie == "Istoria muzicii") {
      pathnamee = "/istoria-muzicii";
    }
    if (lectie == "Simboluri muzicale") {
      pathnamee = "/simboluri muzicale";
    }
    if (pathnamee) {
      history.push({
        pathname: pathnamee,
        state: { username: username },
      });
    }
  };

  const vector9 = [
    "Componentele unui set de tobe",
    "Exerciții ritmice",
    "Ritmuri pop",
    "Ritmuri rock",
    "Ritmuri country",
    "Ritmuri pe tom-uri",
    "Lecții",
  ];

  const vector10 = [
    "Structura unei chitari",
    "Gamele muzicale",
    "Acordurile gamelor majore",
    "Acordurile gamelor minore",
    "Ritmuri",
    "Cantece de exersat",
    "Lecții",
  ];

  const vector11 = [
    "Elemente de baza",
    "Note muzicale",
    "Durata notelor",
    "Lecții",
  ];

  return (
    <div className="divForLectii">
      <div
        style={{
          marginTop: "30px",
          marginLeft: "20px",
        }}
      >
        <br></br>
        {clasa === "9" &&
          vector9.map((lesson, index) => (
            <div key={index}>
              <b>
                <div onClick={() => handleClick(lesson, username)}>
                  {lesson}
                  <br></br>
                  <br></br>
                </div>
              </b>
            </div>
          ))}
        {clasa === "10" &&
          vector10.map((lesson, index) => (
            <div key={index}>
              <b>
                <div onClick={() => handleClick(lesson, username)}>
                  {lesson}
                  <br></br>
                  <br></br>
                </div>
              </b>
            </div>
          ))}
        {clasa === "11" &&
          vector11.map((lesson, index) => (
            <div key={index}>
              <b>
                <div onClick={() => handleClick(lesson, username)}>
                  {lesson}
                  <br></br>
                  <br></br>
                </div>
              </b>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RedirectionareLectii;
