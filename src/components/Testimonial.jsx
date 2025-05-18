import React from "react";
import anisha from "../assets/images/avatar-anisha.png";
import richard from "../assets/images/avatar-richard.png"
import ali  from "../assets/images/avatar-ali.png"
const Testimonial = () => {
  const testimonial = [
    {
      name: "Anisha Li",
      content: `“Manage has supercharged our team’s workflow. The ability to maintain 
  visibility on larger milestones at all times keeps everyone motivated.”`,
      image: anisha,
    },
    {
      name: "Ali Bravo",
      content: `“We have been able to cancel so many other subscriptions since using 
  Manage. There is no more cross-channel confusion and everyone is much 
  more focused.”`,
  image: ali,
    },
    {
      name: "Richard Watts",
      content: `“Manage allows us to provide structure and process. It keeps us organized 
  and focused.It keeps the whole team in-sync without being intrusive.”`,
  image: richard,
    },
//     {
//       name: "Shanai Gough",
//       content: `“Their software allows us to track, manage and collaborate on our projects 
//   from anywhere. It keeps the whole team in-sync without being intrusive.”`,
//   image: anisha,
//     },
  ];
  return (
    <div className="flex flex-col space-y-4 mt-24 max-w-6xl px-5 text-center">
      <h2 className="text-5xl  text-darkBlue font-bold">What they’ve said</h2>
      <div className=" flex flex-col md:flex-row mt-16 space-y-14 md:space-x-6">
        {testimonial.map((e, ind)=>(
            <div key={ind} className="h-fit rounded-lg bg-veryLightGray flex flex-col space-y-3 items-center md:w-1/3 p-4">
                <img src={e.image}  class="w-20 -mt-12"/>
                <h5 className="font-semibold">{e.name}</h5>
                <p className="text-sm text-darkGrayishBlue line-clamp-3 ">{e.content}</p>
            </div>
        ))}
      </div>

      <button className=" text-md rounded-full p-3 self-baseline px-6 py-2 text-white bg-brightRed hover:bg-red-400 mx-auto">
          Get Started
        </button>
    </div>
  );
};

export default Testimonial;
