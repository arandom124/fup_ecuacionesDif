
import { FC } from "react";
import MathFormula from "./MathFormula";

const ModelingSection: FC = () => {
  return (
    <div id="modelado" className="min-h-screen flex flex-col justify-center section-container animate-fade-in">
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-gradient mb-8">Modelado Matemático</h2>
        
        <div className="glass-card p-8">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium mb-4">Ecuación Diferencial</h3>
              <p className="mb-6">
                El crecimiento es proporcional a la población actual, lo que se expresa como:
              </p>
              <MathFormula 
                formula="\frac{dP}{dt} = kP" 
                block={true}
                className="mb-6" 
              />
              <p className="text-base leading-relaxed">
                Donde:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li><MathFormula formula="P" /> es la población de bacterias en el tiempo <MathFormula formula="t" /></li>
                <li><MathFormula formula="\frac{dP}{dt}" /> es la tasa de cambio de la población con respecto al tiempo</li>
                <li><MathFormula formula="k" /> es la constante de proporcionalidad (tasa de crecimiento)</li>
              </ul>
            </div>
            
            <div className="p-6 bg-futuristicPurple-500/5 rounded-lg border border-futuristicPurple-500/20">
              <h3 className="text-xl font-medium mb-4">Características del Modelo</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-futuristicPurple-500/20 text-futuristicPurple-500">1</span>
                  <span>Es una ecuación diferencial de primer orden con variables separables</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-futuristicPurple-500/20 text-futuristicPurple-500">2</span>
                  <span>La solución produce una función exponencial (crecimiento exponencial)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-futuristicPurple-500/20 text-futuristicPurple-500">3</span>
                  <span>El modelo es válido durante la fase de crecimiento exponencial en cultivos bacterianos</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4">Tipo de Crecimiento</h3>
              <p className="mb-4">
                Este modelo representa un <span className="font-medium">crecimiento exponencial</span>, donde la 
                tasa de cambio de la población es directamente proporcional al tamaño actual de la población.
              </p>
              <p className="text-base leading-relaxed">
                La solución general de esta ecuación diferencial tendrá la forma:
              </p>
              <MathFormula 
                formula="P(t) = Ce^{kt}" 
                block={true} 
              />
              <p className="mt-4 text-sm text-muted-foreground">
                Donde <MathFormula formula="C" /> es una constante que representa la población inicial <MathFormula formula="P(0)" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelingSection;
