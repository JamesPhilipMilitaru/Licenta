import React from "react";
import "./Lectie.css"; // Import your custom CSS file
import { Button } from "react-bootstrap";
import "./Componentele unui set de tobe.css";
import { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
import RedirectionareLectii from "./RedirectionareLectii";
import Carusel from "./Carusel";

interface LocationState {
  username: string;
}
function RitmuriPeTomuri() {
  const location = useLocation<LocationState>();
  const { username } = location.state;
  const bassdrumImage = "./src/assets/bassdrumsticker.png";
  const drumstickerImage = "./src/assets/drumsticker.png";
  
  
  
  const [redirectPrev, setRedirectPrev] = useState<boolean>(false);
  const [redirectFollow, setRedirectFollow] = useState<boolean>(false);
  const handleButtonFollow = () => {
    setRedirectFollow(true);
  };

  if (redirectFollow) {
    return (
      <Redirect
        to={{
          pathname: `/ritmuri-country`,
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
          pathname: `/ritmuri rock`,
          state: { username: username },
        }}
      />
    );
  }

  const text0 = `
      Structură:
    🥁 Kick drum (tobă mare) → pe 1 și 3
    🥁 Snare drum (tobă mică) → pe 2 și 4
    🥁 Tom-uri → în loc de hi-hat, pe optimi\n
`;

  const text1 = `
      Structură:
    🥁 Kick drum → pe 1 și 3
    🥁 Snare drum → pe 2 și 4
    🥁 Tom-uri → pe optimi și șaisprezecimi\n
`;

  const text2 = `
      Structură:
    🥁 Kick drum → pe 1 și 3
    🥁 Floor Tom (Tom 3) → pe 2 și 4
    🥁 Tom-uri → pe optimi\n
`;

  const text3 =  `
    1.Exersează fiecare ritm încet, apoi mărește viteza.
    2.Încearcă să aplici aceste ritmuri în piese rock, pop sau alternative.
    3.Combină-le cu fill-uri pentru variație.
    \n`;

  return (
    <div className="lectie-container">
      <header>
        <h1>Ritmuri pe tom-uri</h1>
      </header>
      <main>
        <section>
          <RedirectionareLectii
            username={username}
            clasa={"9"}
          ></RedirectionareLectii>
        </section>
    <h2>Introducere</h2>
        <section>
        Ritmurile pe tom-uri sunt folosite pentru a crea groove-uri tribale, jungle beats sau pentru a varia ritmurile standard. Acestea implică folosirea tom-urilor în loc de hi-hat sau ride, dând un sunet mai plin și cinematic.
        <br></br>
        <br></br>
        </section>
        <section>
          <h2>1. Ritmul de bază pe tom-uri</h2>
          Acesta este un groove simplu, în care înlocuim hi-hatul cu tom-uri: 
          <br></br>
          <br></br>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              paddingRight: "10px",
              paddingLeft: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text0}</pre>
            
          </div>
        </section>

        <section>
          <h2>2. Ritm tribal pe tom-uri (jungle beat)</h2>
          Acest ritm creează o atmosferă tribală și este folosit în multe piese rock și pop.
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              paddingRight: "10px",
              paddingLeft: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text1}</pre>
           
          </div>
        </section>
        <section>
          <h2>3. Ritm pe tom-uri fără tobă mică (floor tom groove)</h2>
          Acest ritm este folosit în stilul blues și în piese de rock clasic.
          <br></br>
          <br></br>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              paddingRight: "10px",
              paddingLeft: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text2}</pre>
           
          </div>
        </section>
            
            <section>
              <h2>5. Exerciții și aplicare</h2>
            </section>

            <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              paddingRight: "10px",
              paddingLeft: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text3}</pre>
           
          </div>
            <section>
              <h2>Concluzie</h2>
              Ritmurile pe tom-uri adaugă profunzime și energie în tobe. Experimentează cu ele și integrează-le în stilul tău de cântat. Spor la exersat! 🥁🔥            
            </section>
        
        <img
          className="img-top-right"
          style={{ height: "75px" }}
          src={bassdrumImage}
          alt="Binary"
        />
        <img
          className="img-top-right-right"
          style={{ height: "70px" }}
          src={drumstickerImage}
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

export default RitmuriPeTomuri;
