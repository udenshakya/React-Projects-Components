import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ starNumber = 5 }: { starNumber: number }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (currentIndex: number) => {
    setRating(currentIndex);
  };

  const handleMouseEnter = (currentIndex: number) => {
    setHover(currentIndex);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };

  return (
    <div className="h-screen w-full flex justify-center items-center text-2xl gap-1">
      {[...Array(starNumber)].map((_, index) => {
        index++;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "text-yellow-400 " : " "}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
          />
        );
      })}
    </div>
  );
};

export default Star;
