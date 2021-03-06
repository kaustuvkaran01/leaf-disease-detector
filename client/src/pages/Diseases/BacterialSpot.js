import React from "react";
import IndividualDisease from "./IndividualDisease";

export default function BacterialSpot() {
  const post = {
    heading: "Bacterial Spot of Tomato",
    subheading1: "What is bacterial spot?",
    content1:
      " Bacterial spot can affect all above ground parts of a tomato plant , including the leaves, stems, and fruit. Bacterial spot appears on leaves as small (less than ⅛ inch), sometimes water-soaked (i.e., wet-looking) circular areas. Spots may initially be yellow-green, but darken to brownish-red as they age. When the disease is severe, extensive leaf yellowing and leaf loss can also occur. On green fruit, spots are typically small, raised and blister-like, and may have a yellowish halo. As fruit mature, the spots enlarge (reaching a maximum size of ¼ inch) and turn brown, scabby and rough. Mature spots may be raised, or sunken with raised edges. Bacterial spot symptoms can be easily confused with symptoms of another tomato disease called bacterial speck. For more information on this disease, see University of Wisconsin Garden Facts XHT1250.",
    subheading2: "What does bacterial spot look like?",
    content2:
      "Bacterial spot can affect all above ground parts of a tomato plant, including the leaves, stems, and fruit. Bacterial spot appears on leaves as small (less than ⅛ inch), sometimes water-soaked (i.e., wet-looking) circular areas. Spots may initially be yellow-green, but darken to brownish-red as they age. When the disease is severe, extensive leaf yellowing and leaf loss can also occur. On green fruit, spots are typically small, raised and blister-like, and may have a yellowish halo. As fruit mature, the spots enlarge (reaching a maximum size of ¼ inch) and turn brown, scabby and rough. Mature spots may be raised, or sunken with raised edges. Bacterial spot symptoms can be easily confused with symptoms of another tomato disease called bacterial speck. For more information on this disease, see University of Wisconsin Garden Facts XHT1250.",
    subheading3: "What does bacterial spot look like?",
    content3:
      "Bacterial spot can affect all above ground parts of a tomato plant, including the leaves, stems, and fruit. Bacterial spot appears on leaves as small (less than ⅛ inch), sometimes water-soaked (i.e., wet-looking) circular areas. Spots may initially be yellow-green, but darken to brownish-red as they age. When the disease is severe, extensive leaf yellowing and leaf loss can also occur. On green fruit, spots are typically small, raised and blister-like, and may have a yellowish halo. As fruit mature, the spots enlarge (reaching a maximum size of ¼ inch) and turn brown, scabby and rough. Mature spots may be raised, or sunken with raised edges. Bacterial spot symptoms can be easily confused with symptoms of another tomato disease called bacterial speck. For more information on this disease, see University of Wisconsin Garden Facts XHT1250.",
    subheading4: "How do I save plants with bacterial spot?",
    content4:
      "A plant with bacterial spot cannot be cured. Remove symptomatic plants from the field or greenhouse to prevent the spread of bacteria to healthy plants. Burn, bury or hot compost the affected plants and DO NOT eat symptomatic fruit. Although bacterial spot pathogens are not human pathogens, the fruit blemishes that they cause can provide entry points for human pathogens that could cause illness.",
    subheading5: "How can I prevent bacterial spot in the future?",
    content5:
      "Plant pathogen-free seed or transplants to prevent the introduction of bacterial spot pathogens on contaminated seed or seedlings. If a clean seed source is not available or you suspect that your seed is contaminated, soak seeds in water at 122°F for 25 min. to kill the pathogens. To keep leaves dry and to prevent the spread of the pathogens, avoid overhead watering (e.g., with a wand or sprinkler) of established plants and instead use a drip-tape or soaker-hose. Also to prevent spread, DO NOT handle plants when they are wet (e.g., from dew) and routinely sterilize tools with either 10% bleach solution or (better) 70% alcohol (e.g., rubbing alcohol). Where bacterial spot has been a recurring problem, consider using preventative applications of copper-based products registered for use on tomato, especially during warm, wet periods. Keep in mind however, that if used excessively or for prolonged periods, copper may no longer control the disease. Be sure to read and follow all label instructions of the product that you select to ensure that you use it in the safest and most effective manner possible. Burn, bury or hot compost tomato debris at the end of the season. Wait at least one year before planting tomatoes in a given location again, and remove and burn, bury or hot compost any volunteer tomatoes that come up in your garden.",
  };
  return <IndividualDisease post={post} />;
  // return (
  //   <div className="pt-10 bg-coolGray-800 text-coolGray-100 p-24 flex flex-col">
  //     <h2 className="font-bold text-4xl">Bacterial Spot of Tomato</h2>
  //     <br />
  //     <br />
  //     <br />
  //     <div className="flex flex-row justify-evenly items-center ">
  //       <img className="w-96 mt-15" src={hero} alt="disease" />
  //       <div className="w-1/2 flex flex-col gap-5">
  //         <p className="flex flex-col justify-center text-left gap-4">
  //           <strong className="w-full text-3xl">What is bacterial spot?</strong>{" "}
  //           Bacterial spot of tomato is a potentially devastating disease that,
  //           in severe cases, can lead to unmarketable fruit and even plant
  //           death. Bacterial spot can occur wherever tomatoes are grown, but is
  //           found most frequently in warm, wet climates, as well as in
  //           greenhouses. The disease is often an issue in Wisconsin.
  //         </p>
  //         <p className="flex flex-col justify-center text-left gap-4">
  //           <strong className="w-full text-3xl">
  //             What does bacterial spot look like?
  //           </strong>{" "}
  //           Bacterial spot can affect all above ground parts of a tomato plant,
  //           including the leaves, stems, and fruit. Bacterial spot appears on
  //           leaves as small (less than ⅛ inch), sometimes water-soaked (i.e.,
  //           wet-looking) circular areas. Spots may initially be yellow-green,
  //           but darken to brownish-red as they age. When the disease is severe,
  //           extensive leaf yellowing and leaf loss can also occur. On green
  //           fruit, spots are typically small, raised and blister-like, and may
  //           have a yellowish halo. As fruit mature, the spots enlarge (reaching
  //           a maximum size of ¼ inch) and turn brown, scabby and rough. Mature
  //           spots may be raised, or sunken with raised edges. Bacterial spot
  //           symptoms can be easily confused with symptoms of another tomato
  //           disease called bacterial speck. For more information on this
  //           disease, see University of Wisconsin Garden Facts XHT1250.
  //         </p>
  //       </div>
  //     </div>
  //     <div className="w-5/6 flex flex-col justify-center mt-10 self-center">
  //       <p className="flex flex-col justify-center text-left gap-4">
  //         <strong className="w-full text-3xl">
  //           How do I save plants with bacterial spot?
  //         </strong>{" "}
  //         A plant with bacterial spot cannot be cured. Remove symptomatic plants
  //         from the field or greenhouse to prevent the spread of bacteria to
  //         healthy plants. Burn, bury or hot compost the affected plants and DO
  //         NOT eat symptomatic fruit. Although bacterial spot pathogens are not
  //         human pathogens, the fruit blemishes that they cause can provide entry
  //         points for human pathogens that could cause illness.
  //       </p>
  //     </div>
  //     <div className="w-5/6 flex flex-col justify-center mt-10 self-center">
  //       <p className="flex flex-col justify-center text-left gap-4">
  //         <strong className="w-full text-3xl">
  //           How can I prevent bacterial spot in the future?
  //         </strong>{" "}
  //         Plant pathogen-free seed or transplants to prevent the introduction of
  //         bacterial spot pathogens on contaminated seed or seedlings. If a clean
  //         seed source is not available or you suspect that your seed is
  //         contaminated, soak seeds in water at 122°F for 25 min. to kill the
  //         pathogens. To keep leaves dry and to prevent the spread of the
  //         pathogens, avoid overhead watering (e.g., with a wand or sprinkler) of
  //         established plants and instead use a drip-tape or soaker-hose. Also to
  //         prevent spread, DO NOT handle plants when they are wet (e.g., from
  //         dew) and routinely sterilize tools with either 10% bleach solution or
  //         (better) 70% alcohol (e.g., rubbing alcohol). Where bacterial spot has
  //         been a recurring problem, consider using preventative applications of
  //         copper-based products registered for use on tomato, especially during
  //         warm, wet periods. Keep in mind however, that if used excessively or
  //         for prolonged periods, copper may no longer control the disease. Be
  //         sure to read and follow all label instructions of the product that you
  //         select to ensure that you use it in the safest and most effective
  //         manner possible. Burn, bury or hot compost tomato debris at the end of
  //         the season. Wait at least one year before planting tomatoes in a given
  //         location again, and remove and burn, bury or hot compost any volunteer
  //         tomatoes that come up in your garden.
  //       </p>
  //     </div>
  //   </div>
  // );
}
