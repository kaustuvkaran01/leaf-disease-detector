import React from "react";

import hero from "../../images/hero.png";

export default function IndividualDisease({
  post: {
    heading,
    subheading1,
    content1,
    subheading2,
    content2,
    subheading3,
    content3,
    subheading4,
    content4,
    subheading5,
    content5,
  },
}) {
  return (
    <div className="pt-10 bg-coolGray-800 text-amber-500 p-24 flex flex-col">
      <h2 className="font-bold text-4xl">{heading}</h2>
      <br />
      <br />
      <br />
      <div className="flex flex-col lg:flex-row sm:flex-col justify-evenly items-center">
        <img className="w-96 mt-15" src={hero} alt="disease" />
        <div className="lg:w-1/2 sm:w-full flex flex-col gap-5">
          <p className="flex flex-col justify-center text-left gap-4">
            <strong className="w-full text-3xl">{subheading1}</strong>{" "}
            {content1}
          </p>
          <p className="flex flex-col justify-center text-left gap-4">
            <strong className="w-full text-3xl">{subheading2}</strong>{" "}
            {content2}
          </p>
        </div>
      </div>
      <div className="lg:w-5/6 sm:w-full flex flex-col justify-center mt-10 self-center">
        <p className="flex flex-col justify-center text-left gap-4">
          <strong className="w-full text-3xl">{subheading3}</strong> {content3}
        </p>
      </div>
      <div className="lg:w-5/6 sm:w-full flex flex-col justify-center mt-10 self-center">
        <p className="flex flex-col justify-center text-left gap-4">
          <strong className="w-full text-3xl">{subheading4}</strong> {content4}
        </p>
      </div>
      <div className="lg:w-5/6 sm:w-full flex flex-col justify-center mt-10 self-center">
        <p className="flex flex-col justify-center text-left gap-4">
          <strong className="w-full text-3xl">{subheading5}</strong> {content5}
        </p>
      </div>
    </div>
  );
}
