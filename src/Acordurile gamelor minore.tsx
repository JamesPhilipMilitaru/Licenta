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
function AcordurileGamelorMinore() {
  const location = useLocation<LocationState>();
  const { username } = location.state;
  const elguitarImage = "./src/assets/electricguitar.png";
  const learningImage = "./src/assets/elearning.png";

  const minorand7chordsImage = "./src/assets/minorand7chords.png"
  const acminImage = "./src/assets/tabel-acminore.jpg"

  const [redirectPrev, setRedirectPrev] = useState<boolean>(false);
  const [redirectFollow, setRedirectFollow] = useState<boolean>(false);
  const handleButtonFollow = () => {
    setRedirectFollow(true);
  };

  if (redirectFollow) {
    return (
      <Redirect
        to={{
          pathname: `/stiva`,
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
          pathname: `/divide-et-impera`,
          state: { username: username },
        }}
      />
    );
  }

  const text = `
       i   -   ii° - III  -  iv  - v  -   VI  - VII
    min-dim-Maj-min-min-Maj-Maj

      🔹 Acordurile i, iv și v sunt minore
      🔹 Acordurile III, VI și VII sunt majore
      🔹 Acordul ii° este diminuat
      `;
  const text1 = `

      🔹Am - F - C - G (i - VI - III - VII) → folosită în rock și pop
      🔹Am - G - F - E (i - VII - VI - V) → foarte populară în muzica clasică și flamenco
      🔹Am - Dm - E - Am (i - iv - V - i) → clasică în muzica latină
  `;
  
 
  const text2 = `
  ✔ Exersează progresii de acorduri minore în diferite tonalități.
  ✔ Folosește-le pentru a compune melodii triste sau misterioase.
  ✔ Improvizează folosind gama minoră peste aceste acorduri.
  ✔ Încearcă să le recunoști în piesele preferate.`;
  
  const text3 = `
  🔹 "Nothing Else Matters" - Metallica (Em - D - C - G - B7)
  🔹 "Tears in Heaven" - Eric Clapton (A - E - F#m - D - A - E - A)
  🔹 "House of the Rising Sun" - The Animals (Am - C - D - F - Am - E - Am)

  👉 Aceste melodii sunt construite pe progresii minore! 
  `;

  return (
    <div className="lectie-container">
      <header>
        <h1>Acordurile gamelor minore</h1>
      </header>
      <main>
        <section>
          <RedirectionareLectii
            username={username}
            clasa={"10"}
          ></RedirectionareLectii>
        </section>

        <section>
          <h2>Ce sunt acordurile într-o gamă minoră?</h2>
          Într-o gamă minoră, acordurile sunt construite pe fiecare notă a gamei, la fel ca în gama majoră, dar urmând o scară armonică diferită.

          <br></br>
          Există trei tipuri de game minore principale:
          <ul>
            <li>1.Gama minoră naturală (cea mai folosită pentru armonizare)</li>
            <li>2.Gama minoră armonică (are un sunet mai tensionat, folosit în muzica clasică și flamenco)</li>
            <li>3.Gama minoră melodică (folosită în jazz și muzică modernă)</li>          
          </ul>
          <br></br>
          În această lecție, ne vom concentra pe gama minoră naturală, deoarece aceasta este folosită pentru formarea acordurilor diatonice.
         
        </section>

        <section>
          <h2> Formula Acordurilor în Gama Minoră Naturală</h2>
          În orice gamă minoră naturală, acordurile urmează această ordine:
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
          
         <h2>Cele mai întâlnite progresii de acorduri sunt:</h2>
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
          <br></br>
         
         <h2>Tabelul acordurilor minore</h2>
          <br></br>
          <img
          style={{ height: "260px" }}
          src={acminImage}
          alt="Binary"
        />
        </section>

        <section>
          <h2>Acordurile minore și acordurile 7 la chitară</h2>
          <img
          style={{ height: "280px" }}
          src={minorand7chordsImage}
          alt="Binary"
        />
          <br></br>
          
          <br></br>
          <h2>Cum să folosești acordurile gamei minore</h2>
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
            <pre style={{ fontFamily: "inherit" }}>{text2}</pre>
          </div>
        </section>
            
        <section>
          <h2> Exemple de melodii cu progresii din gama minoră</h2>
        <div
            style={{
              display: "flex",
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "0px",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text3}</pre>
          </div>
        </section>
        
        <section>
          <h2>Concluzie</h2>
          Acordurile dintr-o gamă minoră sunt esențiale pentru orice chitarist. Învață-le, exersează progresiile și aplică-le în cântece! 🎸🔥 
        </section>
        <img
          className="img-top-right"
          style={{ height: "70px" }}
          src={elguitarImage}
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

export default AcordurileGamelorMinore;
