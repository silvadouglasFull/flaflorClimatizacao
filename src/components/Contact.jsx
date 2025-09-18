import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5511951621755?text=Olá! Gostaria de solicitar um orçamento para manutenção de ar condicionado.",
      "_blank"
    );
  };

  return (
    <section id="contact" className="bg-[#172548] text-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para resolver o problema?
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
            Clique no botão abaixo e fale diretamente com um de nossos
            especialistas pelo WhatsApp. Orçamento rápido, fácil e sem
            compromisso!
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-[#83b653] hover:bg-[#6f9a47] text-white text-lg font-bold py-4 px-8 rounded-full shadow-lg"
            >
              <Phone className="mr-3 h-6 w-6" />
              Falar com um Especialista Agora
            </Button>
          </motion.div>
          <div className="mt-12 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-gray-300">
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2 text-[#83b653]" />
              <span>flaflor.climatizacao@gmail.com</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-[#83b653]" />
              <span>Atendemos em todo o estado de São Paulo</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
