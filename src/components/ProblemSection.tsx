
import { FC } from "react";
import MathFormula from "./MathFormula";

const ProblemSection: FC = () => {
  return (
    <div id="enunciado" className="min-h-screen flex flex-col justify-center section-container animate-fade-in">
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-gradient mb-8">Enunciado del Problema</h2>
        
        <div className="glass-card p-8 space-y-6">
          <p className="text-xl leading-relaxed">
            La población de bacterias en un cultivo crece a una razón proporcional a la cantidad de bacterias presentes al tiempo <MathFormula formula="t" />. 
            Después de 3 horas hay 400 bacterias, y después de 10 horas hay 2,000. 
            ¿Cuál era la cantidad inicial de bacterias?
          </p>
          
          <div className="p-4 border border-primary/20 bg-primary/5 rounded-lg">
            <h3 className="text-lg font-medium mb-2">Datos:</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>El crecimiento es proporcional a la cantidad actual de bacterias</li>
              <li>Cuando <MathFormula formula="t = 3" /> horas: <MathFormula formula="P(3) = 400" /> bacterias</li>
              <li>Cuando <MathFormula formula="t = 10" /> horas: <MathFormula formula="P(10) = 2000" /> bacterias</li>
              <li>Se busca: <MathFormula formula="P(0)" /> (población inicial)</li>
            </ul>
          </div>      
          
        </div>
      </div>
    </div>
  );
};

export default ProblemSection;
