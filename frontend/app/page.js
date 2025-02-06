import Image from "next/image";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import ServicesSection from "./components/services/services";
import Projects from "./components/projects/projects";
import Aboutteam from "./components/aboutteam/aboutteam";
import Footer from "./components/footer/footer";
import CookieConsent from "./components/cookieconsent/cookieconsent.jsx";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar/>
      <Hero/>
      <ServicesSection/>
      <Projects/>
      <Aboutteam/>
      <Footer/>
      <CookieConsent/>
    </main>
  );
}
