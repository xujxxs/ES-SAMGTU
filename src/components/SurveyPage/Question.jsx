export const Question = ({ question, handleAnswerSelect }) => {
  return (
    <div>
      <div>
        <h3 className="text-4xl font-bold">{question.question}</h3>
      </div>
      <div className="mt-10">
        {question.answers.map((answer, index) => (
          <div className="mb-5 flex justify-center" key={index}>
            <button
              onClick={() => handleAnswerSelect(index)}
              className="py-5 px-5 me-2 mb-2 text-md font-semibold text-gray-500 focus:outline-none bg-white rounded-2xl border border-gray-200 hover:bg-blue-700 hover:text-white w-full transition-all duration-400 ease-in-out transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl active:scale-95"
            >
              {answer.text}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
