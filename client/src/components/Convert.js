import React, { useState } from "react";
import axios from "axios";
export default function Convert({ imgData, setImgData }) {
  const [picture, setPicture] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const submitClick = () => {};
  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      console.log("picture: ", e.target.files);
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      console.log(reader.readAsDataURL(e.target.files[0]));
      console.log("img : ", imgData);
      console.log("picture:  ", picture);

      //post request for sending images
      axios
        .post("http://localhost:5000/prediction", picture)
        .then((res) => {
          setPrediction(res);
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="text-amber-500 pt-4">
      <input type="file" name="myImage" onChange={onChangePicture} />
      <button
        className="rounded-xl border-2 p-2 px-4 border-amber-500"
        onClick={submitClick}
      >
        Submit
      </button>
    </div>
  );
}
