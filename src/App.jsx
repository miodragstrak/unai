import Hero from "./components/Hero";
import WhatYouLearn from "./components/WhatYouLearn";
import Steps from "./components/Steps";
import Programs from "./components/Programs";
import WhyUnAI from "./components/WhyUnAI";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatYouLearn />
      <Steps />
      <Programs />
      <WhyUnAI />
      <FinalCTA />
      <Footer />
    </>
  );
}
