import React from "react";
import "./Lectie.css"; // Import your custom CSS file
import { Button } from "react-bootstrap";
import "./Componentele unui set de tobe.css";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import RedirectionareLectii from "./RedirectionareLectii";
import Carusel from "./Carusel";

interface LocationState {
  username: string;
}
function RitmuriRock() {
  const location = useLocation<LocationState>();
  const { username } = location.state;
  console.log("heiii" + username);

  const drumstickerImage = "./src/assets/drumsticker.png";
  const electricguitarImage = "./src/assets/electricguitar.png";
  const [redirectPrev, setRedirectPrev] = useState<boolean>(false);
  const [redirectFollow, setRedirectFollow] = useState<boolean>(false);
  const handleButtonFollow = () => {
    setRedirectFollow(true);
  };

  if (redirectFollow) {
    return (
      <Redirect
        to={{
          pathname: `/tablouri-bidimenisonale`,
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
          pathname: `/algoritmi-elementari`,
          state: { username: username },
        }}
      />
    );
  }

  const text0 = `
       Structură:
      🥁 Kick drum → pe 1, 2&, 3
      🥁 Snare drum → pe 2 și 4
      🥁 Hi-hat → pe optimi
\n`;

  const text1 = `
       Structură:
      🥁 Kick drum → pe 1 și 3
      🥁 Snare drum → pe 2 și 4
      🥁 Ride cymbal → pe optimi
\n`;


  const text3 = `
        
      Structură:
    🥁 Kick drum → pe 1 și 3
    🥁 Snare drum → pe 2 și 4
    🥁 Hi-hat → deschis pe 4&
\n`;

  const text4 = `

      Structură:
    🥁 Kick drum → pe 1 și 3
    🥁 Snare drum → pe 2, 2&, 4, 4&
    🥁 Hi-hat → pe șaisprezecimi
\n`;

  const text5 = `

    1.Exersează fiecare ritm timp de 2-5 minute.
    2.Încearcă să cânți pe piese rock cunoscute.
    3.Alege un tempo potrivit și crește-l treptat.
\n`;

  return (
    <div className="lectie-container">
      <header>
        <h1>Ritmuri Rock</h1>
      </header>
      <main>
        <section>
          <RedirectionareLectii
            username={username}
            clasa={"9"}
          ></RedirectionareLectii>
        </section>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h2>Introducere</h2>
      </div>
      <p>
        Ritmul rock este puternic, energic și bazat pe un tempo stabil. În acest
        tutorial, vei învăța cele mai comune ritmuri rock și cum să le aplici.
      </p>

        <section>
       
          <h3>1. Ritmul rock de bază</h3>
          Acesta este cel mai folosit ritm în muzica rock, prezent în nenumărate piese.
          <br></br>
          <br></br>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "10px",
            }}
          >
            {" "}
            Structură:<br></br>
          🥁 Kick drum (tobă mare) → pe 1 și 3<br></br>
          🥁 Snare drum (tobă mică) → pe 2 și 4<br></br>
          🥁 Hi-hat sau ride → pe optimi
          </div>

          <br></br>
          
          <h3>2. Ritm rock cu kick variat</h3>
          Pentru mai multă dinamică, adaugă o bătaie suplimentară la tobă mare.<br></br>
          <br></br>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "10px",
            }}
          >
           
            <pre style={{ fontFamily: "inherit" }}>{text0}</pre>
          </div>
          <h3>3. Ritm rock cu ride cymbal</h3>
          În refrene sau părțile mai intense, toboșarii folosesc ride cymbal în loc de hi-hat.
          <br></br>
          <br></br>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "10px",
            }}
          >
            {" "}
            <pre style={{ fontFamily: "inherit" }}>{text1}</pre>
          </div>

          <br></br>
          <h3>4. Ritm rock cu deschidere de hi-hat</h3>
          Un truc des folosit în rock este să deschizi hi-hatul pe un timp puternic, pentru un efect exploziv.
          <br></br>
          <br></br>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "10px",
            }}
          >
            {" "}
            <pre style={{ fontFamily: "inherit" }}>{text3}</pre>
          </div>
        </section>

        <h3>5. Ritm rock rapid (punk beat)</h3>
            În punk și hard rock, tempo-ul este mai rapid, iar kick-ul este mai activ.
            <br></br>
            <br></br>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "10px",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text4}</pre>
          </div>
            
            <br></br>
            <br></br>
       
       <h3>6.Exerciții și aplicare</h3>
       <br></br>
          
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "10px",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text5}</pre>
          </div>
      
      <h2>Concluzie</h2>
      Aceste ritmuri sunt baza muzicii rock. Începe cu cele simple și dezvoltă-le adăugând fill-uri și variații. Spor la exersat! 🥁🔥
      
      <img
          className="img-top-right-right"
          style={{ height: "70px" }}
          src={drumstickerImage}
          alt="Binary"
        />
         <img
          className="img-top-right"
          style={{ height: "75px" }}
          src={electricguitarImage}
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

export default RitmuriRock;
