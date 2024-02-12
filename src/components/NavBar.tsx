"use client";

import { useState } from "react";

const buttons = [
  "Home",
  "About Us",
  "Services",
  "Clients",
  "Team",
  "Contact Us",
];

export default function NavBar() {
  const [activeButton, setActiveButton] = useState<string>("Home");

  return (
    <div className="flex justify-between h-24 items-center px-20 fixed top-0 w-full bg-white">
      <div className="bg-black h-12 w-12 hidden lg:block"></div>
      <div className="lg:hidden flex flex-col gap-2">
         <div className="bg-black w-8 h-0.5"></div>
         <div className="bg-black w-8 h-0.5"></div>
         <div className="bg-black w-8 h-0.5"></div>
      </div>
      <div className="hidden lg:block">
      <div className="rounded-l-full rounded-r-full flex gap-7 bg-gradient-to-r from-blue-50 to-red-50 p-2 py-2.5 shadow-md">
        {buttons.map((btn) => (
          <button
            key={btn}
            className={`font-semibold px-4 py-2  ${
              activeButton === btn
                ? "bg-white rounded-r-full rounded-l-full shadow-md transition duration-300"
                : ""
            }`}
            onClick={() => setActiveButton(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
      </div>
    </div>
  );
}
