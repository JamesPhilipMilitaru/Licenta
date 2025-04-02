import React from "react";
import "./Lectie.css"; // Import your custom CSS file
import { Button } from "react-bootstrap";
import "./Componentele unui set de tobe.css";
import { useState } from "react";
import { Redirect} from "react-router-dom";
import { useLocation } from "react-router-dom";
import RedirectionareLectii from "./RedirectionareLectii";
import Carusel from "./Carusel";

interface LocationState {
  username: string;
}
function DurataNotelor() {
  const location = useLocation<LocationState>();
  const { username } = location.state;
  const bassdrumImage = "./src/assets/bassdrumsticker.png";
  const learningImage = "./src/assets/elearning.png";



  const [redirectPrev, setRedirectPrev] = useState<boolean>(false);
  const [redirectFollow, setRedirectFollow] = useState<boolean>(false);
  const handleButtonFollow = () => {
    setRedirectFollow(true);
  };

  if (redirectFollow) {
    return (
      <Redirect
        to={{
          pathname: `/teoria-grafurilor`,
          state: { username: username },
        }}
      />
    );
  }

  const handleButtonPrev = () => {
    setRedirectPrev(true);
  };

  if (redirectPrev) {
    return (
      <Redirect
        to={{
          pathname: `/greedy`,
          state: { username: username },
        }}
      />
    );
  }

  const text = `
  Nota întreagă - 4 timpi
  Doime - 2 timpi
  Pătrime - 1 timp
  Optime - 1/2 timp
  Șaisprezecime - 1/4 timp
  
  `;

  const text1=`
  
      Pauză întraegă - 4 timpi
      Pauză de doime - 2 timpi
      Pauză de pătrime - 1 timp
      Pauză de optime -  1/2 timp
      Pauză de șaisprezecime - 1/4 timp

        `;
  return (
    <div className="lectie-container">
      <header>
        <h1>Durata notelor</h1>
      </header>
      <main>
        <section>
          <RedirectionareLectii
            username={username}
            clasa={"11"}
          ></RedirectionareLectii>
        </section>

        <section>
          Durata notelor muzicale reprezintă timpul pentru care fiecare notă este menținută într-o piesă muzicală. Aceasta este una dintre cele mai importante părți ale teoriei muzicale, deoarece influențează ritmul și structura unei melodii.<br></br>
         <br></br>
        </section>

         <h2>Tipuri de note și durata lor</h2>
          <section>
          Fiecare notă muzicală are o valoare ritmică diferită. Iată principalele tipuri de note și duratele acestora:
          <br></br>
          <br></br>
          <div
            style={{
              display: "flex",
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "0px",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text}</pre>
          </div>
          </section>

        <section>
          <h3>Punctarea notelor</h3>
          O notă poate avea un punct adăugat lângă ea, ceea ce îi prelungește durata cu jumătate din valoarea inițială. De exemplu:
          <ul>
            <li>O notă de 2 timpi punctată va dura 3 timpi.</li>
            <li>O notă de 1 timp punctată va dura 1,5 timpi.</li>
          </ul>
          <br></br>
          
          <h3>Pauzele muzicale</h3>
          
          La fel ca notele, și pauzele au durate specifice:<br></br>
          <br></br>
          <div
            style={{
              display: "flex",
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "0px",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text1}</pre>
          </div>
        </section>

        <section>
            <h2>Concluzie</h2>
            Durata notelor este esențială pentru crearea ritmului și a dinamicii în muzică. Stăpânirea acestor concepte te va ajuta să interpretezi și să compui muzică mai precis și expresiv.
        </section>
        <Carusel category="Programare dinamică" username={username}></Carusel>
        <img
          className="img-top-right"
          style={{ height: "70px" }}
          src={bassdrumImage}
          alt="Binary"
        />
        <img
          className="img-top-right-right"
          style={{ height: "70px" }}
          src={learningImage}
          alt="Binary"
        />
      </main>
      <footer>
        <Button
          variant="primary"
          type="submit"
          style={{
            width: "100px", // Setează înălțimea butonului
            backgroundColor: "#333dd7b8", // Setează culoarea de fundal verde
            marginRight: "0px",
          }}
          onClick={handleButtonPrev}
        >
          Înapoi
        </Button>
        <Button
          variant="primary"
          type="submit"
          style={{
            width: "100px",
            backgroundColor: "#333dd7b8",
            marginRight: "0px",
            display: "flex",
            alignItems: "center", // Aliniaza textul în mijlocul butonului
            justifyContent: "center", // Aliniaza textul și în orizontală
          }}
          onClick={handleButtonFollow}
        >
          Următorul
        </Button>
      </footer>
    </div>
  );
}

export default DurataNotelor;
