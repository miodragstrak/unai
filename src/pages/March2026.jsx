import HeroMarch from "../components/march/HeroMarch";
import ProgramDetails from "../components/march/ProgramDetails";
import PaymentModel from "../components/march/PaymentModel";
import Audience from "../components/march/Audience";
import CTASection from "../components/march/CTASection";
import Curriculum from "../components/march/Curriculum";
import Certificate from "../components/march/Certificate";
import AIVideoBootcamp from "../components/march/AIVideoBootcamp";
import Projects from "../components/march/Projects";

export default function March2026() {
  return (
    <>
      <HeroMarch />
      <ProgramDetails />
      <PaymentModel />
      <Audience />
      <Curriculum />
      <AIVideoBootcamp />
      <Projects />
      <Certificate />
      <CTASection />
    </>
  );
}