import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogIn from "./LogIn";
import Profile from "./Profile";
import TestsPage from "./TestsPage";
import Lectie from "./Lectie";
import Test from "./Test";
import SubmitPage from "./SubmitPage";
import Lessons from "./Lessons";
import Componente from "./Componentele unui set de tobe";
import ExercitiiRitmice from "./Exercitii Ritmice";
import RitmuriPop from "./RitmuriPop";
import RitmuriRock from "./Ritmuri rock";
import RitmuriPeTomuri from "./Ritmuri pe tomuri";
import RitmuriCountry from "./Ritmuri country";
import StructuraUneiChitari from "./StructuraUneiChitari";
import GameleMuzicale from "./Gamele muzicale";
import AcordurileGamelorMajore from "./Acordurile gamelor majore";
import AcordurileGamelorMinore from "./Acordurile gamelor minore";
import Ritmuri from "./Ritmuri";
import CanteceDeExersat from "./Cantece de exersat";
import ElementeDeBaza from "./Elemente de baza";
import NoteMuzicale from "./Note muzicale";
import DurataNotelor from "./Durata notelor";
import GrafuriNeorientate from "./GrafuriNeorientate";
import GrafuriAlgoritmi from "./GrafuriAlgoritmi";
import IstoriaMuzicii from "./GrafuriNeorientate";
import Raspunsuri from "./Raspunsuri";
import SignIn from "./SignIn";
import Quest from "./Quest";
import MainQuest from "./MainQuest";
import SubmitQuest from "./SubmitQuest";
import Podium from "./Podium";
import Chart from "./Chart";
import Map from "./Map";
import Arbori from "./Arbori";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LogIn} />
        <Route path="/profile" component={Profile} />
        <Route path="/tests" component={TestsPage} />
        <Route path="/test" component={Test} />
        <Route path="/lectie" component={Lectie} />
        <Route path="/submit" component={SubmitPage} />
        <Route path="/lessons" component={Lessons} />
        <Route path="/quest" component={Quest} />
        <Route path="/exerciții-ritmice" component={ExercitiiRitmice} />
        <Route path="/componentele-unui-set-de-tobe" component={Componente} />
        <Route path="/ritmuri-pop" component={RitmuriPop} />
        <Route path="/ritmuri-pe-tomuri" component={RitmuriPeTomuri} />
        <Route path="/structura-unei-chitari" component={StructuraUneiChitari} />
        <Route path="/gamele-muzicale" component={GameleMuzicale} />
        <Route path="/acordurile-gamelor-majore" component={AcordurileGamelorMajore} />
        <Route path="/acordurile-gamelor-minore" component={AcordurileGamelorMinore} />
        <Route path="/cantece-de-exersat" component={CanteceDeExersat} />
        <Route path="/elemente-de-baza" component={ElementeDeBaza} />
        <Route path="/note-muzicale" component={NoteMuzicale} />
        <Route path="durata-notelor" component={DurataNotelor} />
        <Route path="/durata-notelor" component={DurataNotelor} />
        <Route path="/istoria-muzicii" component={IstoriaMuzicii} />
        <Route path="/ritmuri" component={Ritmuri} />
        <Route path="/grafuri-algoritmi" component={GrafuriAlgoritmi} />
        <Route path="/raspunsuri" component={Raspunsuri} />
        <Route path="/signin" component={SignIn} />
        <Route path="/main-quest" component={MainQuest} />
        <Route path="/submit-quest" component={SubmitQuest} />
        <Route path="/podium" component={Podium} />
        <Route path="/map" component={Map} />
        <Route path="/arbori" component={Arbori} />

        <Route path="/chart" component={Chart} />
        <Route
          path="/ritmuri-country"
          component={RitmuriCountry}
        />
        <Route
          path="/ritmuri-rock"
          component={RitmuriRock}
        />

        <Route path="/" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
