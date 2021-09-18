import React from "react";

import IndividualDisease from "./IndividualDisease";

export default function Septoria() {
  const post = {
    heading: "Bacterial Spot of Tomato",
    subheading1: "What is Septoria leaf spot?",
    content1:
      "Septoria leaf spot is one of two common fungal diseases that can devastate tomatoes in both commercial settings and home gardens.  The second common tomato blight, early blight, is detailed in University of Wisconsin Garden Facts XHT1074.",
    subheading2: "What does Septoria leaf spot look like?",
    content2:
      "Symptoms of Septoria leaf spot first appear at the base of affected plants, where small (approximately ¼ inch diameter) spots appear on leaves and stems.  These spots typically have a whitish center and a dark border.  Eventually multiple spots on a single leaf will merge, leading to extensive destruction of leaf tissue.  Septoria leaf spot can lead to total defoliation of lower leaves and even the death of an infected plant.",
    subheading3: "Where does Septoria leaf spot come from?",
    content3:
      "Septoria leaf spot is caused by the fungus Septoria lycopersici, which survives in plant debris or on infected plants.  Septoria leaf spot symptoms typically begin as plant canopies start to close.  Denser foliage leads to high humidity and longer periods of leaf wetness that favor the disease.",
    subheading4: "How do I save a plant with Septoria leaf spot?",
    content4:
      "Once symptoms of Septoria leaf spot appear, control is difficult.  Thinning of whole plants or removal of selected branches from individual plants may slow the disease by increasing airflow and thus reducing humidity and the length of time that leaves remain wet.  Fungicides labeled for use on vegetables and containing copper or chlorothalonil may also provide control of Septoria leaf spot if they are carefully applied very early in the course of the disease (before symptoms develop is best) and on a regular basis throughout the rest of the growing season.  If you decide to use fungicides for disease control, be sure to read and follow all label instructions of the fungicide that you select to ensure that you use the product in the safest and most effective manner possible.",
    subheading5:
      "How do I avoid problems with Septoria leaf spot in the future?",
    content5:
      "Septoria leaf spot is best controlled using preventative measures.  Destroy infested plants by burning or burying them.  Rotate vegetables to different parts of your garden each year to avoid areas where infested debris (and thus spores of Septoria lycopersici) may be present.  Use Septoria leaf spot-resistant tomato varieties whenever possible.  Increase spacing between plants to increase airflow and decrease humidity and foliage drying time.  Mulch your garden with approximately one inch of a high quality mulch, but DO NOT overmulch as this can lead to wet soils that can contribute to increased humidity.  Finally, where the disease has been a chronic problem, use of preventative applications of a copper or chlorothalonil-containing fungicide labeled for use on vegetables may be warranted.",
  };
  return <IndividualDisease post={post} />;
}
