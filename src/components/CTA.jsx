import React from "react";

const CTA = () => {
  return (
    <div className="cta-container bg-brightRed mt-32 w-screen">
      <div class="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
        <h2 class="text-5xl font-bold text-center text-white md:text-4xl md:max-w-xl md:text-left">
          Simplify how your team works today
        </h2>
        <div>
          <a
            href="#"
            class="p-3 px-6 pt-2 text-brightRed bg-white rounded-full shadow-2xl baseline hover:bg-gray-900"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTA;
