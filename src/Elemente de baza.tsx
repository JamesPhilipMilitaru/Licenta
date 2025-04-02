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
function ElementeDeBaza() {
  const location = useLocation<LocationState>();
  const { username } = location.state;
  const codingImage = "./src/assets/coding.png";
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
          pathname: `/note-muzicale`,
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
        C - D - E - F - G - A - B - C
       (T - T - S - T - T - T - S)

    T - ton
    S - semiton
  `;

  const text1 = `
  A - B - C - D - E - F - G - A
( T - S - T - T - S - T - T)

  T - ton
  S - semiton
`;
 
  return (
    <div className="lectie-container">
      <header>
        <h1>Elemente de Bază în Teoria Muzicală 🎶🎼</h1>
      </header>
      <main>
        <section>
          <RedirectionareLectii
            username={username}
            clasa={"11"}
          ></RedirectionareLectii>
        </section>

        <section>
        Această lecție îți va oferi noțiunile fundamentale din teoria muzicală, esențiale pentru orice muzician, indiferent de instrumentul pe care îl studiezi. Vom explora:
        <ul>
          <li>✔Notele muzicale</li>
          <li>✔Gama muzicală</li>
          <li>✔ Intervalele</li>
          <li>✔ Acordurile</li>
          <li>✔ Ritmul și măsurile</li>
          <li>✔ Dinamica și articulațiile</li>
        </ul>
          <h2>1. Notele Muzicale 🎵</h2>
          În muzica occidentală, există 12 sunete distincte în cadrul unei octave:<br></br>
<br></br>✅ 7 note naturale: C - D - E - F - G - A - B (Do - Re - Mi - Fa - Sol - La - Si)
<br></br>✅ 5 note alterate (diez ♯ sau bemol ♭): C♯/D♭ - D♯/E♭ - F♯/G♭ - G♯/A♭ - A♯/B♭
          <br></br>
          <br></br>
👉 Claviatura pianului este un exemplu clar al acestor note:
        <br></br>
        <br></br>
      Clapele albe → note naturale<br></br>
      Clapele negre → note alterate (♯ sau ♭)
        </section>

        <section>
         
         <h3>2. Gama Muzicală 🎼</h3>
          O gamă este o succesiune de note organizate în funcție de înălțime.
          
          <h3>Gamă Majoră (Sunet vesel, luminos)</h3>
          Are formula: Ton - Ton - Semiton - Ton - Ton - Ton - Semiton<br></br>
          📌 Exemplu: Gama Do Major (C Major)
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
            <b>
              <pre style={{ fontFamily: "inherit" }}>{text}</pre>
            </b>
            </div>
            <br></br>
            ✔ Se folosește în majoritatea pieselor pop și clasice.
        </section>

        <section>
          <h3>Gamă minoră(Sunet melancolic, trist)</h3>
          Are formula: Ton - Semiton - Ton - Ton - Semiton - Ton - Ton
          <br></br>
          📌 Exemplu: Gama La Minor (A Minor)
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
            <b>
              <pre style={{ fontFamily: "inherit" }}>{text1}</pre>
            </b>
          </div>
          <br></br>✔ Foarte comună în rock, blues și muzică clasică.
        </section>
        <section>
         
            <h2>3. Intervalele Muzicale 🎶</h2>
            <br></br>
            Intervalul este distanța dintre două note. Cele mai importante sunt:
            <ul>
              <li>✅ Primă (1st) – C - C (aceeași notă)</li>
              <li>✅ Secundă (2nd) – C - D (mică = 1 semiton, mare = 2 semitonuri)</li>
              <li>✅ Terță (3rd) – C - E (minoră = 3 semitonuri, majoră = 4 semitonuri)</li>
              <li>✅ Cvartă (4th) – C - F (perfectă = 5 semitonuri)</li>
              <li>✅ Cvintă (5th) – C - G (perfectă = 7 semitonuri)</li>    
              <li>✅ Sextă (6th) – C - A (minoră/majoră = 8/9 semitonuri)</li> 
              <li>✅ Septimă (7th) – C - B (minoră/majoră = 10/11 semitonuri)</li>
              <li>✅ Octavă (8th) – C - C (12 semitonuri, același sunet la o octavă mai sus)</li>       
            </ul>
              <br></br>
              👉 Intervalele definesc emoția unei melodii!
        </section>

        <section>
          <h2>4. Acordurile 🎸</h2>
          
          Un acord este o combinație de cel puțin 3 note cântate simultan.
          <h3>Tipuri de acorduri</h3>
          
          <ul>
            <li>✅ Acord Major (vesel, puternic): C - E - G (Do Major = Cmaj)</li>
            <li>✅ Acord Minor (melancolic, trist): C - E♭ - G (Do Minor = Cm)</li>
            <li>✅ Acord Diminut (tensionat, misterios): C - E♭ - G♭ (Cdim)</li>
            <li>✅ Acord Mărit (luminos, deschis): C - E - G♯ (Caug)</li>
            <li>✅ Acord de Septimă (jazz, blues): C - E - G - B♭ (C7, Cm7, Maj7 etc.)</li>
          </ul>
          <br></br>
          👉 Acordurile sunt baza acompaniamentului în muzică!
          </section>

           <section>
            <h2>5.Dinamica și Articulațiile 🎭</h2>
            <br></br>
            🎵 Dinamica = cât de tare sau încet este cântată o notă/piesă:
            <ul>
              <li>✅ p (piano) – încet</li>
              <li>✅ f (forte) – tare</li>
              <li>✅ mf (mezzo-forte) – moderat tare</li>
              <li>✅ crescendo  – din ce în ce mai tare</li>
              <li>✅ decrescendo – din ce în ce mai încet</li>
            </ul>
            <br></br>
            🎵 Articulațiile = modul în care sunt cântate notele:
            <ul>
              <li>✅ Legato – note legate, fluide</li>
              <li>✅ Staccato – note scurte și separate</li>
              <li>✅ Accent – notă mai puternic cântată</li>
            </ul>
            <br></br>
            👉 Aceste elemente dau expresivitate muzicii!
           </section>

           <section>
            <h2>6.Cum să Aplici Teoria Muzicală</h2>
            <ul>
              <li>✔ Exersează gama majoră și minoră pe instrumentul tău.</li>
              <li>✔ Învață acordurile majore și minore și progresiile lor.</li>
              <li>✔ Cântă ritmuri diferite folosind un metronom.</li>
              <li>✔ Analizează piese cunoscute pentru a recunoaște structurile lor muzicale.</li>
            </ul>
           </section>

          <section>
            <h2>Concluzie</h2>
            Aceasta este baza teoriei muzicale – fundamentul oricărui muzician! 🎶💡
            </section>           
        <Carusel category="Backtracking" username={username}></Carusel>
        
        <img
          className="img-top-right"
          style={{ height: "70px" }}
          src={codingImage}
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

export default ElementeDeBaza;
