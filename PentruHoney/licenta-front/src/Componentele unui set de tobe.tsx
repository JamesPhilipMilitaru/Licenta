import React from "react";
import "./Lectie.css"; // Import your custom CSS file
import { Button } from "react-bootstrap";
import "./Componentele unui set de tobe.css";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import RedirectionareLectii from "./RedirectionareLectii";
import Carusel from "./Carusel";
interface LocationState {
  username: string;
}
function Componente() {
  const location = useLocation<LocationState>();
  const { username } = location.state;

  const drumImage = "./src/assets/componentele unui set de tobe.png"
  const noteImage = "./src/assets/note.png"
  const [redirectFollow, setRedirectFollow] = useState<boolean>(false);
  const handleButtonFollow = () => {
    setRedirectFollow(true);
  };

  if (redirectFollow) {
    return (
      <Redirect
        to={{
          pathname: `/exercitii-ritmice`,
          state: { username: username },
        }}
      />
    );
  }

  return (
    <div>
      {" "}
      <div className="lectie-container">
        <header>
          <h1>Componentele unui set de tobe</h1>
        </header>
        
        <main>
          <section>
            <RedirectionareLectii
              username={username}
              clasa={"9"}
            ></RedirectionareLectii>
          </section>
          <section>
            <h2>Ce este un set de tobe?</h2>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img style={{ height: "80px" }} src={noteImage} alt="Binary" />
              <p style={{ marginLeft: "70px" }}>
              Setul de tobe este un instrument complex folosit într-o gamă largă de stiluri muzicale, de la rock și jazz până la muzica pop și metal.
              Acesta este format din mai multe componente esențiale, fiecare având un rol specific în crearea ritmului și a dinamicii piesei muzicale.
              </p>
            </div>
          </section>
          <div style={{ display: "flex", alignItems: "center" }}>
              <img style={{ height: "300px" }} src={drumImage} alt="Binary" />
              <p style={{ marginLeft: "40px" }}></p>
              </div>
          <h2>Tobe principale</h2>
          a. Tobele de bază
            <li>Toba mare (Bass Drum)- Este cea mai mare tobă și produce sunetele cele mai grave. Se acționează cu ajutorul unei pedale și oferă fundația ritmică a setului.</li>
            <li>Premierul (Snare Drum)- Este poziționat central și este esențial pentru ritmurile de bază. Are o sonoritate clară și se folosește frecvent pentru accente și contratempi.</li>
            <br></br>
          b.Tom-urile
            <li>Tom mic(High Tom)- Produce un sunet mai înalt și este folosit pentru umpluturi ritmice.</li>
            <li>Tom mediu (Mid Tom)- Are un sunet intermediar și ajută la tranzițiile între tom mic și tom mare.</li>
            <li>Tom mare (Floor Tom)- Este montat pe podea și produce un sunet mai grav, folosit frecvent în finalurile de măsură.</li>
          <section>
            <h2>Cinele(Cymbals)</h2>
            <li>Charleston (Hi-Hat)- Format din două cinele montate împreună pe un stativ cu pedală. Este esențial în majoritatea stilurilor muzicale pentru menținerea ritmului.</li>
            <li>Cinel Ride- Este un cinel mare care oferă un sunet clar și prelungit, folosit pentru menținerea fluxului ritmic.</li>
            <li>Cinel Crash- Produce un sunet puternic și scurt, utilizat în accente muzicale și tranziții.</li>
            <li>Alte cinele (Splash, China, etc.)- Acestea sunt opționale și oferă efecte sonore variate în funcție de stilul muzical abordat.</li>
            <div style={{ fontSize: 0 }}>
              <ul
                style={{
                  display: "inline-block",
                  verticalAlign: "top",
                  marginLeft: "20px",
                  fontSize: "initial",
                }}
              >
              </ul>
            </div>
          </section>

          <section>
            <h2>Accesorii și hardware</h2>
           <li>Pedale pentru toba mare și hi-hat: Permite controlul asupra acestor componente.</li>
           <li>Stative pentru tobe și cinele: Asigură susținerea și stabilitatea instrumentelor.</li>
           <li>Scaunul de toboșar: Confortul este esențial pentru performanță, de aceea un scaun reglabil este important.</li>
          </section>
          <section>
            <h2>Bețele de tobă</h2>
           <p>Bețele sunt esențiale pentru a reda sunetele dorite. Ele variază în grosime, lungime și material, influențând astfel dinamica și tonalitatea sunetului produs.</p>           
           
          </section>
           
         
          
        
             
          
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
    </div>
  );
}

export default Componente;
