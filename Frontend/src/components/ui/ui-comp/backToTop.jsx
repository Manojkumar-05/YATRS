import { ArrowUpIcon } from "lucide-react";
import React, { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    showButton && (
      <button
        className="fixed bottom-4 right-4 w-10 h-10 bg-black rounded-full flex justify-center items-center cursor-pointer"
        onClick={handleClick}
      >
      <ArrowUpIcon/>
      </button>
    )
  );
};

export default BackToTopButton;
