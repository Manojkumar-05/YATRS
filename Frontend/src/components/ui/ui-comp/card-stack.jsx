"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

let interval;

export const CardStack = ({ items, offset, scaleFactor }) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState(items);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      startFlipping();
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isHovered]);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleNext = () => {
    setCards((prevCards) => {
      const newArray = [...prevCards];
      newArray.unshift(newArray.pop());
      return newArray;
    });
  };

  const handlePrev = () => {
    setCards((prevCards) => {
      const newArray = [...prevCards];
      newArray.push(newArray.shift());
      return newArray;
    });
  };

  return (
    <div
      className="relative h-60 w-full md:w-[48rem] mb-10 ml-6"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute bg-black hover:bg-[#0a0a0a] h-[13rem] w-[90%] md:w-[48rem] rounded-md p-4 shadow-xl border-none  dark:shadow-white/[0.05] flex flex-col justify-evenly"
            style={{
              transformOrigin: "center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, // decrease z-index for the cards that are behind
            }}
          >
            <p className="text-white font-semibold">{card.name}</p>
            <div className="font-normal text-white hidden sm:block">
              {card.content}
            </div>
            <div></div>
          </motion.div>
        );
      })}
      <div className="absolute top-1/2 transform -translate-y-1/2 z-10 left-[-1rem] lg:left-[-3rem]">
        <button
          className="text-white bg-black p-2 rounded-full shadow-md"
          onClick={handlePrev}
        >
          <FaArrowLeft />
        </button>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 z-10  right-[1rem] lg:right-[-3rem]">
        <button
          className="text-white bg-black p-2 rounded-full shadow-md"
          onClick={handleNext}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};
