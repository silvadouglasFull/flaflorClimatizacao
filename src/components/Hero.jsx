import { image2 } from "@/assets/images";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const Hero = () => {
  const handleCTAClick = () => {
    window.open(
      "https://wa.me/5511951621755?text=Olá! Gostaria de solicitar um orçamento para manutenção de ar condicionado.",
      "_blank"
    );
  };

  return (
    <section className="relative bg-[#172548] text-white py-20 md:py-32">
      <div className="absolute inset-0 opacity-10">
        <img
          className="w-full h-full object-cover object-[center_20%]"
          alt="Técnico profissional fazendo manutenção em ar condicionado"
          src={image2}
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4">
            Seu Ar Condicionado Parou? <br />
            <span className="text-[#83b653]">Resolvemos em Tempo Recorde!</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-8">
            Técnicos certificados para manutenção, limpeza e reparo de ar
            condicionado em todo o estado de São Paulo. Atendimento rápido e
            garantia de qualidade.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={handleCTAClick}
              size="lg"
              className="bg-[#83b653] hover:bg-[#6f9a47] text-white text-lg font-bold py-4 px-8 rounded-full shadow-lg transform transition-transform duration-300"
            >
              <Zap className="mr-3 h-6 w-6 animate-pulse" />
              Solicitar Orçamento Urgente via WhatsApp
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
