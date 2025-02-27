import React, { useEffect, useState } from "react";
import "./Test.css"; // Import your custom CSS file
import { Redirect, useLocation, useHistory } from "react-router-dom";
import "./SubmitPage.css";
import "./Lessons.css";
import NavBar from "./NavBar";

interface LocationState {
  username: string;
}

function Lessons() {
  const location = useLocation<LocationState>();
  const { username } = location.state;
  const [redirect9, setRedirect9] = useState<boolean>(false);
  const [redirect10, setRedirect10] = useState<boolean>(false);
  const [redirect11, setRedirect11] = useState<boolean>(false);
  const [windowFullyVisible, setWindowFullyVisible] = useState(true);

  
  const algorithmImage = "./src/assets/algorithm.png";
  const binaryImage = "./src/assets/binary.png";
  const noteImage = "./src/assets/note.png";
  const preferencesImage = "./src/assets/preferences.png";
  const guitarImage = "./src/assets/guitar.png";

  useEffect(() => {
    const handleResize = () => {
      setWindowFullyVisible(window.innerWidth >= 1200); // Adjust this value as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleButton9 = () => {
    setRedirect9(true);
  };

  if (redirect9) {
    return (
      <Redirect
        to={{
          pathname: `/componentele-unui-set-de-tobe`,
          state: { username: username },
        }}
      />
    );
  }

  const handleButton10 = () => {
    setRedirect10(true);
  };

  if (redirect10) {
    return (
      <Redirect
        to={{
          pathname: `/subprograme`,
          state: { username: username },
        }}
      />
    );
  }

  const handleButton11 = () => {
    setRedirect11(true);
  };

  if (redirect11) {
    return (
      <Redirect
        to={{
          pathname: `/backtracking`,
          state: { username: username },
        }}
      />
    );
  }

  return (
    <div>
      <NavBar username={username}></NavBar>
      {windowFullyVisible && (
        <img
          className="img-top-left"
          style={{ height: "12vh" }}
          src={noteImage}
          alt="Algorithm"
        />
      )}
      {windowFullyVisible && (
        <img
          className="img-top-rightt"
          style={{ height: "12vh" }}
          src={binaryImage}
          alt="Binary"
        />
      )}
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          marginRight: "30px",
          marginLeft: "30px",
          marginBottom: "70px",
        }}
      >
        Alegere instrument
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginRight: "30px",
          marginLeft: "30px",
        }}
      >
        <div
          style={{
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
            paddingLeft: "40px",
            paddingRight: "40px",
            paddingBottom: "20px",
          }}
        >
          <h2>Tobe - percuție</h2>
          <span onClick={handleButton9}>
            <b>
              Componentele unui set de tobe
              <br />
              Exerciții ritmice
              <br />
              Ritmuri Pop
              <br />
              Ritmuri Rock
              <br />
              Ritmuri Country <br />
              Ritmuri pe Tom-uri
            </b>
          </span>
        </div>
        <div
          style={{
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
            paddingLeft: "40px",
            paddingRight: "40px",
            paddingBottom: "40px",
          }}
        >
          <h2>Chitară</h2>
          <span onClick={handleButton10}>
            <b>
              Structura unei chitări
              <br />
              Gamele muzicale
              <br />
              Acordurile gamelor majore
              <br />
              Acorudrile gamelor minore
              <br />
              Ritmuri
              <br />
              Cântece de exersat
              <br />
              Capodastrul <br />
            </b>
          </span>
        </div>
        <div
          style={{
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
            paddingLeft: "40px",
            paddingRight: "40px",
            paddingBottom: "20px",
          }}
        >
          <h2>Teorie muzicală</h2>
          <span onClick={handleButton11}>
            <b>
              Elemente de bază
              <br />
              Note muzicale
              <br />
              Durata notelor
              <br />
              Istoria muzicii
              <br />
            </b>
          </span>
        </div>
        {windowFullyVisible && (
          <>
            <img
              className="img-top-right"
              style={{ height: "12vh" }}
              src={algorithmImage}
              alt="Binary"
            />
            <img
              className="img-bottom-right"
              style={{ height: "12vh" }}
              src={preferencesImage}
              alt="Binary"
            />
            <img
              className="img-bottom-left"
              style={{ height: "12vh" }}
              src={guitarImage}
              alt="Binary"
            />
           
          </>
        )}
      </div>
      <div></div>
    </div>
  );
}

export default Lessons;
