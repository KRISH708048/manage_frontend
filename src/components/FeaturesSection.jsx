import React from "react";

const FeaturesSection = () => {
  const Features = [
    {
      index: "01",
      heading: "Track company-wide progress",
      content: `See how your day-to-day tasks fit into the wider vision. Go from 
        tracking progress at the milestone level all the way done to the 
        smallest of details. Never lose sight of the bigger picture again.`,
    },
    {
      index: "02",
      heading: "Advanced built-in reports",
      content: `Set internal delivery estimates and track progress toward company 
        goals. Our customisable dashboard helps you build out the reports 
        you need to keep key stakeholders informed.`,
    },
    {
      index: "03",
      heading: "Everything you need in one place",
      content: `Stop jumping from one service to another to communicate, store files, 
        track tasks and share documents. Manage offers an all-in-one team 
        productivity solution.`,
    },
  ];
  return (
    <div className="relative container flex flex-col md:flex-row justify-center md:justify-between p-6 mt-10 mx-auto space-y-12 ms:space-y-0 ">
      <div className="flex flex-col space-y-10 md:w-1/2 pr-4">
        <h2 className="text-4xl text-center md:text-left font-bold text-darkBlue">
          What’s different about Manage?
        </h2>
        <p className="text-darkGrayishBlue ">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.{" "}
        </p>
      </div>

      <div className="flex flex-col space-y-3 md:w-1/2">
        {Features.map((e, ind) => (
          <div
            key={ind}
            className="flex flex-col space-y-3 md:space-y-0 md:space-x-4 md:flex-row"
          >
            <div className="flex space-x-4 items-center rounded-full bg-red-200 md:bg-transparent md:flex-col">
                <h2 className="text-lg w-fit bg-brightRed rounded-full px-4 py-2 md:py-1">
                  {e.index}
                </h2>
                <h3 className="text-lg font-bold md:mb-4 md:hidden">
                  {e.heading}
                </h3>
            </div>
            <div className="mt-1">
              <h3 className="text-lg font-bold md:mb-4 hidden md:block ">
                {e.heading}
              </h3>
              <p className="text-darkGrayishBlue">{e.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
