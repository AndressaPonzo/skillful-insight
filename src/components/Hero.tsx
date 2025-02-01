import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-secondary py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Descubra seu verdadeiro potencial
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Transforme Seu Propósito em Realidade
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Um relatório personalizado que revela suas habilidades únicas, paixões e
            o caminho para sua realização profissional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-6 rounded-full transition-all duration-300 transform hover:scale-105"
              onClick={() => window.location.href = "/signup"}
            >
              Comece Agora por R$50
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-6 rounded-full transition-all duration-300"
              onClick={() => {
                const howItWorks = document.getElementById("how-it-works");
                howItWorks?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Saiba Mais
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};