import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria S.",
    location: "São Paulo, SP",
    comment:
      "Atendimento super rápido! O técnico resolveu o problema do meu ar em menos de uma hora. Recomendo!",
    rating: 5,
  },
  {
    name: "João P.",
    location: "Campinas, SP",
    comment:
      "Serviço profissional e de confiança. Fizeram a limpeza completa e o ar ficou como novo. Muito satisfeito.",
    rating: 5,
  },
  {
    name: "Ana L.",
    location: "Santos, SP",
    comment:
      "Equipe muito atenciosa e qualificada. Explicaram todo o procedimento. Com certeza chamarei novamente.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-[#e6edfd]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#172548]">
            O que nossos clientes dizem
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A satisfação de quem confia em nosso trabalho.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg flex flex-col"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6 flex-grow">
                "{testimonial.comment}"
              </p>
              <div>
                <p className="font-bold text-[#172548]">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
