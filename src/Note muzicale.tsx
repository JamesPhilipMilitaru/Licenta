import React from "react";
import "./Lectie.css"; // Import your custom CSS file
import { Button } from "react-bootstrap";
import "./Componentele unui set de tobe.css";
import {  useState } from "react";
import { Redirect} from "react-router-dom";
import { useLocation} from "react-router-dom";
import RedirectionareLectii from "./RedirectionareLectii";
import Carusel from "./Carusel";
import "./Note muzicale.css"

interface LocationState {
  username: string;
}
function NoteMuzicale() {
  const location = useLocation<LocationState>();
  const { username } = location.state;
  const codingImage = "./src/assets/coding.png";
  

  const knapImage = "./src/assets/knap.png";
  const calendarImage = "./src/assets/calendar.png";

  const [redirectPrev, setRedirectPrev] = useState<boolean>(false);
  const [redirectFollow, setRedirectFollow] = useState<boolean>(false);
  const handleButtonFollow = () => {
    setRedirectFollow(true);
  };

  if (redirectFollow) {
    return (
      <Redirect
        to={{
          pathname: `/programare-dinamica`,
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
          pathname: `backtracking`,
          state: { username: username },
        }}
      />
    );
  }

  const text = `
    Linia 1 - Mi  
    Linia 2 - Sol  
    Linia 3 - Si  
    Linia 4 - Re  
    Linia 5 - Fa  
    Spațiu 1 - Fa  
    Spațiu 2 - La  
    Spațiu 3 - Do  
    Spațiu 4 - Mi  
  `;

  const text1 = `
    Linia 1 - Sol  
    Linia 2 - Si  
    Linia 3 - Re  
    Linia 4 - Fa  
    Linia 5 - La  
    Spațiu 1 - La  
    Spațiu 2 - Do  
    Spațiu 3 - Mi  
    Spațiu 4 - Sol  
    `;

  return (
    <div className="lectie-container">
      <header>
        <h1>Note muzicale</h1>
      </header>
      <main>
        <section>
          <RedirectionareLectii
            username={username}
            clasa={"11"}
          ></RedirectionareLectii>
        </section>

        <section>
        Această lecție îți va explica ce sunt notele muzicale, cum sunt organizate și cum să le recunoști pe instrumentul tău. Vom explora:
      <ul>
        <li>✔ Ce sunt notele muzicale</li>
        <li>✔ Sistemele de denumire a notelor</li>
        <li>✔ Notele pe portativ și cheia sol</li>
        <li>✔ Alterările: diez (♯) și bemol (♭)</li>
        <li>✔ Octavele și frecvențele</li>
      </ul>
          <h2>1. Ce sunt Notele Muzicale? 🎵</h2>
          <br></br>
          O notă muzicală este un sunet cu o înălțime specifică. Notele sunt fundamentul oricărei melodii, iar fiecare notă are o anumită frecvență (vibrații pe secundă).
          <br></br>
          <br></br>
          👉 În total, există 12 note distincte într-o octavă:<br></br>
          <br></br>
          ✅ 7 note naturale:<br></br>
          Do - Re - Mi - Fa - Sol - La - Si (C - D - E - F - G - A - B)
          <br></br>
          <br></br>
          ✅ 5 note alterate (diez♯ sau bemol♭):<br></br>
          C♯/D♭ - D♯/E♭ - F♯/G♭ - G♯/A♭ - A♯/B♭<br></br>
          📌De exemplu:
          <ul>
            <li>Nota La (A4) are frecvența de 440 Hz</li>
            <li>Nota Do următoare (C5) are frecvența de aproximativ 523 Hz</li>
          </ul>
        </section>
        
        <section>
        
        DE INTEGRAT NOTELE CROMATICE
        
        
        
        </section>
        
        
        <section>
          <h2>Sistemele de Denumire a Notelor📝</h2>
          În funcție de țară și sistem muzical, notele pot avea denumiri diferite:<br></br>
          <table className="styled-table">
    <thead>
        <tr>
            <th>Nota</th>
            <th>Denumire latină</th>
            <th>Denumire anglo-saxonă</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>C</td>
            <td>Do</td>
            <td>C</td>
        </tr>
        <tr>
            <td>D</td>
            <td>Re</td>
            <td>D</td>
        </tr>
        <tr>
            <td>E</td>
            <td>Mi</td>
            <td>E</td>
        </tr>
        <tr>
            <td>F</td>
            <td>Fa</td>
            <td>F</td>
        </tr>
        <tr>
            <td>G</td>
            <td>Sol</td>
            <td>G</td>
        </tr>
        <tr>
            <td>A</td>
            <td>La</td>
            <td>A</td>
        </tr>
        <tr>
            <td>B</td>
            <td>Si</td>
            <td>B (în SUA), H (în Germania)</td>
        </tr>
    </tbody>
</table>

      <br></br>
      👉 În muzica modernă, sistemul anglo-saxon (C, D, E, etc.) este cel mai folosit.
          <br></br>

        <h2>3. Notele pe Portativ și Cheia Sol 🎼</h2>
        Notele sunt scrise pe portativ, un sistem de 5 linii și 4 spații.
        <br></br>

      🔹 În cheia sol (cea mai folosită pentru voce, chitară, pian - mâna dreaptă):
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
          <br></br>
          👉 Regulă mnemotehnică pentru liniile portativului (engleză):
                <br></br>
          "Every Good Boy Deserves Fun" (E - G - B - D - F)
                <br></br>
                  👉 Pentru spații:<br></br>
            "FACE" (F - A - C - E)<br></br>
            🔹 În cheia fa (folosită pentru bas, pian - mâna stângă):
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
          <h2>4. Alterările: Diez (♯) și Bemol (♭) 🎵</h2>
          În afară de notele naturale, mai avem note alterate, care sunt cu un semiton mai sus (♯) sau mai jos (♭).
          <br></br>
          📌 Exemplu:
          <ul>
            <li>C♯ (Do♯) este Do ridicat cu un semiton.</li>
            <li>D♭ (Re♭) este Re coborât cu un semiton.</li>
          </ul>
            <br></br>
            👉 C♯ și D♭ sunt același sunet, dar scrise diferit (enharmonie)!
              <br></br>
              <h3>Dublu-diez (𝄪) și dublu-bemol (𝄫)</h3>
              <br></br>
              ✅ 𝄪 (diez dublu) → ridică nota cu două semitonuri
              <br></br>
              ✅ 𝄫 (bemol dublu) → coboară nota cu două semitonuri
        </section>

        <section>
          <h2>5. Octavele și Frecvențele 🔢</h2>
          Muzica este organizată pe octave, iar fiecare octavă are aceleași note, dar mai sus sau mai jos.<br></br>
          ✅ Nota Do apare de mai multe ori pe un pian sau chitară, dar fiecare Do se află într-o octavă diferită.<br></br>
          📌 Exemplu de note Do în diferite octave:
          <ul>
            <li>C1 – foarte grav</li>
            <li>C4 (Do central – mijlocul pianului)</li>
            <li>C8 – foarte acut</li>
          </ul>
          <br></br>
          👉 Regulă:
          De fiecare dată când ajungi la a 8-a notă, începe o nouă octavă.
        </section>
        
        <section>
          <h2>7. Concluzie 🎯</h2>
          ✔ Notele muzicale sunt baza oricărei melodii!<br></br>
          ✔ Sunt organizate în octave și pot fi naturale sau alterate.<br></br>
          ✔ Exersează zilnic pentru a le învăța rapid!<br></br>
        </section>
        <Carusel category="Greedy" username={username}></Carusel>
        <img
          className="img-top-right"
          style={{ height: "70px" }}
          src={codingImage}
          alt="Binary"
        />
        <img
          className="img-top-right-right"
          style={{ height: "70px" }}
          src="./src/assets/elearning.png"
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

export default NoteMuzicale;
