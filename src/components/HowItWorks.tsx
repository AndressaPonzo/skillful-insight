import { motion } from "framer-motion";
import { ClipboardList, LineChart, FileText } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Questionário Interativo",
    description:
      "Responda perguntas estratégicas que revelam suas verdadeiras paixões e talentos.",
  },
  {
    icon: LineChart,
    title: "Análise Profunda",
    description:
      "Nosso sistema analisa suas respostas para identificar padrões e oportunidades únicas.",
  },
  {
    icon: FileText,
    title: "Relatório Personalizado",
    description:
      "Receba um relatório detalhado com insights valiosos e próximos passos práticos.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Funciona</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Um processo simples e eficaz para descobrir seu verdadeiro potencial
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-secondary p-8 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};