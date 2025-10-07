import { useState, useEffect } from "react";
import { quizData } from "../../data/quizData";
import { Question } from "./Question";
import { Results } from "./Results";

export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);

  const initializeScores = () => {
    const initialScores = {};
    Object.keys(quizData.directions).forEach((key) => {
      initialScores[key] = 0;
    });
    return initialScores;
  };

  useEffect(() => {
    setScores(initializeScores());
  }, []);

  const handleAnswerSelect = (answerIndex) => {
    const selectedAnswer =
      quizData.questions[currentQuestion].answers[answerIndex];

    const newScores = { ...scores };
    Object.entries(selectedAnswer.scores).forEach(([direction, score]) => {
      newScores[direction] += score;
    });
    setScores(newScores);

    if (currentQuestion < quizData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const progress = ((currentQuestion + 1) / quizData.questions.length) * 100;

  if (isCompleted) {
    return <Results scores={scores} />;
  }

  return (
    <div className="py-20 px-150">
      <div className="flex justify-between text-gray-500">
        <h4 className="font-medium">
          Вопрос {currentQuestion + 1} из {quizData.questions.length}
        </h4>
        <h4 className="font-medium">{progress}%</h4>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-3">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="flex justify-center bg-white mt-20 rounded-2xl p-10 shadow-lg shadow-blue-200">
        <Question
          question={quizData.questions[currentQuestion]}
          handleAnswerSelect={handleAnswerSelect}
        />
      </div>
    </div>
  );
};
