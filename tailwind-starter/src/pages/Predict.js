import React, { useState } from "react";

// import { Link } from "react-router-dom";

export default function Predict() {
  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(null);
  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      console.log("picture: ", e.target.files);
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
      console.log(imgData);
    }
  };
  return (
    <div>
      <section className="bg-coolGray-800 text-coolGray-100 h-screen">
        <div className="container flex flex-col items-center mx-auto space-y-6 md:p-8">
          <p className=" py-2 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-4xl lg:max-w-2xl xl:max-w-4xl text-coolGray-300">
            Identify the disease that your plant is suffering from
            <br />
            Start by uploading an image of the affected leaf
          </p>
          <div className="h-96">
            {imgData === null ? (
              <img src="https://dummyimage.com/400x400" alt="400x400" />
            ) : (
              <img className="h-full" src={imgData} alt="400x500" />
            )}
          </div>
          <input type="file" name="myImage" onChange={onChangePicture} />
        </div>
      </section>
    </div>
  );
}
