import React from "react";
import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import New from "./Components/new";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Home/Header";
import Linebr from "./Components/Navigation/Linebr";
import SocialM from "./Components/Home/SocialM";
import Services from "./Components/Home/Services";
import Audiences from "./Components/Home/Audiences";
import Partner from "./Components/Home/Partner";
import ACompany from "./Components/About/ACompany";
import PublicRelations from "./Components/PublicRelations/PublicRelations";
import PracticeAreas from "./Components/PracticeAreas/PracticeAreas";
import Contact from "./Components/Contact/Contact";
import DigitalMarketing from "./Components/DigitalMarketing/DigitalMarketing";
import WebDev from "./Components/WebDev/WebDev";
import Jobs from "./Components/Jobs/Jobs";
import More from "./Components/More/More";

const GIAN = 0;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HowWe from "./Components/HowWe/HowWe";
import VidServices from "./Components/VidServices/VidServices";
import Partnership from "./Components/Partnership/Partnership";

const App = () => {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<ACompany />} />
          <Route path="/how" element={<HowWe />} />
          <Route path="/practice" element={<PracticeAreas />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/public-relation" element={<PublicRelations />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/web-development" element={<WebDev />} />
          <Route path="/jobs-careers" element={<VidServices />} />
          <Route path="/more-services" element={<More />} />
          <Route path="/pship" element={<Partnership />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
};

export default App;
