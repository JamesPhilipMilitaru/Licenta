import React from "react";
import "./Lectie.css"; // Import your custom CSS file
import { Button } from "react-bootstrap";
import "./Componentele unui set de tobe.css";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import { useLocation } from "react-router-dom";
import RedirectionareLectii from "./RedirectionareLectii";
import Carusel from "./Carusel";

interface LocationState {
  username: string;
}
function ExercitiiRitmice() {
  const location = useLocation<LocationState>();
  const { username } = location.state;
  const metronomeImage = "./src/assets/metronome.jpeg";
  const [redirectPrev, setRedirectPrev] = useState<boolean>(false);
  const [redirectFollow, setRedirectFollow] = useState<boolean>(false);
  const handleButtonFollow = () => {
    setRedirectFollow(true);
  };

  if (redirectFollow) {
    return (
      <Redirect
        to={{
          pathname: `ritmuri-pop`,
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
          pathname: `/componentele-unui-set-de-tobe`,
          state: { username: username },
        }}
      />
    );
  }


  return (
    <div className="lectie-container">
      <header>
        
        <h1>Exercitii ritmice </h1>
        <div style={{ display: "block", float: "left" }}>
  <img style={{ height: "160px" }} src={metronomeImage} alt="Binary" />
  <p style={{ marginRight: "60px" }}></p>
</div>

      </header>
      <main>
        <section>
          <RedirectionareLectii
            username={username}
            clasa={"9"}
          ></RedirectionareLectii>
        </section>
        <section>
          <p>
          Exercițiile ritmice sunt fundamentale pentru dezvoltarea 
          abilităților unui toboșar. Acestea contribuie la îmbunătățirea
          coordonării, vitezei, preciziei și controlului asupra instrumentului.<br></br>
           <br></br>
            <h2>1.Exercitii pentru coordonare</h2>
            <br></br>
           a.Exercițiul pentru echilibru
           <li>Folosind premierul (Snare Drum), alternează mâinile în mod egal (dreapta-stânga, dreapta-stânga)
             pentru a dezvolta echilibrul între ele.</li>
           <li>Începe cu un tempo lent și crește treptat viteza.</li>
           <br></br>
           b. Exercițiul pentru independență
           <li>Combinație între toba mare, premier și hi-hat pentru a îmbunătăți coordonarea membrelor.</li>
           <li>Exercițiul clasic: piciorul drept pe toba mare, mâna stângă pe premier, mâna dreaptă pe hi-hat.</li>
           <br></br>
           <h2>Exerciții pentru precizia ritmică</h2>
           a.Exercițiul cu metronom
           <li>Alege un tempo lent și execută ritmuri constante pentru a-ți îmbunătăți precizia.</li>
           <li>Folosește sundiviziuni precum optimi și șaisprezecimi pentru varietate</li>
           <br></br>
           b.Exercițiul de accentuare
           <li>Redă ritmuri simple, accentuând fiecare a doua sau a patra notă pentru a îmbunătăți controlul dinamicii.</li>
         <h2>Exerciții pentru viteză și rezistență</h2>
         a.Execițiul rudimentar
         <li>Practicarea rudimentelor de bază: paradiddle, single stroke roll, double stroke roll.</li>
         <li>Exercițiile trebuie executate progresiv, crescând viteza treptat.</li>
          <br></br>
          b.Exercițiul de rezistență
          <li>Executarea unui ritm constant timp de câteva minute fără întrerupere pentru a dezvolta forța și anduranța.</li>
          </p>
        </section>
       
        <h2>Concluzie</h2>
        Exercițiile ritmice sunt esențiale pentru orice toboșar, contribuind la perfecționarea tehnicii și a expresivității muzicale. Practicarea regulată a acestora duce la un control 
        mai bun asupra instrumentului și la o interpretare mai precisă.
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

export default ExercitiiRitmice;
