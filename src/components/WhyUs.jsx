import { image1, image3 } from "@/assets/images";
import { motion } from "framer-motion";
import { Award, Clock, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";
const features = [
  {
    icon: <Award className="h-10 w-10 text-[#83b653]" />,
    title: "Técnicos Certificados",
    description:
      "Nossa equipe é formada por profissionais qualificados e experientes, garantindo um serviço seguro e eficaz.",
  },
  {
    icon: <Clock className="h-10 w-10 text-[#83b653]" />,
    title: "Atendimento Rápido",
    description:
      "Entendemos a sua urgência. Chegamos rápido para resolver o problema do seu ar condicionado.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-[#83b653]" />,
    title: "Garantia e Confiança",
    description:
      "Oferecemos garantia em todos os nossos serviços, transmitindo a segurança que você merece.",
  },
];

const WhyUs = () => {
  const [imagem, setImage] = useState(0);
  useEffect(() => {
    const features = [image1, image3];
    const randonIndex = Math.floor(Math.random() * features.length);
    setImage(features[randonIndex]);
  }, []);
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#172548] mb-6">
              Por que escolher a FLAFLOR?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Não arrisque o seu conforto. Confie em quem entende do assunto e
              oferece o melhor serviço da região.
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-[#e6edfd]">
                    {feature.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-[#172548]">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              className="rounded-xl shadow-2xl w-full max-w-md object-cover"
              alt="Técnico especialista em ar condicionado sorrindo"
              src={imagem}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
