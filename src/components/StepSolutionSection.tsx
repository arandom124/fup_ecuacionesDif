
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
                <span className="inline-flex h-7 w-7 mr-2 items-center justify-center rounded-full bg-primary/20 text-primary font-medium">P.1</span>
                Modelo
              </h3>
              <div className="p-4 border border-primary/20 bg-primary/5 rounded-lg">
            <h3 className="text-lg font-medium mb-2">Datos:</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>El crecimiento es proporcional a la cantidad actual de bacterias</li>
              <li>Cuando <MathFormula formula="t = 3" /> horas: <MathFormula formula="P(3) = 400" /> bacterias</li>
              <li>Cuando <MathFormula formula="t = 10" /> horas: <MathFormula formula="P(10) = 2000" /> bacterias</li>
              <li>Se busca: <MathFormula formula="P(0)" /> (población inicial) ?</li>
            </ul>
          </div>
              
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4 flex items-center">
                <span className="inline-flex h-7 w-7 mr-2 items-center justify-center rounded-full bg-primary/20 text-primary font-medium">P.2</span>
                Solucion del problema
              </h3>
              <p className="mb-4">
              Separación de Variables
                Partimos de nuestra ecuación diferencial y separamos las variables:
              </p>
              haremos separacion de variables.
              <MathFormula 
                formula="\frac{dP}{dt} = kP -> \frac{dP}{P} = k \, dt" 
                block={true} 
              />teniendo la ecuacion de esta manera paso siguiente es integrar.
              <br />
               sabemos que la integral de dP sobre p es Ln
               <br />
               despues de esto aplicamos e a ambos lados de la aplicacion para el Ln
              <MathFormula 
                formula="\int \frac{dP}{P} \, dP = k \int  dt , -> \ln(P) = k t + C, -> e^{Ln(p)} = e^{kt + c}" 
                block={true} 
              />
              <MathFormula 
                formula="p(t) =  e^{kt} .  e^{c} {c}  -> p(t) =  c.  e^{kt}"  
                block={true} 
              />

              <MathFormula 
                formula="400 =  ce^{k(3)} ->  c = \frac{400}{e^{3k}} "  
                block={true} 
              />
              <MathFormula 
                formula="2000 =  ce^{k(10)} ->  c = \frac{2000}{e^{10k}}"  
                block={true} 
              />

              <MathFormula 
                formula="\frac{400}{e^{3k}} = \frac{200}{e^{10k}}"  
                block={true} 
              />
              <MathFormula 
                formula="\frac{e^{10k}}{e^{3k}} = \frac{2000}{400}"  
                block={true} 
              />

              <MathFormula 
                formula="e^{7k}= 5 -> Lne^{7k} = Ln(5) -> 7k = Ln(5) -> k= \frac{Ln(5)}{7} = k= 0.23"  
                block={true} 
              />
              <MathFormula 
                formula=" c = \frac{400}{e^{3(0.23)}} -> c=200.63"  
                block={true} 
              />
              <MathFormula 
                formula="P(t) = 200.63 e^{0.23t} " 
                block={true} 
              />
              Reemplazamos t=0  para saber cuantas bacterias habia inicialmemte en el cultivo.
              <MathFormula 
                formula="P(0) = 200.63 e^{0} - >{0}" 
                block={true} 
              />
              <MathFormula 
                formula="P(0) = 200.63" 
                block={true} 
              />
              <MathFormula 
                formula="P(0) = 200 \text{ bacterias}" 
                block={true} 
              />
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4 flex items-center">
                <span className="inline-flex h-7 w-7 mr-2 items-center justify-center rounded-full bg-primary/20 text-primary font-medium">P3</span>
                Cálculo de la Población Inicial
              </h3>
              
              <p className="mb-4">
                Por lo tanto, la población inicial (cuando <MathFormula formula="t = 0" />) es:
              </p>
              <MathFormula 
                formula="P(0) \approx 200 \text{ bacterias}" 
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
