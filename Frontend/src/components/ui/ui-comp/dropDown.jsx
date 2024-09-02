import React from "react";
import { Link } from "react-router-dom";
const DropdownButton = () => {
  return (
    <div className="relative inline-block text-left">
      <div className="group inline-block">
        <button className="inline-flex justify-center w-full focus:outline-none py-2  text-sm font-medium text-white bg-black border border-none rounded-md">
          <span>Contact</span>
          <svg
            className="w-5 h-5 ml-2 -mr-1 text-white transform transition-transform duration-200 group-hover:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="absolute left-0 hidden pt-2 group-hover:block">
          <div className="py-1 w-[7rem] bg-black rounded-md shadow-lg opacity-0 transform scale-95 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100">
            {/* <Link
              to="/contact"
              className="block px-4 py-2 text-sm text-white hover:bg-neutral-900"
            >
              Contact Us
            </Link>
            <Link
              to="/careers"
              className="block px-4 py-2 text-sm text-white hover:bg-neutral-900"
            >
              Careers
            </Link>
            <Link
              to="/join"
              className="block px-4 py-2 text-sm text-white hover:bg-neutral-900"
            >
              Join Us
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownButton;
