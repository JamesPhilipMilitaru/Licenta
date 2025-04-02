import React from "react";
import "./Lectie.css"; // Import your custom CSS file
import { Button } from "react-bootstrap";
import "./Componentele unui set de tobe.css";
import {useState } from "react";
import { Redirect} from "react-router-dom";
import { useLocation} from "react-router-dom";
import RedirectionareLectii from "./RedirectionareLectii";
import Carusel from "./Carusel";

interface LocationState {
  username: string;
}
function StructuraUneiChitari() {
  const location = useLocation<LocationState>();
  const { username } = location.state;
  const elguitarImage = "./src/assets/electricguitar.png";
  const musicbImage = "./src/assets/music-book.png";
  const [redirectPrev, setRedirectPrev] = useState<boolean>(false);
  const [redirectFollow, setRedirectFollow] = useState<boolean>(false);
  const handleButtonFollow = () => {
    setRedirectFollow(true);
  };

  if (redirectFollow) {
    return (
      <Redirect
        to={{
          pathname: `/recursivitate`,
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
          pathname: `/ritmuri-rock`,
          state: { username: username },
        }}
      />
    );
  }
      const s1 = `
          🔹 Se află în partea de sus a chitarei și are cheițele de acordaj.
          🔹 Reglează tensiunea corzilor, schimbând astfel înălțimea sunetului.
          🔹 Poate avea diverse forme, în funcție de marcă și model (ex: Fender, Gibson, Ibanez).

        Componente:
        Cheițe de acordaj (Tuning Pegs) – folosite pentru a strânge sau slăbi corzile.
        Nutrul (Nut) – un mic suport cu fante care ghidează corzile spre grif.`;
  
      const s2 = `
       🔹 Face legătura între corp și cap.
       🔹 Este locul unde sunt amplasate fret-urile, iar mâna stângă apasă corzile pentru a forma note
        și acorduri.

        Componente:
        -Griful (Fretboard/Fingerboard) – suprafața unde se apasă corzile. Poate fi din lemn de trandafir,
         arțar sau abanos.
        -Fret-uri (Frets) – bare metalice care marchează pozițiile notelor.
        -Truss Rod – o tijă metalică în interiorul gâtului, folosită pentru reglaj.`;

      const s3=`
      🔹 Diferența principală între chitarele acustice și electrice este corpul.
      🔹 Chitarele acustice au cutie de rezonanță, în timp ce chitarele electrice au corp solid sau 
      semi-gol.
          
        Chitara acustică:

        Roseta (Soundhole) – gaura centrală, care amplifică sunetul.
        Puntea (Bridge) – unde se prind corzile în partea inferioară.
        Sadelă (Saddle) – o piesă mică care ridică corzile și le permite să vibreze corect.  
      
        Chitara electrică:
    
        Pick-up-uri – microfoane magnetice care transformă vibrațiile corzilor în semnal electric.
        Potentiometre (Knobs) - reglează volumul și tonul.
        Selector de pick-up-uri – schimbă sunetul în funcție de pick-up-ul ales.
        Jack-ul (Output Jack) – unde se conectează cablul spre amplificator.
      
        `;
  

        const s4=`
      🔹 Majoritatea chitarelor au șase corzi, dar există și modele cu șapte, 
            opt sau chiar mai multe corzi.
      🔹 Materialele diferă:
              Nailon – pentru chitarele clasice.
              Oțel – pentru chitarele acustice și electrice.
          `;
        return (
    <div className="lectie-container">
      <header>
        <h1>Istoria chitarei</h1>
      </header>
      <main>
        <section>
          <RedirectionareLectii
            username={username}
            clasa={"10"}
          ></RedirectionareLectii>
        </section>
        <section>
          <h2>Originea chitarei</h2>
          Chitara își are rădăcinile în instrumente antice cu corzi, folosite de civilizațiile vechi din Mesopotamia, Egipt, Grecia și Roma. Printre acestea, 
          cele mai importante precursoare sunt:<br></br>
          <ul>
          <li>Lira și chitara greacă (aproximativ 3000 î.Hr.) – instrumente cu corzi care erau ciupite, dar aveau o formă diferită față de chitara modernă.</li>
          <li>Oud-ul arab – adus în Spania de către mauri în Evul Mediu, acest instrument rotund a influențat lăuta europeană.</li>
          <li>Lăuta europeană (sec. XIII-XVI) – foarte populară în perioada Renașterii și un strămoș direct al chitarei.</li>
          </ul>
          <br></br>
          <h2>Apariția chitarei clasice (sec. XVI-XVIII)</h2>
          În Spania, instrumentele cu corzi au evoluat spre ceea ce astăzi numim chitară barocă, având:<br></br>
          <ul>
            <li>5 corzi duble</li>
            <li>Un corp mai subțire și curbat</li>
            <li>Fret-uri din intestine de animale</li>
          </ul>
          În secolul al XVIII-lea, chitara a început să aibă șase corzi individuale, devenind mai apropiată de chitara clasică modernă.
          <br></br>
          <h2>Chitara modernă (sec. XIX-XX)</h2>
          În secolul al XIX-lea, lutierul spaniol Antonio Torres a revoluționat construcția chitarei:<br></br>
          <ul>
            <li>A mărit corpul instrumentului pentru un sunet mai puternic.</li>
            <li>A folosit un sistem de bare armonice în formă de evantai, îmbunătățind rezonanța.</li>
          </ul>
          Acesta este modelul pe care se bazează chitara clasică de astăzi.
          În SUA, chitaristul C.F. Martin a introdus chitara acustică cu corzi de oțel, perfectă pentru stilurile folk, country și blues.<br></br>
          <h2>Revoluția chitarei electrice (sec. XX)</h2>
          În anii 1930, pentru a face chitara mai puternică în orchestrele de jazz, s-au montat pick-up-uri electrice pe chitarele acustice.<br></br>
          👉 În 1950, Leo Fender și Gibson (Les Paul) au creat primele chitare electrice cu corp solid, precum:<br></br>
          <ul>
            <li>Fender Telecaster (1950) – prima chitară electrică solid-body produsă în masă.</li>
            <li>Gibson Les Paul (1952) – una dintre cele mai faimoase chitare din istorie.</li>
            <li>Fender Stratocaster (1954) – modelul preferat al multor chitariști legendari.</li>
          </ul>
            <br></br>
            Aceste instrumente au transformat complet muzica rock, blues și jazz.
          <h2>Chitara în muzica modernă</h2>
          Astăzi, chitara este prezentă în aproape toate genurile muzicale:
          <ul>
            <li>Rock & Metal – chitara electrică domină acest stil, cu distors și riff-uri puternice.</li>
            <li>Blues & Jazz – chitariștii folosesc sunete calde și tehnici expresive.</li>
            <li>Pop & Country – chitara acustică rămâne un element esențial.</li>
          </ul>
          
          <h1>Structura chitarei</h1>
            <h2>1. Capul chitarei (Headstock)</h2>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              paddingRight: "10px",
              paddingLeft: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{s1}</pre>
          </div>
          <br></br>
          
          <h2>2. Gâtul chitarei (Neck)</h2>
          
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              paddingRight: "10px",
              paddingLeft: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{s2}</pre>
          </div>
        </section>
        <section>
          <h2>3. Corpul chitarei (Body)</h2>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              paddingRight: "10px",
              paddingLeft: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{s3}</pre>
          </div>
        </section>

        <section>
          <h2>Corzile</h2>
          
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              paddingRight: "10px",
              paddingLeft: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{s4}</pre>
          </div>
         
        </section>

        <section>
          <h2>Concluzie</h2>
          Fiecare componentă a chitarei are un rol esențial în sunet și funcționare. Acum, când știi structura chitarei, îți va fi mai ușor să înțelegi cum să o folosești și să o întreții! 🎶🎸
        
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
          src={musicbImage}
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

export default StructuraUneiChitari;
