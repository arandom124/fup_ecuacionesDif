
import { FC } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ThankYouSection: FC = () => {
  return (
    <div id="agradecimientos" className="min-h-screen flex flex-col justify-center items-center section-container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-card p-8 md:p-12 max-w-5xl w-full text-center space-y-8"
      >
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-4xl font-bold text-gradient mb-8"
        >
         👋🏻 ¡Gracias por su Atención!
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-lg text-muted-foreground mb-8"
        >
          Esperamos que esta presentación haya sido útil para comprender el modelado matemático del crecimiento bacteriano.
        </motion.p>

        

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-8 p-6 rounded-lg bg-gradient-to-r from-scientificBlue-500/20 to-futuristicPurple-500/20 border border-white/10 hover:from-scientificBlue-500/30 hover:to-futuristicPurple-500/30 transition-colors duration-300"
        >
          <blockquote className="italic text-xl md:text-2xl font-medium bg-gradient-to-r from-scientificBlue-400 to-futuristicPurple-400 bg-clip-text text-transparent">
          ✏️ "Las matemáticas son el alfabeto con el cual Dios ha escrito el universo"
          </blockquote>
          <p className="mt-4 text-muted-foreground">- Galileo Galilei</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ThankYouSection;
