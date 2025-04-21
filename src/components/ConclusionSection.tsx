
import { FC } from "react";
import MathFormula from "./MathFormula";

const ConclusionSection: FC = () => {
  return (
    <div id="conclusiones" className="min-h-screen flex flex-col justify-center section-container animate-fade-in">
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-gradient mb-8">Conclusiones</h2>
        
        <div className="glass-card p-8">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium mb-4">Resumen de la Solución</h3>
              <p className="mb-4">
                Hemos demostrado que el modelo exponencial 
                <MathFormula formula="P(t) = 201 \cdot e^{0.23t}" /> 
                describe el crecimiento bacteriano en el cultivo estudiado.
              </p>
              <div className="p-4 border border-primary/20 bg-primary/5 rounded-lg">
                <ul className="space-y-3">
                  <li>Tasa de crecimiento: <MathFormula formula="k \approx 0.23" /></li>
                  <li>Población inicial: <MathFormula formula="P(0) \approx 201" /> bacterias</li>
                  <li>Tiempo de duplicación: <MathFormula formula="t_d = \frac{\ln(2)}{k} \approx \frac{0.693}{0.23} \approx 3.01" /> horas</li>
                </ul>
              </div>
            </div>
            
            
            
            <div>
              <h3 className="text-xl font-medium mb-4">Limitaciones del Modelo</h3>
              <p className="mb-4">
                El modelo exponencial tiene limitaciones importantes:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-destructive/20 text-destructive">!</span>
                  <span>No considera la capacidad de carga del ambiente (recursos limitados)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-destructive/20 text-destructive">!</span>
                  <span>Sólo es válido para las fases iniciales de crecimiento</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-destructive/20 text-destructive">!</span>
                  <span>No incluye factores como competencia, depredación o limitación de nutrientes</span>
                </li>
              </ul>
              <p className="mt-4 text-sm">
                Para modelos más realistas a largo plazo, se utilizan ecuaciones como el modelo logístico: <MathFormula formula="\frac{dP}{dt} = rP(1-\frac{P}{K})" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConclusionSection;
