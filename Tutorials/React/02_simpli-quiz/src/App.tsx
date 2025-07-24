import Score from "./components/Score";
import Question from "./components/Question";
import questions from "./components/QuestionBank";
import QuizControls from "./components/QuizControls";
import { useState } from "react";

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleOptionClick = (selectedOption: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
      setFeedback("Correct");
    } else {
      setFeedback("Wrong");
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setIsQuizCompleted(true);
    }
  };

  const handleStartQuiz = () => {
    setIsStarted(true);
    setIsQuizCompleted(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setFeedback("");
  };

  const handleResetQuiz = () => {
    setIsStarted(false);
    setIsQuizCompleted(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setFeedback("");
  };

  if (isQuizCompleted) {
    return (<><Score score={score} totalQuestions={questions.length} /><QuizControls onStart={handleStartQuiz} onReset={handleResetQuiz}/></>);
  }

  return (
    <>
      {isStarted && (
        <Question
          question={questions[currentQuestionIndex].question}
          option={questions[currentQuestionIndex].options}
          feedback={feedback}
          onOptionClick={handleOptionClick}
        />
      )}
      <QuizControls onStart={handleStartQuiz} onReset={handleResetQuiz}/>
    </>
  );
}

export default App;
