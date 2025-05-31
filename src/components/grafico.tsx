// grafico.tsx (ou o componente onde usa o gráfico)
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

// REGISTRA os módulos necessários
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
import { forwardRef } from "react";
const Grafico = forwardRef<HTMLDivElement>((props, ref) => {
  const data = {
    labels: ["Produto A", "Produto B", "Produto C", "Produto D"],
    datasets: [
      {
        label: "Vendas",
        data: [12, 19, 3, 5],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div ref={ref}>
      <Bar data={data} />
    </div>
  );
});

export default Grafico;
