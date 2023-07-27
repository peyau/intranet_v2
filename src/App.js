import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Accueil from "./pages/Accueil";
import Encodage from "./pages/Encodage";
import InfosPratiques from "./pages/InfosPratiques";
import PagePerso from "./pages/PagePerso";
import EncodageAnimations from "./pages/EncodageAnimations";
import EncodageReservations from "./pages/EncodageReservations";
import EncodageAbsences from "./pages/EncodageAbsences";
import InfospratiquesEquipe from "./pages/InfospratiquesEquipe";
import InfospratiquesHoraires from "./pages/InfospratiquesHoraires";
import InfospratiquesNumerosTelephone from "./pages/InfospratiquesNumerosTelephone";
import InfospratiquesProtocoles from "./pages/InfospratiquesProtocoles";
import InfospratiquesFAQ from "./pages/InfospratiquesFAQ";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/encodage" element={<Encodage />} />
          <Route path="/encodage/animations" element={<EncodageAnimations />} />
          <Route path="/encodage/absences" element={<EncodageAbsences />} />
          <Route
            path="/encodage/reservations"
            element={<EncodageReservations />}
          />
          <Route path="/infospratiques" element={<InfosPratiques />} />
          <Route
            path="/infospratiques/equipe"
            element={<InfospratiquesEquipe />}
          />
          <Route
            path="/infospratiques/horaires"
            element={<InfospratiquesHoraires />}
          />
          <Route
            path="/infospratiques/numeros"
            element={<InfospratiquesNumerosTelephone />}
          />
          <Route
            path="/infospratiques/protocoles"
            element={<InfospratiquesProtocoles />}
          />
          <Route path="/infospratiques/FAQ" element={<InfospratiquesFAQ />} />
          <Route path="/perso" element={<PagePerso />} />

          <Route path="*" element={<Accueil />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
