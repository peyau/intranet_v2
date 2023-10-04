import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Accueil from "./pages/Accueil";
import Encodage from "./pages/encodage/Encodage";
import InfosPratiques from "./pages/infosPratiques/InfosPratiques";
import PagePerso from "./pages/PagePerso";
import Animations from "./pages/encodage/Animations";
import Reservations from "./pages/encodage/Reservations";
import Absences from "./pages/encodage/Absences";
import Equipe from "./pages/infosPratiques/Equipe";
import Horaires from "./pages/infosPratiques/Horaires";
import NumerosTelephone from "./pages/infosPratiques/NumerosTelephone";
import Protocoles from "./pages/infosPratiques/Protocoles";
import FAQ from "./pages/infosPratiques/FAQ";
import Agendas from "./pages/infosPratiques/Agendas";
import Calendrier from "./components/calendriers/Calendrier";
import { DateProvider } from "./components/calendriers/DateContext";

const App = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <Router>
      <DateProvider>
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
            <Route path="/infospratiques/agendas" element={<Agendas />} />
            <Route path="/perso" element={<PagePerso />} />

            <Route path="*" element={<Accueil />} />
          </Routes>
        </div>
        <button
          className="toggle-calendar-btn"
          onClick={() => setShowCalendar(!showCalendar)}
        >
          {showCalendar ? "Cacher" : "Afficher"}
        </button>
        <div
          className={`calendar-fixed ${showCalendar ? "show-calendar" : ""}`}
        >
          <Calendrier />
        </div>
      </DateProvider>
    </Router>
  );
};

export default App;
