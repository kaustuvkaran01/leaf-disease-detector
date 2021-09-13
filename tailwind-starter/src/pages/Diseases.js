import React from "react";
import Disease from "../components/Disease";

export default function Diseases() {
  const dis = [
    {
      name: "First",
      desc: "Something for first",
    },
    {
      name: "First",
      desc: "Something for first",
    },
    {
      name: "First",
      desc: "Something for first",
    },
    {
      name: "First",
      desc: "Something for first",
    },
    {
      name: "First",
      desc: "Something for first",
    },
  ];
  return (
    <div className="flex">
      {dis.map((d) => {
        return (
          <div>
            <Disease name={d.name} desc={d.desc} />
          </div>
        );
      })}
    </div>
  );
}
