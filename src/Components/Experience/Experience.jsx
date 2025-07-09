import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiAngular, SiNodedotjs } from "react-icons/si";

function Experience() {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>

      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          {/* Tech icons */}
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572b6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiAngular color="#FF4438" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiNodedotjs color="#F24E1E" size={50} />
          </span>
        </div>

        {/* Experience Cards */}
        <div className="flex flex-col gap-6 mt-6 md:w-2/5">
          {/* IBM */}
          <div className="flex gap-6 bg-slate-950 bg-opacity-45 rounded-lg p-4 items-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-700 text-white font-bold text-sm">
              IBM
            </div>
            <div className="text-white">
              <h2 className="leading-tight font-semibold">Frontend Engineer, IBM</h2>
              <p className="text-sm leading-tight font-thin">Feb 2021 – May 2022</p>
              <ul className="text-sm pl-4 list-disc mt-1">
                <li>Worked on design systems</li>
                <li>React.js + TypeScript development</li>
              </ul>
            </div>
          </div>

          {/* Morgan Stanley */}
          <div className="flex gap-6 bg-slate-950 bg-opacity-45 rounded-lg p-4 items-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-700 text-white font-bold text-xs text-center px-1">
              Morgan Stanley
            </div>
            <div className="text-white">
              <h2 className="leading-tight font-semibold">UI Developer, Morgan Stanley</h2>
              <p className="text-sm leading-tight font-thin">June 2022 – Feb 2023</p>
              <ul className="text-sm pl-4 list-disc mt-1">
                <li>Built dashboards for trading systems</li>
                <li>Optimized legacy code</li>
              </ul>
            </div>
          </div>

          {/* MasterCard */}
          <div className="flex gap-6 bg-slate-950 bg-opacity-45 rounded-lg p-4 items-center">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-red-600 text-white font-bold text-xs text-center px-2 whitespace-normal">
                Master<br />Card
            </div>
            <div className="text-white">
              <h2 className="leading-tight font-semibold">Software Engineer, MasterCard</h2>
              <p className="text-sm leading-tight font-thin">Oct 2024 – Apr 2025</p>
              <ul className="text-sm pl-4 list-disc mt-1">
                <li>Built connections between payment platforms and services</li>
                <li>Security and Compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
