
import { FC } from "react";
import MathFormula from "./MathFormula";

const ProblemSection: FC = () => {
  return (
    <div id="enunciado" className="P-23min-h-screen flex flex-col justify-center section-container animate-fade-in">
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-gradient mb-8">Enunciado del Problema</h2>
        
        <div className="glass-card p-8 space-y-6">
          <p className="text-xl leading-relaxed">
            La población de bacterias en un cultivo crece a una razón proporcional a la cantidad de bacterias presentes al tiempo <MathFormula formula="t" />. 
            Después de 3 horas hay 400 bacterias, y después de 10 horas hay 2,000. 
            ¿Cuál era la cantidad inicial de bacterias?
          </p>   
                
          
        </div>
      </div>
    </div>
  );
};

export default ProblemSection;
