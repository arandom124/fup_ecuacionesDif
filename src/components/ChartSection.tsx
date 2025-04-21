
import { FC } from "react";
import GrowthChart from "./GrowthChart";
import MathFormula from "./MathFormula";

const ChartSection: FC = () => {
  return (
    <div id="grafico" className="min-h-screen flex flex-col justify-center section-container animate-fade-in">
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-gradient mb-8">Gráfico Interactivo</h2>
        
        <div className="glass-card p-8">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              El siguiente gráfico muestra el crecimiento exponencial de la población bacteriana según el modelo 
              <MathFormula formula="P(t) = 201 \cdot e^{0.23t}" />. Puedes ajustar los parámetros para ver cómo 
              cambia la curva de crecimiento.
            </p>
            
            <div className="p-4 bg-scientificBlue-500/5 rounded-lg border border-scientificBlue-500/20">
              <h3 className="text-lg font-medium mb-3">Puntos clave:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Población inicial (<MathFormula formula="t = 0" />): <MathFormula formula="P \approx 201" /> bacterias</li>
                <li>A las 3 horas (<MathFormula formula="t = 3" />): <MathFormula formula="P = 400" /> bacterias</li>
                <li>A las 10 horas (<MathFormula formula="t = 10" />): <MathFormula formula="P = 2000" /> bacterias</li>
              </ul>
            </div>
            
            <div className="mt-6">
              <GrowthChart />
            </div>
            
            <div className="mt-6 text-sm text-muted-foreground">
              <p>
                * El gráfico muestra la población de bacterias a lo largo del tiempo basado en el modelo exponencial derivado.
                Ajusta los controles para explorar diferentes escenarios de crecimiento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartSection;
