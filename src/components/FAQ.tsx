import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Quanto tempo leva para receber meu relatório?",
    answer:
      "Seu relatório é gerado instantaneamente após a conclusão do questionário interativo.",
  },
  {
    question: "O relatório é realmente personalizado?",
    answer:
      "Sim! Cada relatório é único e baseado em suas respostas específicas ao questionário, considerando suas experiências, preferências e objetivos pessoais.",
  },
  {
    question: "Posso acessar meu relatório mais de uma vez?",
    answer:
      "Sim, você terá acesso ilimitado ao seu relatório através de sua conta por tempo indeterminado.",
  },
  {
    question: "Como funciona a garantia de satisfação?",
    answer:
      "Oferecemos uma garantia de reembolso de 7 dias. Se você não estiver satisfeito, basta nos contatar que devolveremos seu dinheiro integralmente.",
  },
  {
    question: "Preciso ter experiência prévia com autoconhecimento?",
    answer:
      "Não! Nosso questionário foi desenvolvido para ser acessível a todos, independentemente de sua experiência prévia com ferramentas de autoconhecimento.",
  },
];

export const FAQ = () => {
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
            Perguntas Frequentes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tire suas dúvidas sobre nosso relatório de autoconhecimento
          </p>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};