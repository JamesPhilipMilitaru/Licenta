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
    if (lectie == "Elemente de bază") {
      pathnamee = "/lectii-clasa-a-noua";
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
    if (lectie == "Subprograme") {
      pathnamee = "/subprograme";
    }

    if (lectie == "Recursivitate") {
      pathnamee = "/recursivitate";
    }
    if (lectie == "Divide Et Impera") {
      pathnamee = "/divide-et-impera";
    }
    if (lectie == "Șiruri de caractere") {
      pathnamee = "/siruri-de-caractere";
    }
    if (lectie == "Stiva") {
      pathnamee = "/stiva";
    }
    if (lectie == "Coada") {
      pathnamee = "/coada";
    }
    if (lectie == "Backtracking") {
      pathnamee = "/backtracking";
    }
    if (lectie == "Greedy") {
      pathnamee = "/greedy";
    }
    if (lectie == "Programare dinamică") {
      pathnamee = "/programare-dinamica";
    }
    if (lectie == "Teoria grafurilor") {
      pathnamee = "/teoria-grafurilor";
    }
    if (lectie == "Arbori binari") {
      pathnamee = "/arbori";
    }
    if (pathnamee) {
      history.push({
        pathname: pathnamee,
        state: { username: username },
      });
    }
  };

  var vector9 = [
    "Componentele unui set de tobe",
    "Exerciții ritmice",
    "Ritmuri pop",
    "Ritmuri rock",
    "Ritmuri country",
    "Ritmuri pe tom-uri",
    "Lecții",
  ];

  var vector10 = [
    "Structura unei chitari",
    "Gamele muzicale",
    "Acordurile gamelor majore",
    "Acordurile gamelor minore",
    "Ritmuri",
    "Cantece de exersat",
    "Capodastrul",
    "Lecții",
  ];

  var vector11 = [
    "Elemente de baza",
    "Note muzicale",
    "Durata notelor",
    "Istoria muzicii",
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
