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
    <div>
      {topDirectionItems.map((directionItem, index) => (
        <DirectionItem
          id={index}
          image={directionItem.image}
          name={directionItem.name}
          code={directionItem.number}
        />
      ))}
    </div>
  );
};
