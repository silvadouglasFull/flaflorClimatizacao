import { logo } from "@/assets/images";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Instagram, Phone } from "lucide-react";

const Header = () => {
  const handleCTAClick = () => {
    window.open(
      "https://wa.me/5511951621755?text=Olá! Gostaria de solicitar um orçamento para meu ar condicionado.",
      "_blank"
    );
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#172548] text-white shadow-lg sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            style={{
              height: 65,
            }}
          />
          <span className="text-2xl font-bold tracking-tight text-center">
            Fla
            <span className="text-[#83b653]">Flor</span>
            <p className="text-[#fff] captalize text-center text-sm">
              Climitatização
            </p>
          </span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#services"
            className="hover:text-[#83b653] transition-colors duration-300"
          >
            Serviços
          </a>
          <a
            href="#why-us"
            className="hover:text-[#83b653] transition-colors duration-300"
          >
            Diferenciais
          </a>
          <a
            href="#contact"
            className="hover:text-[#83b653] transition-colors duration-300"
          >
            Contato
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <a
            href="https://www.instagram.com/flaflor.climatizacao/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#83b653] transition-colors duration-300"
          >
            <Instagram size={24} />
          </a>
          <Button
            onClick={handleCTAClick}
            className="hidden sm:flex bg-[#83b653] hover:bg-[#6f9a47] text-white font-bold"
          >
            <Phone className="mr-2 h-4 w-4" /> Orçamento Rápido
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
