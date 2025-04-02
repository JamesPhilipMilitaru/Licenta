import React from "react";
import "./Lectie.css"; // Import your custom CSS file
import { Button } from "react-bootstrap";
import "./Componentele unui set de tobe.css";
import {  useState } from "react";
import { Redirect } from "react-router-dom";
import { useLocation } from "react-router-dom";
import RedirectionareLectii from "./RedirectionareLectii";


interface LocationState {
  username: string;
}
function AcordurileGamelorMajore() {
  const location = useLocation<LocationState>();
  const { username } = location.state;
  const elguitarImage = "./src/assets/electricguitar.png";
  const learningImage = "./src/assets/elearning.png";
  const majorchordsImage = "./src/assets/majorchords.png";
  const acmajImage = "./src/assets/tabel-acmajore.jpg";
  
 

  const [redirectPrev, setRedirectPrev] = useState<boolean>(false);
  const [redirectFollow, setRedirectFollow] = useState<boolean>(false);
  const handleButtonFollow = () => {
    setRedirectFollow(true);
  };

  if (redirectFollow) {
    return (
      <Redirect
        to={{
          pathname: `/siruri-de-caractere`,
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
          pathname: `/recursivitate`,
          state: { username: username },
        }}
      />
    );
  }

  const text0 = `
          I   - ii  - iii - IV  - V  - vi  - vii°  
          Maj - min - min - Maj - Maj - min - dim

          
          Maj - acord major
          min - acord minor
          dim - acord diminuat 

         🔹 Acordurile I, IV și V sunt majore
         🔹 Acordurile ii, iii și vi sunt minore
         🔹 Acordul vii° este diminuat 

         Această formulă rămâne aceeași pentru orice gamă majoră.
  \n`;

  return (
    <div className="lectie-container">
      <header>
        <h1>Acordurile gamelor majore</h1>
      </header>
      <main>
        <section>
          <RedirectionareLectii
            username={username}
            clasa={"10"}
          ></RedirectionareLectii>
        </section>

        <section>
          <h2>Ce sunt acordurile într-o gamă majoră ?</h2>
          În fiecare gamă majoră, acordurile sunt construite pe baza fiecărei note, formând o scară armonică. Aceste acorduri sunt create prin suprapunerea terțelor (notelor din gamă), rezultând acorduri majore, minore și diminuate.
        </section>


        <section>
          <h2>Formula Acordurilor în Gama Majoră</h2>
          <br></br>
          Orice gamă majoră generează 7 acorduri, având această succesiune de tipuri de acorduri:
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
         
          <br></br>
        </section>

        <section>
          <h2>Tabelul acordurilor majore</h2>
          <img
            style={{
              height: "300px",
              width: "490px",
              marginLeft: "100px",
              marginBottom: "50px",
            }}
            src={acmajImage}
            alt="Binary"
          />
        </section>

        <section>
          
          <h2>Acordurile majore la chitară</h2>
            
          <img
          style={{
              height: "150px",
              width: "800px",
              marginLeft: "50px",
              marginBottom: "50px",
            }}
            src={majorchordsImage}
            alt="Binary"
          />
          
        </section>
        
        <section>
          <h2>Cum să folosești acordurile gamei majore</h2>
          <ul>
            <li>✔ Exersează progresii de acorduri în diferite tonalități.</li>
            <li>✔ Cântă acompaniamente folosind strumming sau fingerpicking.</li>
            <li>✔ Încearcă să recunoști aceste progresii în cântece cunoscute.</li>
            <li>✔ Improvizează melodii folosind gama majoră peste aceste acorduri.</li>
          </ul>
        </section>
        
        <section>
          <h2>Exemple de melodii cu progresii din gama majoră</h2>
        
        <ul>
          <li>🔹 "Let It Be" - The Beatles (C - G - Am - F)</li>
          <li>🔹 "Someone Like You" - Adele (A - E - F#m - D)</li>
          <li>🔹 "Stand By Me" - Ben E. King (G - Em - C - D)</li> <br></br>
          👉 Aceste melodii sunt bazate pe progresii comune din gamele majore!
        </ul>
        </section>
       
       <section>
        <h2>Concluzie</h2>
        Acordurile dintr-o gamă majoră sunt esențiale pentru orice chitarist. Învață-le, exersează progresiile și aplică-le în cântece! 🎸🔥
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

export default AcordurileGamelorMajore;
