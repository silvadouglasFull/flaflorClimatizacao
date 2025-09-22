import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5511951621755?text=Olá! Gostaria de solicitar um orçamento para meu ar condicionado.",
      "_blank"
    );
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      initial={{ scale: 0, y: 100 }}
      animate={{ scale: 1, y: 0 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300, damping: 20, delay: 1 }}
      className="fixed bottom-6 right-6 bg-[#25D366] text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center z-50"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={32} />
    </motion.button>
  );
};

export default FloatingWhatsApp;
