import React, { useEffect, useState } from "react";
import "./Test.css"; // Import your custom CSS file
import { Redirect, useLocation } from "react-router-dom";
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

  
  const cheiasolImage = "./src/assets/cheia-sol.jpg";
  const noteImage = "./src/assets/note.png";
  const drumstickerImage = "./src/assets/drumsticker.png";
  const elguitarImage = "./src/assets/electricguitar.png";

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
          pathname: `/structura-unei-chitari`,
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
          pathname: `/elemente-de-baza`,
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
              Despre chitară
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
            </b>
          </span>
        </div>
        {windowFullyVisible && (
          <>
            <img
              className="img-top-right"
              style={{ height: "12vh"}}
              src={cheiasolImage}
              alt="Binary"
            />
            <img
              className="img-bottom-right"
              style={{ height: "12vh" }}
              src={drumstickerImage}
              alt="Binary"
            />
            <img
              className="img-bottom-left"
              style={{ height: "12vh" }}
              src={elguitarImage}
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
