import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface ScoreProps {
  score: number;
  totalQuestions: number;
}

function Score({ score, totalQuestions }: ScoreProps) {
  const data = {
    labels: ["Correct", "Incorrect"],
    datasets: [
      {
        data: [score, totalQuestions - score],
        backgroundColor: ["#4CAF50", "#F44336"],
        hoverBackgroundColor: ["#45A049", "#E53935"],
      },
    ],
  };

  return (
    <div className="p-4 flex flex-col justify-center bg-gray-50 rounded border">
      <p className="text-lg font-semibold text-gray-800">
        Score: {score} / {totalQuestions}
      </p>
      <div className="mt-4">
        <Pie data={data} />
      </div>
    </div>
  );
}

export default Score;
