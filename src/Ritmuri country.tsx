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
function RitmuriCountry() {
  const location = useLocation<LocationState>();
  const { username } = location.state;
  const banjoImage = "./src/assets/banjosticker.png";
  const drumstickerImage = "./src/assets/drumsticker.png";
  const mainImage = "./src/assets/main.png";
  const mathImage = "./src/assets/math.png";
  const developImage = "./src/assets/develop.png";
  const [redirectPrev, setRedirectPrev] = useState<boolean>(false);
  const [redirectFollow, setRedirectFollow] = useState<boolean>(false);
  const handleButtonFollow = () => {
    setRedirectFollow(true);
  };

  if (redirectFollow) {
    return (
      <Redirect
        to={{
          pathname: `/sortare`,
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
          pathname: `/tablouri-unidimenisonale`,
          state: { username: username },
        }}
      />
    );
  }

  const text0 = `
    Structură:
  🥁 Kick drum (tobă mare) → pe 1 și 3
  🥁 Snare drum (tobă mică) → pe 2 și 4
  🥁 Hi-hat sau ride → pe optimi \n
`;

  const text1 = `
    Structură:
    🥁 Kick drum → pe 1 și 3
    🥁 Snare drum → în șaisprezecimi, dar ușor, ca un „shuffle”
    🥁 Hi-hat → poate rămâne pe optimi sau poate lipsi\n
`;

  const text2 = `
    Structură:
    🥁 Kick drum → pe 1 și 3
    🥁 Snare drum → pe 2 și 4
    🥁 Hi-hat → pe optimi shuffle (swing feel)\n
`;

  const text3=`
  Structură:
🥁 Kick drum → pe 1 și 3
🥁 Snare drum → pe 2 și 4
🥁 Ride cymbal → pe optimi\n`;

const text4=`
1. Exersează fiecare ritm timp de 2-5 minute.
2.Încearcă să cânți pe piese country clasice.
3.Începe încet și crește viteza treptat.\n
`
;
  

  return (
    <div className="lectie-container">
      <header>
        <h1>Ritmuri Country</h1>
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
        Muzica country folosește ritmuri simple, dar ritmice și fluide, adesea cu un groove „train beat” (ca un tren în mișcare) sau shuffle. În acest tutorial, vei învăța cele mai populare ritmuri country.
         
          <h3>1. Ritmul country de bază (Boom-Chick)</h3>
          Acest ritm este fundamentul muzicii country și sună clar și simplu:
          <br></br>
          <br></br>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "10px",
            }}
          >
          <pre style={{ fontFamily: "inherit" }}>{text0}</pre>     
          </div>
        </section>

        <section>
          <h3>2. Train Beat (Ritmul de tren)</h3>
          Acest ritm este semnătura muzicii country și imită sunetul roților de tren.
         
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text1}</pre>
          </div>
        </section>

        <section>
          <h3>3. Shuffle Country Beat</h3>
          Acest ritm are o senzație de balans specifică blues-ului și country-ului tradițional.
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text2}</pre>
          </div>
        </section>

        <section>
          <h3>4. Ritm country cu Ride Cymbal</h3>
          Pentru o senzație mai deschisă, poți folosi ride cymbal în loc de hi-hat.
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text3}</pre>
          </div>
        </section>

        <section>
          
          <h3>5. Exerciții și aplicare</h3>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text4}</pre>
          </div>
        </section>

        <section>
          <h2>Concluzie</h2>
          Aceste ritmuri sunt fundamentale în muzica country. Odată ce le stăpânești, poți adăuga fill-uri și accente pentru mai mult stil. Spor la exersat! 🥁🤠🎶
        </section>

        <img
          className="img-top-right-right"
          style={{ height: "70px" }}
          src={drumstickerImage}
          alt="Binary"
        />
         <img
          className="img-top-right"
          style={{ height: "75px" }}
          src={banjoImage}
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

export default RitmuriCountry;
