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
function Ritmuri() {
  const location = useLocation<LocationState>();
  const { username } = location.state;
  const codingImage = "./src/assets/coding.png";
  const learningImage = "./src/assets/elearning.png";

  const stackImage = "./src/assets/stack.png";
  const carteImage = "./src/assets/carte.jpg";

  const [redirectPrev, setRedirectPrev] = useState<boolean>(false);
  const [redirectFollow, setRedirectFollow] = useState<boolean>(false);
  const handleButtonFollow = () => {
    setRedirectFollow(true);
  };

  if (redirectFollow) {
    return (
      <Redirect
        to={{
          pathname: `/coada`,
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
          pathname: `/siruri-de-caractere`,
          state: { username: username },
        }}
      />
    );
  }

  const text = `
    Ritmul este elementul care dă viață muzicii și determină tempo-ul și stilul unei piese. 
    Acesta este creat printr-o combinație de strumming (lovirea corzilor) sau 
    fingerpicking (ciupirea corzilor cu degetele).
    Există mai multe tipuri de ritmuri, în funcție de genul muzical. Vom explora ritmuri de bază 
    și avansate, împărțite pe stiluri muzicale.
  `;
  const text1 = `
    🎵 D = Lovitură în jos (Downstroke)
    🎵 U = Lovitură în sus (Upstroke)
    🎵 X = Palm mute sau percuție pe corzi
    🎵 ( ) = Lovitură opțională/slabă
  `;

  const text2 = `
    D   D   U   U   D   U  
     1   2    3   4  
    `;

  const text3=`
    D   X   D   X   D   X   U   X  
    1    2    3   4  
   `;
  
   const text4=`
   🔹 Exemplu (Tipic pentru balade pop-folk):

    D   D   U   U   D   U  
     1   2    3  4  
`;

    const text5=`
  🔹 Ritm rock clasic 4/4 (cu mute și accent pe contratimp):
   
    D   X   D   X   D   X   U   X  
    1    2    3   4  
    `;
  
    const text6=`
   🔹 Ritm rapid pentru rock alternativ:

    D   U   D   U   D   U   D   U  
    1    2    3   4  

    `;

    const text7=`
    🔹 Shuffle Blues (Tipic pentru 12-bar blues)

    D   (U)  D   (U)  D   (U)  D   (U)  
     1     &    2     &    3     &    4     &  

    `;

    const text8=`
    🔹 Accent pe contratimp (Upstrokes)
   
    X   U   X   U   X   U   X   U  
    1    2    3   4  

    `;
    
    const text9=`
    🔹 Alternarea bass-chord (Boom-Chicka Strumming)

    B   D   B   D  
    1    2    3   4  

    B reprezintă coardă de bass a chitarei, mai precis prima coardă de sus.
    `;

    const text10=`
    🔹 Ritm rapid cu palm mute:
    
    D   X   D   X   U   X   D   X  
    `;
    
    const text11=`
    
        ✔ Începe lent și crește viteza treptat
        ✔ Folosește un metronom pentru a păstra ritmul constant
        ✔ Exersează fiecare ritm pe diferite acorduri
        ✔ Încearcă să recunoști ritmurile în cântece reale
        ✔ Cântă împreună cu piesele originale pentru a învăța sincronizarea
    
    `;
    return (
    <div className="lectie-container">
      <header>
        <h1>Ritmuri</h1>
      </header>
      <main>
        <section>
          <RedirectionareLectii
            username={username}
            clasa={"10"}
          ></RedirectionareLectii>
        </section>

        <section>
         
          <h2>Ce este ritmul la chitară?</h2>
          
          <div
          style={{
            boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
            paddingRight: "10px",
            paddingLeft: "10px",
            display: "flex",
            alignItems: "center",
          }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text}</pre>

          </div>
          <br></br>
        </section>

        <section>
          <h2>Simbolurile de bază pentru strumming</h2>
          Înainte de a începe, iată simbolurile folosite pentru a nota ritmurile:
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
            <pre style={{ fontFamily: "inherit" }}>{text1}</pre>
          </div>
            
            <section>
              <h2>Ritmuri de bază pentru începători</h2>
            </section>
            Aceste ritmuri sunt ușor de aplicat în majoritatea melodiilor.
            
            <h3>1. Ritmul Clasic 4/4 (Folk & Pop)</h3>

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
         👉 Acest ritm este folosit în foarte multe cântece pop și folk, cum ar fi "Stand By Me" - Ben E. King.

          <h3>2. Ritmul Rock Clasic 4/4</h3>
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
          👉 X reprezintă un palm mute (atingerea corzilor pentru a obține un sunet percutant). 
          Acest ritm este folosit în "Sweet Home Alabama" - Lynyrd Skynyrd. 
        </section>

        <section>
          <h2>Ritmuri pe stiluri muzicale</h2>
            
            <h3> Ritmuri Pop & Folk</h3>
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
          👉 Se regăsește în "Wonderwall" - Oasis
      
        <h3>Ritmuri Rock</h3>
        
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
          👉 Este folosit în multe piese rock clasice precum "Knocking on Heaven’s Door" - Guns N’ Roses.
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
            <pre style={{ fontFamily: "inherit" }}>{text6}</pre>
          </div>  
            <br></br>
          👉 Acest strumming este folosit în "Smells Like Teen Spirit" - Nirvana.
        
            <h3>Ritmuri Blues</h3>
            <div
            style={{
              display: "flex",
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "0px",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text7}</pre>
          </div> 
          <br></br>
          👉 Se folosește mult în "Johnny B. Goode" - Chuck Berry.
            <br></br>
            <h3>Ritmuri Reggae</h3>
            <div
            style={{
              display: "flex",
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "0px",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text8}</pre>
          </div>
          <br></br>
          👉 Acest ritm este folosit în "No Woman No Cry" - Bob Marley.
          <br></br>
        
            <h3>Ritmuri Country</h3>
            <div
            style={{
              display: "flex",
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "0px",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text9}</pre>
          </div>
          <br></br>
          👉 Se folosește în "Take Me Home, Country Roads" - John Denver.
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
            <pre style={{ fontFamily: "inherit" }}>{text10}</pre>
          </div>
            <br></br>
            👉 Se regăsește în "Ring of Fire" - Johnny Cash.
        </section>

          <section> 
            <h2>Cum să exersezi ritmurile la chitară?</h2>
           
          <div
            style={{
              display: "flex",
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "0px",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text11}</pre>
          </div>
          </section>
        
            <section>
              <h2>Exemple de melodii cu ritmuri populare</h2>
              <ul>
                <li> "Wonderwall" - Oasis (Ritm pop-folk)</li>
                <li> "Knocking on Heaven’s Door" - Guns N’ Roses (Ritm rock lent)</li>
                <li> "No Woman No Cry" - Bob Marley (Ritm reggae)</li>
                <li> "Take Me Home, Country Roads" - John Denver (Ritm country)</li>
              </ul>
              <br></br>
              👉 Exersează aceste ritmuri și încearcă să le aplici în piesele preferate!
            </section>
        
            <section>
              <h2>Concluzie</h2>
              Ritmul este unul dintre cele mai importante elemente ale chitarei. Învață și exersează aceste tipuri de strumming pentru a deveni un chitarist versatil! 🎸🔥
            </section>
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

export default Ritmuri;
