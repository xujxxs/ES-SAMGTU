import { useMemo } from "react";
import { quizData } from "../../data/quizData";
import { DirectionItem } from "../HomePage/main/Direct/DirectionItem";
import { DirectionData } from "../../data/cardOfDirection.data";

const directionCodeMap = {
  ПМ: "01.03.02",
  ИВТ: "09.03.01",
  РИС: "09.03.02",
  ПИнф: "09.03.03",
  ПИ: "09.03.04",
  ИБ: "10.03.01",
  РТ: "11.03.01",
  ПБ: "12.03.01",
  АТ: "15.03.04",
  САУ: "27.03.03",
  УТС: "27.03.04",
};

export const Results = ({ scores }) => {
  const sortedDirections = useMemo(() => {
    return Object.entries(scores)
      .sort(([, scoreA], [, scoreB]) => scoreB - scoreA)
      .map(([key]) => key);
  }, [scores]);

  const topDirections = sortedDirections.slice(0, 3);

  const topDirectionItems = useMemo(() => {
    return topDirections
      .map((code) => {
        const directionNumber = directionCodeMap[code];
        return DirectionData.find((item) => item.number === directionNumber);
      })
      .filter((item) => item !== undefined);
  }, [topDirections]);
  console.log(topDirectionItems);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="text-center max-w-4xl mx-auto px-4 mt-10">
        <div className="flex justify-center mb-6">
          <img src="/congratulations.svg" alt="Happy" />
        </div>
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Поздравляем!</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl">
          На основе вашего опроса мы определили идеальные направления для
          поступления на ИАИТ. Эти рекомендации учитывают ваши интересы, сильные
          стороны и карьерные цели.
        </p>
      </div>
      <h2 className=" text-3xl font-bold text-gray-700 mt-20 mb-14">
        Топ рекомендуемых направлений
      </h2>
      <div className="flex justify-center flex-wrap gap-6 max-w-6xl mx-auto px-4 mb-19">
        {topDirectionItems.map((directionItem, index) => (
          <DirectionItem
            key={index}
            id={index}
            image={directionItem.image}
            name={directionItem.name}
            code={directionItem.number}
          />
        ))}
      </div>
    </div>
  );
};
