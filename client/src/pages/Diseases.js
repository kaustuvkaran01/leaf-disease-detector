import React from "react";
import Disease from "../components/Disease";
// import DiseaseGraph from "../components/DiseaseGraph";
export default function Diseases() {
  const dis = [
    {
      name: "Bacterial Spot",
      desc: "Bacterial spot of tomato is a potentially devastating disease that, in severe cases, can lead to unmarketable fruit and even plant death.  Bacterial spot can occur wherever tomatoes are grown, but is found most frequently in warm, wet climates, as well as in greenhouses.  The disease is often an issue in Wisconsin.",
      link: "/disease/bactspot",
    },
    {
      name: "Early Spot / Early Blight",
      desc: "Early blight is one of two common fungal diseases that can devastate tomatoes in both commercial settings and home gardens.  Early blight can also be a serious disease on other popular vegetables including eggplants, peppers, and potatoes.  The second common tomato blight, Septoria leaf spot, is detailed in University of Wisconsin Garden Facts XHT1073.",
      link: "/disease/earlyblight",
    },
    {
      name: "Late Blight",
      desc: " Late blight is a destructive disease of tomatoes and potatoes that can kill mature plants, and make tomato fruits and potato tubers inedible.  This disease also affects, although typically to a lesser extent, eggplants and peppers, as well as related weeds such as nightshade.  Historically, late blight was responsible for the Irish potato famine, which led to the death of at least one million Irish, and the emigration of another one million Irish to Great Britain, the United States, Australia, Canada and other countries. ",
      link: "/disease/lateblight",
    },
    {
      name: "Leaf Mold",
      desc: "Something random as placeholder,Something random as placeholder,Something random as placeholder,Something random as placeholder",
      link: "/disease/leafmold",
    },
    {
      name: "Septoria Leaf Spot",
      desc: "Septoria leaf spot is one of two common fungal diseases that can devastate tomatoes in both commercial settings and home gardens.  The second common tomato blight, early blight, is detailed in University of Wisconsin Garden Facts XHT1074.",
      link: "/disease/septorials",
    },
    {
      name: "Two Spotted Spider Mite",
      desc: "Twospotted spider mites are barely visible with the naked eye – usually only 1/50 inch (0.5 mm) long when mature – as tiny spots on leaves and stems. They range in color from light yellow or green to dark green or brown and at times can be bright red. All have two dark spots visible on the abdomen. Males are smaller and more active than females and have a narrower body with a more pointed abdomen and larger legs.",
      link: "/disease/tsspidermite",
    },
    {
      name: "Target Spot",
      desc: "Something random as placeholder,Something random as placeholder,Something random as placeholder,Something random as placeholder",
      link: "/disease/targetspot",
    },
    {
      name: "Yellow Leaf Curl Virus",
      desc: "Tomato yellow leaf curl virus is a species in the genus Begomovirus and family Geminiviridae. Tomato yellow leaf curl virus (TYLCV) infection induces severe symptoms on tomato plants and causes serious yield losses worldwide.",
      link: "/disease/tylcv",
    },
    {
      name: "Mosaic Virus",
      desc: "ToMV infects tomato most commonly, but the virus can also infect pepper, potato, apple, pear, cherry and numerous weeds, including pigweed and lamb's quarters.",
      link: "/disease/mv",
    },
  ];
  return (
    <div className="flex flex-col">
      {/* <DiseaseGraph /> */}
      <div className="flex flex-wrap justify-evenly bg-coolGray-800">
        {dis.map((d) => {
          return <Disease name={d.name} desc={d.desc} link={d.link} />;
        })}
      </div>
    </div>
  );
}
