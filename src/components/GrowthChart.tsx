
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

interface GrowthChartProps {
  initialPopulation?: number;
  growthRate?: number;
}

const GrowthChart = ({ initialPopulation = 201, growthRate = 0.23 }: GrowthChartProps) => {
  const [k, setK] = useState(growthRate);
  const [initialPop, setInitialPop] = useState(initialPopulation);

  // Genera los datos para la gráfica
  const generateData = (initial: number, rate: number) => {
    const data = [];
    for (let t = 0; t <= 12; t++) {
      data.push({
        time: t,
        population: Math.round(initial * Math.exp(rate * t)),
      });
    }
    return data;
  };

  const data = generateData(initialPop, k);

  return (
    <div className="w-full space-y-6">
      <div className="glass-card p-6">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis
              dataKey="time"
              label={{
                value: "Tiempo (horas)",
                position: "insideBottomRight",
                offset: -10,
              }}
              stroke="currentColor"
            />
            <YAxis
              label={{
                value: "Población de bacterias",
                angle: -90,
                position: "insideLeft",
              }}
              stroke="currentColor"
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(255,255,255,0.8)",
                borderRadius: "8px",
                border: "none",
                color: "#333",
              }}
              formatter={(value: number) => [`${value} bacterias`, "Población"]}
              labelFormatter={(label) => `Tiempo: ${label} horas`}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="population"
              name="Población bacteriana"
              stroke="#8b5cf6"
              strokeWidth={3}
              dot={{
                stroke: "#6366f1",
                strokeWidth: 2,
                r: 4,
                fill: "#8b5cf6",
              }}
              activeDot={{
                stroke: "#4f4fe3",
                strokeWidth: 2,
                r: 6,
                fill: "#8b5cf6",
              }}
            />
          </LineChart>
        </ResponsiveContainer>

        <div className="mt-8 space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="k-slider">Tasa de crecimiento (k): {k.toFixed(2)}</Label>
            </div>
            <Slider
              id="k-slider"
              min={0.01}
              max={0.5}
              step={0.01}
              defaultValue={[k]}
              onValueChange={(value) => setK(value[0])}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="pop-slider">Población inicial: {Math.round(initialPop)} bacterias</Label>
            </div>
            <Slider
              id="pop-slider"
              min={50}
              max={400}
              step={1}
              defaultValue={[initialPop]}
              onValueChange={(value) => setInitialPop(value[0])}
              className="w-full"
            />
          </div>
        </div>
      </div>

      <div className="text-sm text-muted-foreground italic">
        * Mueve los deslizadores para ver cómo cambia la curva de crecimiento.
      </div>
    </div>
  );
};

export default GrowthChart;
