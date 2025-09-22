import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Angelo Silva",
    location: "São Paulo, SP",
    comment:
      "Serviço excelente! Profissionais muito competentes, pontuais e cuidadosos. Fizeram a limpeza do ar-condicionado com muita atenção aos detalhes e explicaram tudo de forma clara. Atendimento rápido, preço justo e o ambiente ficou super agradável depois do serviço. Recomendo de olhos fechados!",
    rating: 5,
  },
  {
    name: "Amanda Maciel",
    location: "Tatuí, SP",
    comment:
      "Tive uma excelente experiência com FlaFlor Climatização. Foram extremamente responsáveis e profissionais do início ao fim. Atendimento respeitoso e transparente, o que nos transmitiu muita confiança. Eu e minha família nos sentimos totalmente seguros com o serviço prestado. Recomendo de coração!",
    rating: 5,
  },
  {
    name: "Tati Carvalho",
    location: "Santos, SP",
    comment:
      "Super indico! Profissionais muito comprometidos com o serviço e com o cliente. Caprichosos e honestos. Experiência no ramo há mais de 10 anos.",
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
