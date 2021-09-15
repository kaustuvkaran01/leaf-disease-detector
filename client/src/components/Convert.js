import React, { useState } from "react";

export default function Convert({ imgData, setImgData }) {
  const [picture, setPicture] = useState(null);
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
      console.log(imgData);
      console.log("picture:  ", picture);
    }
  };
  return (
    <div>
      <input type="file" name="myImage" onChange={onChangePicture} />
      <button className="" onClick={submitClick}>
        Submit
      </button>
    </div>
  );
}
