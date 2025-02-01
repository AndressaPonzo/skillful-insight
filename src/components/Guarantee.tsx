import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export const Guarantee = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <Shield className="w-10 h-10" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Garantia de Satisfação
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Se você não ficar completamente satisfeito com seu relatório, devolvemos
            seu dinheiro em até 7 dias. Sem perguntas, sem complicação.
          </p>
          <div className="text-sm text-white/80">
            *A garantia é válida para relatórios acessados há menos de 7 dias
          </div>
        </motion.div>
      </div>
    </section>
  );
};