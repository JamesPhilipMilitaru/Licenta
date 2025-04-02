import React from "react";
import "./Lectie.css"; // Import your custom CSS file
import { Button } from "react-bootstrap";
import "./Componentele unui set de tobe.css";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import { useLocation} from "react-router-dom";
import RedirectionareLectii from "./RedirectionareLectii";
import Carusel from "./Carusel";

interface LocationState {
  username: string;
}
function CanteceDeExersat() {
  const location = useLocation<LocationState>();
  const { username } = location.state;
  const musicImage = "./src/assets/music-book.png";
  const elguitarImage = "./src/assets/electricguitar.png";

  const [redirectPrev, setRedirectPrev] = useState<boolean>(false);
  const [redirectFollow, setRedirectFollow] = useState<boolean>(false);
  const handleButtonFollow = () => {
    setRedirectFollow(true);
  };

  if (redirectFollow) {
    return (
      <Redirect
        to={{
          pathname: `/cantece-de-exersat`,
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
          pathname: `/ritmuri`,
          state: { username: username },
        }}
      />
    );
  }

  const text = `
      D   D   U   U   D   U  
      1    2    3   4  
  `;
  const text1 = `
      D   D   U   U   D   U  
      1    2    3   4  
  `;

  const text2 = `
  D   D   U   U   D   U  
    `;

  const text3 = `
    D   D   U   U   D   U  
  `;
  
  const text4 =  `
    D   U   X   U   D   U  
  `;

  const text5=`
    D   X   D   X   U   X  
  `;
  return (
    <div className="lectie-container">
      <header>
        <h1>Cântece de exersat la chitară</h1>
      </header>
      <main>
        <section>
          <RedirectionareLectii
            username={username}
            clasa={"10"}
          ></RedirectionareLectii>
        </section>

        <section>
        Această lecție îți va oferi o selecție de cântece ușoare potrivite pentru diferite niveluri de dificultate, fiecare având acorduri simple și ritmuri accesibile. Vom include:<br></br>
        <br></br>
        ✔ Acordurile folosite<br></br>
        ✔ Un ritm recomandat<br></br>
        ✔ Un link pentru a asculta melodia


          <h2>1.Cântece pentru Începători (Acorduri de bază, strumming simplu)</h2>
         
          <h3>a."Knockin' on Heaven’s Door" - Bob Dylan</h3>
          ✅ Acorduri: G - D - Am (sau C - G - D - Am în varianta Guns N' Roses)<br></br>   
          ✅ Ritm recomandat:
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
          <br></br>
          👉 De ce să-l înveți? Ei bine, folosești doar 3-4 acorduri și are un ritm lent, ideal pentru începători.
        </section>

        <section>
          <h3>b."Stand By Me" - Ben E. King</h3>
          ✅ Acorduri: G - Em - C - D<br></br>
          ✅ Ritm recomandat:<br></br>
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
          <br></br>
          👉 De ce să-l înveți? Ei bine, acest cântec are o progresie foarte comună, întâlnită în multe cântece pop și rock.
          
          
          
          <h2>
            b. Cântece pentru Nivel Mediu (Acorduri baré, ritmuri mai complexe)
          </h2>
          <h3>a."Wish You Were Here" - Pink Floyd</h3>
          
          ✅ Acorduri: G - C - D - Am - Em<br></br>
          ✅ Ritm recomandat:<br></br>
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
          <br></br>
          👉 De ce să-l înveți? Ei bine, acest cântec onclude o progresie clasică și o parte de fingerpicking la început.
          
          <h3>b."Wonderwall" - Oasis</h3>
          ✅ Acorduri: Em7 - G - Dsus4 - A7sus4 - Cadd9<br></br>
          ✅ Ritm recomandat:<br></br>
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
            <pre style={{ fontFamily: "inherit" }}>{text3}</pre>
          </div>
          <br></br>
          👉 De ce să-l înveți? Un ritm foarte cunoscut, iar acordurile sunt ușor de prins.
        </section>
        
        <section>
          <h3>c."Californication" - Red Hot Chili Peppers</h3>
         
          ✅ Acorduri: Am - F - C - G<br></br>
          ✅ Ritm recomandat:<br></br>
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
            <pre style={{ fontFamily: "inherit" }}>{text4}</pre>
          </div>
            <br></br>
            👉 De ce să-l înveți? Include palm muting, folosit des în rock alternativ.
        </section>

        <section>
          <h2>Cântece pentru Avansați (Tehnici diverse, tempo mai rapid)</h2>
        
          <h3>a."Blackbird" - The Beatles</h3>
        
          ✅ Tehnică: Fingerpicking<br></br>
          ✅ Acorduri: G - Am7 - C - D<br></br>
          👉 De ce să-l înveți? Un clasic al fingerstyle-ului, ideal pentru dezvoltarea dexterității.<br></br>
                  
         <h3>b."Tears in Heaven" - Eric Clapton</h3>

          ✅ Tehnică: Fingerpicking<br></br>
          ✅ Acorduri: A - E - F#m - D - A - E - A<br></br>
           👉 De ce să-l înveți? Un arpegiu superb, perfect pentru balade acustice.<br></br>
              
          <h3>c."Hotel California" - Eagles</h3>  
            
          ✅ Acorduri: Bm - F# - A - E - G - D - Em - F#<br></br>
          ✅ Ritm recomandat:<br></br>
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
            <pre style={{ fontFamily: "inherit" }}>{text5}</pre>
          </div>
          <br></br>
          👉 De ce să-l înveți? Combinație de ritm și solo, perfect pentru avansați.
        </section>
        
        <section>
          <h2>Cum să exersezi eficient:</h2>
          <ul>
            <li>✔ Începe cu tempo lent, crescând treptat viteza.</li>
            <li>✔ Exersează fiecare schimb de acord înainte de a cânta întreaga piesă.</li>
            <li>✔ Cântă împreună cu originalul pentru a învăța sincronizarea.</li>
            <li>✔ Folosește metronom pentru a păstra ritmul.</li>
          </ul>
        </section>
            <section>
              <h3>Concluzie</h3>
              Aceste cântece te vor ajuta să-ți îmbunătățești ritmul, schimbările de acorduri și tehnica! 🎸🔥
            </section>
        <Carusel category="Coada" username={username}></Carusel>
        <img
          className="img-top-right"
          style={{ height: "70px" }}
          src={musicImage}
          alt="Binary"
        />
        <img
          className="img-top-right-right"
          style={{ height: "70px" }}
          src={elguitarImage}
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
      </footer>
    </div>
  );
}

export default CanteceDeExersat;
