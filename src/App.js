import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";

// ABOUT submenu pages
import Icretm2026 from "./Icretm2026";
import Schedule from "./Schedule";

import VidhyaVikas from "./VidhyaVikas";

// Other pages
import Speakers from "./Speakers";
import ProgramCommittee from "./ProgramCommittee";
import CallForPapers from "./CallForPapers";
import PaperSubmission from "./PaperSubmission";
import JournalPublication from "./JournalPublication";
import FAQ from "./FAQ";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>

        <Route path="/" element={<Home />} />

        {/* ABOUT MAIN PAGE */}
        <Route path="/icretm2026" element={<Icretm2026 />} />
        <Route path="/schedule" element={<Schedule />} />

        <Route path="/vidhya-vikas" element={<VidhyaVikas />} />

        <Route path="/speakers" element={<Speakers />} />
        <Route path="/program-committee" element={<ProgramCommittee />} />
        <Route path="/call-for-papers" element={<CallForPapers />} />

        {/* YOUR NEW ROUTE */}
        <Route path="/paper-submission" element={<PaperSubmission />} />

        
        <Route path="/journal-publication" element={<JournalPublication />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

