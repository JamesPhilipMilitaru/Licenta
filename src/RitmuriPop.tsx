import React from "react";
import "./Lectie.css"; // Import your custom CSS file
import { Button } from "react-bootstrap";
import "./Componentele unui set de tobe.css";
import { useLocation} from "react-router-dom";
import {  useState } from "react";
import { Redirect } from "react-router-dom";
import RedirectionareLectii from "./RedirectionareLectii";
import Carusel from "./Carusel";

interface LocationState {
  username: string;
}
function RitmuriPop() {
  const location = useLocation<LocationState>();
  const { username } = location.state;
  console.log("heiii" + username);
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
          pathname: `/ritmuri-rock`,
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
          pathname: `/exercitii-ritmice`,
          state: { username: username },
        }}
      />
    );
  }

  const text0 = `
  
Structură:
🥁 Kick drum (tobă mare) → pe timpul 1 și 3
🥁 Snare drum (tobă mică) → pe timpul 2 și 4
🥁 Hi-hat → pe optimi (întreaga măsură)
\n`;

  const text1 = `

Structură:
🥁 Kick drum → pe 1, 2&, 3
🥁 Snare drum → pe 2 și 4
🥁 Hi-hat → pe optimi
\n`;

  const text2 = `

Structură:
🥁 Kick drum → pe 1 și 3
🥁 Snare drum → pe 2 și 4
🥁 Hi-hat → deschis pe 4&

\n`;

  const text3 = `

  Structură:
🥁 Kick drum → pe 1, 3
🥁 Snare drum → pe 2 și 4 (lovituri normale) + subdiviziuni ghost
🥁 Hi-hat → pe optimi

\n`;

  const text4 = `
 a.Exersează fiecare ritm timp de 2-5 minute.
 b.Cântă pe melodii pop cunoscute.
 c.Alternează între ritmuri pentru a crea variație.

\n`;

  return (
    <div className="lectie-container">
      <header>
        <h1>Ritmuri Pop</h1>
      </header>
      <main>
        <section>
          <RedirectionareLectii
            username={username}
            clasa={"9"}
          ></RedirectionareLectii>
        </section>

        <section>
          <h2>Introducere</h2>
          <h4>Muzica pop folosește ritmuri simple, dar eficiente. În acest tutorial, vei învăța câteva dintre cele mai comune ritmuri pop și cum să le aplici. </h4>
          <h3>1. Primul ritm pop de bază</h3>
          Acest ritm este folosit în multe hituri pop. Se bazează pe patru timpi pe măsură (4/4) și sună astfel:          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "10px",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text0}</pre>
          </div>
          <h3>2. Ritm pop cu kick variat</h3>
          După ce stăpânești primul ritm, poți adăuga o bătaie suplimentară pe tobă mare:

          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "10px",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text1}</pre>
          </div>
          <h3>
            3.Ritm pop cu deschidere de hi-hat
          </h3>
          Un mod simplu de a adăuga variație este să deschizi hi-hatul pe al patrulea timp.
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "10px",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text2}</pre>
          </div>
          <h3>4. Ritm pop cu ghost notes</h3>
          Ghost notes sunt lovituri slabe pe tobă mică, adăugate pentru mai mult groove.
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "10px",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text3}</pre>
          </div>
          <h3>5. Exerciții și aplicare</h3>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "10px",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text4}</pre>
          </div>
        </section>
       <h2>Concluzie</h2>
        Aceste ritmuri sunt fundația muzicii pop. Începe cu ritmurile simple și adaugă treptat variații. Spor la exersat! 🥁🎶
        <img
          className="img-top-right-right"
          style={{ height: "70px" }}
          src={drumstickerImage}
          alt="Binary"
        />
         <img
          className="img-top-right"
          style={{ height: "75px" }}
          src={bassdrumImage}
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

export default RitmuriPop;
