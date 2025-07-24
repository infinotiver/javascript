import { useState } from "react";

interface QuizControlsProp {
  onStart: () => void;
  onReset: () => void;
}

function QuizControls({
  onStart,
  onReset,
}: QuizControlsProp) {
  const [isStarted, setIsStarted] = useState(false);

  const handleStart = () => {
    setIsStarted(true);
    onStart();
  };

  const handleReset = () => {
    setIsStarted(false);
    onReset();
  };
  return (
    <div className="flex justify-center items-center space-x-4 mt-4">
      {!isStarted ? (
        <>
          <button
            onClick={handleStart}
            className="px-4 py-2 bg-blue-500 text-white font-bold rounded border-2 border-blue-800 hover:bg-blue-600 transition"
          >
            Start Quiz
          </button>
        </>
      ) : (
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-red-500 text-white font-bold rounded border-2 border-red-800 hover:bg-red-600 transition"
        >
          Reset
        </button>
      )}
    </div>
  );
}

export default QuizControls;
