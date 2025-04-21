
import { FC } from "react";
import MathFormula from "./MathFormula";

const StepSolutionSection: FC = () => {
  return (
    <div id="solucion" className="min-h-screen flex flex-col justify-center section-container animate-fade-in">
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-gradient mb-8">Solución Paso a Paso</h2>
        
        <div className="glass-card p-8">
          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-medium mb-4 flex items-center">
                <span className="inline-flex h-7 w-7 mr-2 items-center justify-center rounded-full bg-primary/20 text-primary font-medium">1</span>
                Separación de Variables
              </h3>
              <p className="mb-4">
                Partimos de nuestra ecuación diferencial y separamos las variables:
              </p>
              <MathFormula 
                formula="\frac{dP}{dt} = kP" 
                block={true} 
              />
              <MathFormula 
                formula="\frac{dP}{P} = k \, dt" 
                block={true} 
              />
              <MathFormula 
                formula="\int \frac{1}{P} \, dP = \int k \, dt" 
                block={true} 
              />
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4 flex items-center">
                <span className="inline-flex h-7 w-7 mr-2 items-center justify-center rounded-full bg-primary/20 text-primary font-medium">2</span>
                Integración
              </h3>
              <p className="mb-4">
                Integramos ambos lados de la ecuación:
              </p>
              <MathFormula 
                formula="\ln|P| = kt + C_1" 
                block={true} 
              />
              <p className="mb-2">
                Aplicando exponencial a ambos lados:
              </p>
              <MathFormula 
                formula="P = e^{kt + C_1} = e^{C_1} \cdot e^{kt} = C \cdot e^{kt}" 
                block={true} 
              />
              <p className="text-sm text-muted-foreground mt-2">
                Donde <MathFormula formula="C = e^{C_1}" /> es una nueva constante.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4 flex items-center">
                <span className="inline-flex h-7 w-7 mr-2 items-center justify-center rounded-full bg-primary/20 text-primary font-medium">3</span>
                Aplicación de Condiciones Iniciales
              </h3>
              <p className="mb-4">
                Usamos las condiciones dadas en el problema:
              </p>
              
              <div className="space-y-4">
                <div className="p-3 bg-scientificBlue-500/10 rounded-md">
                  <p className="mb-1">Para <MathFormula formula="t = 3" />, <MathFormula formula="P = 400" />:</p>
                  <MathFormula 
                    formula="400 = C \cdot e^{3k}" 
                    block={true} 
                  />
                </div>
                
                <div className="p-3 bg-scientificBlue-500/10 rounded-md">
                  <p className="mb-1">Para <MathFormula formula="t = 10" />, <MathFormula formula="P = 2000" />:</p>
                  <MathFormula 
                    formula="2000 = C \cdot e^{10k}" 
                    block={true} 
                  />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4 flex items-center">
                <span className="inline-flex h-7 w-7 mr-2 items-center justify-center rounded-full bg-primary/20 text-primary font-medium">4</span>
                Resolución del Sistema
              </h3>
              <p className="mb-4">
                Dividimos la segunda ecuación entre la primera:
              </p>
              <MathFormula 
                formula="\frac{2000}{400} = \frac{C \cdot e^{10k}}{C \cdot e^{3k}}" 
                block={true} 
              />
              <MathFormula 
                formula="5 = e^{7k}" 
                block={true} 
              />
              <p className="mb-2">
                Aplicando logaritmo natural a ambos lados:
              </p>
              <MathFormula 
                formula="\ln(5) = 7k" 
                block={true} 
              />
              <MathFormula 
                formula="k = \frac{\ln(5)}{7} \approx 0.23" 
                block={true} 
              />
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4 flex items-center">
                <span className="inline-flex h-7 w-7 mr-2 items-center justify-center rounded-full bg-primary/20 text-primary font-medium">5</span>
                Cálculo de la Población Inicial
              </h3>
              <p className="mb-4">
                Ahora despejamos <MathFormula formula="C" /> usando el valor de <MathFormula formula="k" />:
              </p>
              <MathFormula 
                formula="400 = C \cdot e^{3 \cdot 0.23}" 
                block={true} 
              />
              <MathFormula 
                formula="C = \frac{400}{e^{3 \cdot 0.23}} \approx \frac{400}{1.99} \approx 200.65" 
                block={true} 
              />
              <p className="mb-4">
                Por lo tanto, la población inicial (cuando <MathFormula formula="t = 0" />) es:
              </p>
              <MathFormula 
                formula="P(0) = C \cdot e^{0} = C \approx 201 \text{ bacterias}" 
                block={true} 
              />
              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <p className="font-medium text-center">
                  La cantidad inicial de bacterias en el cultivo era aproximadamente 201 bacterias.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepSolutionSection;
