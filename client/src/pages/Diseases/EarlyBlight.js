import React from "react";
// import hero from "../../images/hero.png";
import IndividualDisease from "../Diseases/IndividualDisease";
export default function Blight() {
  const post = {
    heading: "Early Blight",
    subheading1: "What is early blight?",
    content1:
      "Early blight is one of two common fungal diseases that can devastate tomatoes in both commercial settings and home gardens.  Early blight can also be a serious disease on other popular vegetables including eggplants, peppers, and potatoes.  The second common tomato blight, Septoria leaf spot, is detailed in University of Wisconsin Garden Facts XHT1073.",
    subheading2: "What does early blight look like?",
    content2:
      "Symptoms of early blight first appear at the base of affected plants, where roughly circular brown spots appear on leaves and stems.  As these spots enlarge, concentric rings appear giving the areas a target-like appearance.  Often spots have a yellow halo.  Eventually multiple spots on a single leaf will merge, leading to extensive destruction of leaf tissue.  Early blight can lead to total defoliation of lower leaves and even the death of an infected plant.",
    subheading3: "Where does early blight come from? ",
    content3:
      "Early blight is caused by the fungus Alternaria solani, which survives in plant debris or on infected plants.  Early blight symptoms typically begin as plant canopies start to close.  Denser foliage leads to high humidity and longer periods of leaf wetness that favor the disease.",
    subheading4: "How do I save a plant with early blight? ",
    content4:
      "Once symptoms of early blight appear, control is difficult.  Thinning of whole plants or removal of selected branches from individual plants may slow the disease by increasing airflow and thus reducing humidity and the length of time that leaves remain wet.  Fungicides labeled for use on vegetables and containing copper or chlorothalonil may also provide control of early blight if they are carefully applied very early in the course of the disease (before symptoms develop is best) and on a regular basis throughout the rest of the growing season.  If you decide to use fungicides for disease control, be sure to read and follow all label instructions of the fungicide that you select to ensure that you use the product in the safest and most effective manner possible.",
    subheading5: "How do I avoid problems with early blight in the future?",
    content5:
      "Early blight is best controlled using preventative measures.  Destroy infested plants by burning or burying them.  Rotate vegetables to different parts of your garden each year to avoid areas where infested debris (and thus spores of Alternaria solani) may be present.  Use early blight-resistant vegetable varieties whenever possible.  Increase spacing between plants to increase airflow and decrease humidity and foliage drying time.  Mulch your garden with approximately one inch of a high quality mulch, but DO NOT overmulch as this can lead to wet soils that can contribute to increased humidity.  Finally, where the disease has been a chronic problem, use of preventative applications of a copper or chlorothalonil-containing fungicide labeled for use on vegetables may be warranted.",
  };
  return <IndividualDisease post={post} />;
}
