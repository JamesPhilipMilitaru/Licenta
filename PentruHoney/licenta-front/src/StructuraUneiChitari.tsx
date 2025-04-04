import React from "react";
import "./Lectie.css"; // Import your custom CSS file
import { Button } from "react-bootstrap";
import "./Componentele unui set de tobe.css";
import { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
import RedirectionareLectii from "./RedirectionareLectii";
import Carusel from "./Carusel";

interface LocationState {
  username: string;
}
function Subprograme() {
  const location = useLocation<LocationState>();
  const { username } = location.state;
  const codingImage = "./src/assets/coding.png";
  const learningImage = "./src/assets/elearning.png";
  const mainImage = "./src/assets/main.png";
  const mathImage = "./src/assets/math.png";
  const developImage = "./src/assets/develop.png";
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
          pathname: `/tablouri-unidimenisonale`,
          state: { username: username },
        }}
      />
    );
  }


  const selectionImage = "./src/assets/selectionsort.gif";
  const insertionImage = "./src/assets/insertionsort.gif";
  const bubbleImage = "./src/assets/bubblesort.gif";

  return (
    <div className="lectie-container">
      <header>
        <h1>Subprograme</h1>
      </header>
      <main>
        <section>
          <RedirectionareLectii
            username={username}
            clasa={"10"}
          ></RedirectionareLectii>
        </section>
        <section>
          <h2>Funcțiile</h2>
          Funcțiile sunt instrumente ale limbajului C++ (dar nu numai) care
          permit împărțirea unui cod în mai multe secvențe unitare. Funcțiile
          pot avea două roluri importante:
          <ul>
            <li>
              Să împartă codul în unități ușor de urmărit pentru om (util în
              special în cazul programelor complexe, unde lucrează mai multe
              persoane);
            </li>
            <li>
              Să evite repetarea unei secvențe de cod în mai multe locuri.
            </li>
          </ul>
          <br></br>
          <b>Exemplu: </b>
          Să luăm următorul program, care citește un număr natural și care
          calculează numărul de divizori al oglinditului său.
          <br></br>
          <br></br>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              paddingRight: "10px",
              paddingLeft: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text0}</pre>
          </div>
          <br></br>
          Programul funcționează corect, însă codul poate fi cam greu de
          înțeles. Trebuie să analizăm cu atenție codul pentru a înțelege exact
          de unde până unde se calculează oglinditul și de unde până unde se
          calculează numărul de divizori. Aceste două calcule s-ar putea îngloba
          în două funcții separate, transformând codul într-unul mai logic:
          <br></br>
          <br></br>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              paddingRight: "10px",
              paddingLeft: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text0}</pre>
          </div>
        </section>
        <section>
          <h2>Construcția funcției</h2>
          <h3>Antetul funcției</h3>
          Toate funcțiile au un antet, care arată așa:
          <br></br>
          <br></br>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              paddingRight: "10px",
              paddingLeft: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            tip numeFunctie(tip param1, tip param2, …)
          </div>
          <br></br>
          Ne oferă următoarele informații:
          <ul>
            <li>ce tip de funcție este (int, bool, char, …, sau chiar void)</li>
            <li>
              cum se numește funcția (asemănător cu un nume de variabilă, care
              ne ajută să apelăm funcția mai târziu în programul nostru)
            </li>
            <li>
              care sunt parametrii funcției
              <ul>
                <li>
                  parametrii funcției precizează care sunt valorile care se
                  prelucrează în funcție
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section>
          <h3>Corpul funcției</h3>
          Corpul funcției reprezintă un set de instrucțiuni, delimitate de
          acolade ({}), care precizează pașii care trebuie executați.<br></br>
          Orice variabilă declarată în funcție — inclusiv variabilele din
          parametri — sunt variabile locale și temporare, adică chiar dacă le
          vom modifica valorile între timp, acestea nu vor afecta valorile
          inițiale ale variabilelor din main.<br></br>
          Rezultatul funcției pe care noi vrem să îl furnizăm se poate face cu
          instrucțiunea return rezultat;, unde rezultat reprezintă valoarea ca
          rezultat. Tipul de date al variabilei rezultat trebuie să fie totunul
          cu tipul funcției.<br></br>
          <b>Atenție: </b>După ce se apelează return într-o funcție, toate
          celelalte operații de după nu se mai execută. Spre exemplu, pentru o
          funcție care calculează suma a două numere, vom compune astfel
          funcția:<br></br>
          <br></br>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              paddingRight: "10px",
              paddingLeft: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text2}</pre>
          </div>
          <br></br>
          sau direct:<br></br>
          <br></br>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              paddingRight: "10px",
              paddingLeft: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text3}</pre>
          </div>
        </section>

        <section>
          <h2>Apelarea funcției</h2>
          Pentru a apela o funcție, trebuie să menționăm numele funcției, iar
          între paranteze, să completăm parametrii dați. Spre exemplu, în int
          main, am putea scrie:<br></br>
          <br></br>
          <br></br>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              paddingRight: "10px",
              paddingLeft: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text4}</pre>
          </div>
          Observăm că putem să furnizăm ca parametri atât variabile (n), cât și
          valori efectiv (4). Un alt aspect important este faptul că dacă am fi
          modificat în funcție valoarea primului parametru (care a luat valoarea
          lui n), n-ul nu și-ar fi modificat valoarea.<br></br>
        </section>

        <section>
          <h2>Funcții cu parametri vectori (tablouri unidimensionale) </h2>
          Pe lângă variabile, putem să oferim ca parametru tablouri (vectori sau
          matrici). Iată un cod în C++ care calculează suma numerelor unui
          vector:
          <br></br>
          <br></br>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              paddingRight: "10px",
              paddingLeft: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text5}</pre>
          </div>
          <br></br>
          <b>Atenție:</b> spre deosebire de variabile, dacă vectorul din
          parametru se modifică în timpul funcției, atunci și vectorul inițial
          furnizat se modifică. Acest lucru se datorează faptului că un vector
          este defapt un pointer.<br></br> Putem extinde ideea vectorilor și în
          2D, oferind ca parametru matrici.
        </section>

        <section>
          <h2>Parametrii prin referință. Funcții de tipul void</h2>
          Am stabilit că furnizând o variabilă ca parametru într-o funcție,
          valoarea variabilei nu se modifică. Cu toate acestea, putem să
          specificăm explicit faptul că am vrea să fie modificată valoarea
          variabilei, folosind & (and):
          <br></br>
          <br></br>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              paddingRight: "10px",
              paddingLeft: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            int functie(int &a){" "}
          </div>
          <br></br>
          De obicei, funcțiile care modifică valoarea variabilei nu returnează
          nimic. O funcție care nu returnează nimic se numește funcție de tipul
          void (despre care am vorbit în această lecție). Spre exemplu, o
          funcție care interschimbă valorile a două variabile arată așa:
          <br></br>
          <br></br>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              paddingRight: "10px",
              paddingLeft: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text6}</pre>
          </div>
        </section>

        <Carusel category="Subprograme" username={username}></Carusel>
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

export default Subprograme;
