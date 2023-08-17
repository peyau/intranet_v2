import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Accueil from "./pages/Accueil";
import Encodage from "./pages/Encodage/Encodage";
import InfosPratiques from "./pages//InfosPratiques/InfosPratiques";
import PagePerso from "./pages/PagePerso";
import Animations from "./pages/Encodage/Animations";
import Reservations from "./pages/Encodage/Reservations";
import Absences from "./pages/Encodage/Absences";
import Equipe from "./pages/InfosPratiques/Equipe";
import Horaires from "./pages/InfosPratiques/Horaires";
import NumerosTelephone from "./pages/InfosPratiques/NumerosTelephone";
import Protocoles from "./pages/InfosPratiques/Protocoles";
import FAQ from "./pages/InfosPratiques/FAQ";
import Calendrier from "./components/Calendrier";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/*" element={<Accueil />} />
          <Route path="/encodage" element={<Encodage />} />
          <Route path="/encodage/animations" element={<Animations />} />
          <Route path="/encodage/absences" element={<Absences />} />
          <Route path="/encodage/reservations" element={<Reservations />} />
          <Route path="/infospratiques" element={<InfosPratiques />} />
          <Route path="/infospratiques/equipe" element={<Equipe />} />
          <Route path="/infospratiques/horaires" element={<Horaires />} />
          <Route
            path="/infospratiques/numeros"
            element={<NumerosTelephone />}
          />
          <Route path="/infospratiques/protocoles" element={<Protocoles />} />
          <Route path="/infospratiques/FAQ" element={<FAQ />} />
          <Route path="/perso" element={<PagePerso />} />

          <Route path="*" element={<Accueil />} />
        </Routes>
      </div>
      <div className="calendar-fixed">
        <Calendrier />
      </div>
    </Router>
  );
};

export default App;
