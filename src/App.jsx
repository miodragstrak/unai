import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import WhatYouLearn from "./components/WhatYouLearn";
import Steps from "./components/Steps";
import Programs from "./components/Programs";
import WhyUnAI from "./components/WhyUnAI";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Collaboration from "./components/Collaboration";
import Instructor from "./components/Instructor";
import ScrollToHash from "./components/ScrollToHash";

import March2026 from "./pages/March2026";

function Home() {
  return (
    <>
      <Hero />
      <WhatYouLearn />
      <Collaboration />
      <Instructor />
      <WhyUnAI />
      <FinalCTA />
    </>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/march-2026" element={<March2026 />} />
      </Routes>
      <Footer />
    </>
  );
}
