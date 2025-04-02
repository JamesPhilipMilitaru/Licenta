import React from "react";
import "./Lectie.css"; // Import your custom CSS file
import { Button } from "react-bootstrap";
import "./Componentele unui set de tobe.css";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import { useLocation} from "react-router-dom";
import RedirectionareLectii from "./RedirectionareLectii";


interface LocationState {
  username: string;
}
function GameleMuzicale() {
  const location = useLocation<LocationState>();
  const { username } = location.state;
  const elguitarImage = "./src/assets/electricguitar.png";
  const banjoImage = "./src/assets/banjosticker.png";
  const acmajorImage= "./src/assets/tabel-acmajore.jpg"
  const acminorImage= "./src/assets/tabel-acminore.jpg"

  const [redirectPrev, setRedirectPrev] = useState<boolean>(false);
  const [redirectFollow, setRedirectFollow] = useState<boolean>(false);
  const handleButtonFollow = () => {
    setRedirectFollow(true);
  };

  if (redirectFollow) {
    return (
      <Redirect
        to={{
          pathname: `/divide-et-impera`,
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
          pathname: `/subprograme`,
          state: { username: username },
        }}
      />
    );
  }

  return (
    <div className="lectie-container">
      <header>
        <h1>Gamele Muzicale</h1>
        <br></br>
      </header>
      <main>
        <section>
          <RedirectionareLectii
            username={username}
            clasa={"10"}
          ></RedirectionareLectii>
        </section>
        <section>
          <h2>Ce sunt gamele muzicale?</h2>
          O gamă muzicală este o succesiune de note organizate după un anumit tipar melodic. Ele sunt esențiale pentru improvizație, compoziție și dezvoltarea dexterității pe chitară.
          <br></br>  
          <br></br>      
          Există mai multe tipuri de game, dar cele mai importante sunt:
          <ul>
            <li>Gama majoră</li>
            <li>Gama minoră</li>
            <li>Gama pentatonică</li>
            <li>Gama blues</li>
          </ul>  
          <br></br>
          
          <h2>Gama majoră</h2>
          🔹 Este baza teoriei muzicale și are un sunet vesel, luminos.<br></br>
          🔹 Formula intervalelor: Ton – Ton – Semiton – Ton – Ton – Ton – Semiton
          <br></br>
          <br></br>

          <h3>Exemplu</h3>

          Gama <b>Do</b> major va avea următoarele note:
          <br></br>
          <br></br>
          C(Do) - D(Re) - E(Mi) - F(Fa) - G(Sol) - A(La) - B(Si) - C(Do)

          <br></br>
          <br></br>
          <div>
          Acesta este tabelul complet al gamelor majore naturale:
          <br></br>
          <br></br>
           <img
          style={{ height: "210px" }}
          src={acmajorImage}
          alt="Binary"
        />
        </div>
          <br></br>
          <br></br>
          <h2>Gama Minoră</h2>
          🔹 Are un sunet mai melancolic și este baza multor piese rock și blues.<br></br>
          🔹 Formula intervalelor: Ton – Semiton – Ton – Ton – Semiton – Ton – Ton
          <br></br>
          <h3>Exemplu</h3>
          Gama <b>A minor</b> va avea următoarele note:<br></br>
          A(La) - B(Si) - C(Do) - D(Re) - E(Mi) - F(Fa) - G(Sol) - A(La)
         
          <br></br>
          <br></br>
          <div>
          Acesta este tabelul complet al gamelor majore naturale:
          <br></br>
          <br></br>
           <img
          style={{ height: "210px" }}
          src={acminorImage}
          alt="Binary"
        />
        </div>

        </section>

        <section>
          <h2>Gama pentatonică</h2>
          🔹 Este folosită în rock, blues și solo-uri de chitară.<br></br>
          🔹 Conține doar cinci note, eliminând notele care pot crea disonanțe.<br></br>
          🔹 Formula: 1 - 2 - 3 - 5 - 6 (fără notele 4 și 7 din gama majoră)<br></br>
          <br></br>
          <h3>Exemplu</h3>
          Gama <b>A minor pentatonică</b> va avea următoarele note:<br></br>
          A(La) - C(Do) - D(Re) - E(Mi) - G(Sol) - A(La)
          <br></br>
        </section>

        <section>
          <h2>Gama blues</h2>
          🔹 Este o variantă a gamei pentatonice, dar cu o "blue note" adăugată (o notă care creează tensiune și expresivitate).<br></br>
          🔹 Formula: 1 - ♭3 - 4 - ♭5 - 5 - ♭7
          <br></br>
          <h3>Exemplu</h3>
          Gama <b>A minor pentatonică</b> va avea următoarele note:<br></br>
          A(La) - C(Do) - D(Re) - D#(Re#) - E(Mi) - G(Sol) - A(La)
          
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
          src={banjoImage}
          alt="Binary"
        />

        <section>

          <h2>Concluzie</h2>
          Gamele sunt fundamentale pentru orice chitarist. Învață-le pe rând și aplică-le în improvizație și compoziție! 🎸🔥
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

export default GameleMuzicale;
