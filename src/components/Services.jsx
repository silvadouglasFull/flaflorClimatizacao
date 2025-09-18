import { motion } from "framer-motion";
import { Thermometer, Wind, Wrench } from "lucide-react";
import React from "react";

const services = [
  {
    icon: <Wrench className="h-12 w-12 text-[#172548]" />,
    title: "Manutenção Preventiva",
    description:
      "Evite problemas futuros e garanta a eficiência do seu aparelho com nossa manutenção completa.",
  },
  {
    icon: <Wind className="h-12 w-12 text-[#172548]" />,
    title: "Limpeza e Higienização",
    description:
      "Respire um ar mais puro. Removemos fungos, bactérias e ácaros do seu ar condicionado.",
  },
  {
    icon: <Thermometer className="h-12 w-12 text-[#172548]" />,
    title: "Instalação Profissional",
    description:
      "Instalamos seu aparelho com precisão, seguindo todas as normas técnicas para o melhor desempenho.",
  },
];

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-[#e6edfd]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#172548]">
            Nossos Serviços Especializados
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Soluções completas para o conforto do seu ambiente.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
              className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex justify-center items-center mb-6 bg-[#83b653] rounded-full h-24 w-24 mx-auto">
                {React.cloneElement(service.icon, {
                  className: "h-12 w-12 text-white",
                })}
              </div>
              <h3 className="text-2xl font-bold text-[#172548] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
