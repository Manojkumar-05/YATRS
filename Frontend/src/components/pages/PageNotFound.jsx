import React from "react";
import notFoundImage from "../assets/PageNogFound.svg";
import { Link } from "react-router-dom";

export function PageNotFound() {
  return (
    <div className="container mx-auto py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {/* Mobile Image */}
        <img
          src={notFoundImage}
          alt="Not Found"
          className="sm:hidden w-full h-auto"
        />

        {/* Text and Button */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Something is not right...
          </h1>
          <p className="text-lg ">
            The page you are trying to open does not exist. You may have
            mistyped the address, or the page has been moved to another URL. If
            you think this is an error, contact support.
          </p>
          <Link to="/" className="mt-6 sm:mt-8">
            <button className="w-full sm:w-auto bg-transparent border border-white py-2 px-4 rounded hover:bg-black hover:border-black transition-all">
              Get back to home page
            </button>
          </Link>
        </div>
        <img
          src={notFoundImage}
          alt="Not Found"
          className="hidden sm:block w-full h-auto"
        />
      </div>
    </div>
  );
}

export default PageNotFound;
