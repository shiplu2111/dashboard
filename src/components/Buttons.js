import React from "react";

const Buttons = () => {
  return (
    <>
      <div className="flex flex-col items-center  justify-center pt-[20px] ">
        <h3 className="text-[18px] font-[700] text-[#FFF]">Buttons</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 items-center justify-center pt-5">
          <button className="inline-block rounded border border-[#0883CF] bg-[#0883CF] px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-[#0883CF] focus:outline-none focus:ring active:text-indigo-500">
            Download
          </button>
          <button className="inline-block rounded border border-[#0883CF] px-12 py-3 text-sm font-medium text-[#0883CF] hover:bg-[#0883CF] hover:text-white focus:outline-none focus:ring active:bg-indigo-500">
            Download
          </button>
          <button className="group inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75">
            <span className="block rounded-sm bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
              Download
            </span>
          </button>
          <button className="group inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75">
            <span className="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
              Download
            </span>
          </button>

          <button className="inline-block rounded bg-[#0883CF] px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500">
            Download
          </button>
          <button className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-[#0883CF] transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500">
            Download
          </button>
          <button className="inline-block rounded bg-[#0883CF] px-8 py-3 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500">
            Download
          </button>
          <button className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-[#0883CF] transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:text-indigo-500">
            Download
          </button>
          <button className="inline-block rounded bg-[#0883CF] px-8 py-3 text-sm font-medium text-white transition hover:-rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500">
            Download
          </button>
          <button className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-[#0883CF] transition hover:-rotate-2 hover:scale-110 focus:outline-none focus:ring active:text-indigo-500">
            Download
          </button>
          
        </div>
      </div>
    </>
  );
};

export default Buttons;
