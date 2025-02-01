import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Empreendedora",
    content:
      "O relatório me ajudou a identificar minhas verdadeiras paixões e transformá-las em um negócio de sucesso. Uma ferramenta incrível!",
    rating: 5,
  },
  {
    name: "João Santos",
    role: "Profissional em Transição",
    content:
      "Finalmente encontrei clareza sobre meu próximo passo profissional. O relatório foi fundamental para essa descoberta.",
    rating: 5,
  },
  {
    name: "Ana Costa",
    role: "Estudante",
    content:
      "Me ajudou a escolher minha carreira com mais confiança. As insights foram precisos e esclarecedores.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Histórias reais de pessoas que transformaram suas vidas com nosso relatório
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-secondary p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};