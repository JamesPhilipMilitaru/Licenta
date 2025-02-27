import React, { useEffect, useState } from "react";
import "./TestsPage.css";
import { useHistory, useLocation } from "react-router-dom";
import NavBar from "./NavBar";

interface LocationState {
  username: string;
}

function TestsPage() {
  const history = useHistory();
  const location = useLocation<LocationState>();
  const { username } = location.state;

  const handleClick = (category: string) => {
    history.push(`/test`, { username: username, category: category });
  };

  const [windowFullyVisible, setWindowFullyVisible] = useState(true);

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

  const neuralImage = "./src/assets/neural.png";
  const binaryImage = "./src/assets/binary.png";
  const algorithmImage = "./src/assets/algorithm.png";
  const cheiasolImage = "./src/assets/cheia-sol.jpg";
  const preferencesImage = "./src/assets/preferences.png";
  const noteImage = "./src/assets/note.png";

  return (
    <div>
      <NavBar username={username}></NavBar>
      {windowFullyVisible && (
        <img
          className="img-top-left"
          style={{ height: "80px" }}
          src={neuralImage}
          alt="Algorithm"
        />
      )}
      {windowFullyVisible && (
        <img
          className="img-top-rightt"
          style={{ height: "80px" }}
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
        TESTE
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
          <h2>Tobe-percuție</h2>
          <span>
            <b>
              <span onClick={() => handleClick("Elemente de bază")}>
                Componentele unui set de tobe
              </span>
              <br />
              <span onClick={() => handleClick("Instrucțiuni")}>
                Ritmuri Pop
              </span>
              <br />
              <span onClick={() => handleClick("Algoritmi Elementari")}>
                Ritmuri Rock
              </span>
              <br />
              <span onClick={() => handleClick("Tablouri unidimensionale")}>
                Ritmuri Country
              </span>
              <br />
              <span onClick={() => handleClick("Tablouri bidimensionale")}>
                Ritmuri pe Tom-uri <br />
              </span>
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
          <span>
            <b>
              <span onClick={() => handleClick("Recursivitate")}>
                Gamele muzicale
              </span>
              <br />

              <span onClick={() => handleClick("Divide Et Impera")}>
               Acordurile gamelor majore
              </span>
              <br />
              <span onClick={() => handleClick("Șiruri de caractere")}>
                Acordurile gamelor minore
              </span>
              <br />
              <span onClick={() => handleClick("Coada")}>Ritmuri</span>
              <br />
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
          <h2>Teorie muzicala</h2>
          <span>
            <b>
              <span onClick={() => handleClick("Note muzicale")}>
                {" "}
               Note muzicale
              </span>
              <br />
              <span onClick={() => handleClick("Elemente de baza")}>
                Durata notelor
              </span>
              <br />
              <span onClick={() => handleClick("Istoria muzicii")}>
                {" "}
                Istoria muzicii
              </span>

              <br />
            </b>
          </span>
        </div>
        {windowFullyVisible && (
          <>
            <img
              className="img-top-right"
              style={{ height: "80px" }}
              src={algorithmImage}
              alt="Binary"
            />
            <img
              className="img-bottom-right"
              style={{ height: "80px" }}
              src={preferencesImage}
              alt="Binary"
            />
            <img
              className="img-bottom-left"
              style={{ height: "80px" }}
              src={cheiasolImage}
              alt="Binary"
            />
            <img
              className="img-bottom-left-left"
              style={{ height: "80px" }}
              src={noteImage}
              alt="Binary"
            />
          </>
        )}
      </div>
      <div></div>
    </div>
  );
}

export default TestsPage;
