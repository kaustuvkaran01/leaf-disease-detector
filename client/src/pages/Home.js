import React from "react";
import { Link } from "react-router-dom";
import hero from "../images/hero.png";

function Home() {
  return (
    <div>
      <section className="bg-coolGray-800 text-coolGray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-evenly h-screen items-center">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={hero}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 bg-coolGray-500 rounded-2xl"
            />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              Your Own
              <br />
              <span className="text-amber-500">Leaf-Disease Detector</span>
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Upload a photo and get to know the disease affecting your crop
              yield
              <br className="hidden md:inline lg:hidden" />
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link
                to="/predict"
                className="px-8 py-3 text-lg font-semibold rounded bg-amber-500 text-coolGray-900"
              >
                Predict
              </Link>
              <Link
                to="/diseases"
                className="px-8 py-3 text-lg font-semibold border rounded border-amber-500"
              >
                Diseases
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
