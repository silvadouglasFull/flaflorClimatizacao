import { Helmet } from "react-helmet";
import Contact from "./components/Contact";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import { Toaster } from "./components/ui/toaster";
import WhyUs from "./components/WhyUs";

function App() {
  return (
    <div className="bg-[#e6edfd] text-[#172548]">
      <Helmet>
        <title>Fla&Flor | Climatização</title>
        <meta
          name="description"
          content="Serviços de manutenção, limpeza e instalação de ar condicionado em São Paulo. Técnicos certificados e atendimento rápido. Solicite seu orçamento via WhatsApp!"
        />
      </Helmet>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <Toaster />
    </div>
  );
}

export default App;
