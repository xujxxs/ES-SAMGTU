import { DirectionItem } from "./DirectionItem";
import { DirectionData } from "../../../../data/cardOfDirection.data";

export const Directions = () => {
  return (
    <div className="bg-white py-20 sm:py-30 lg:py-40 mt-10 sm:mt-15 lg:mt-20 px-4 sm:px-6 lg:px-40">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-8 justify-items-center">
        {DirectionData.map((s) => (
          <DirectionItem
            key={s.id}
            id={s.id}
            image={s.image}
            name={s.name}
            code={s.number}
          />
        ))}
      </div>
    </div>
  );
};
