import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  {
    title: "Autoconhecimento Profundo",
    description:
      "Descubra suas verdadeiras paixões e talentos através de uma análise detalhada.",
  },
  {
    title: "Clareza de Propósito",
    description:
      "Entenda como alinhar suas habilidades com oportunidades reais de mercado.",
  },
  {
    title: "Plano de Ação Prático",
    description:
      "Receba um guia passo a passo para transformar seus insights em resultados concretos.",
  },
  {
    title: "Identificação de Bloqueios",
    description:
      "Reconheça e supere as crenças limitantes que impedem seu progresso.",
  },
];

export const Benefits = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por Que Escolher Nosso Relatório
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Benefícios que transformarão sua jornada de autoconhecimento
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex gap-4 items-start p-6 bg-white rounded-2xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};