import React from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
const ApiCode = () => {
  return (
    <>
      <div className="flex flex-col items-start  justify-sitems-start pt-[35px] ">
        <div className="w-full px-[39px] border bg-[#313B5E] flex flex-col">
          <div className="flex items-center justify-center md:justify-start gap-[6.71px] pt-[31px]">
            <div>
              <img src="/code_black_24dp.svg" className="h-9 w-9" alt="" />
            </div>
            <div className="text-[18px] font-[700] text-[#FFF]">API Code</div>
          </div>
          <div className="w-full pt-[23px] pb-[53px] ">
            <div className="relative">
              <input
                type="text"
                className="w-full px-[10px] pl-[18px] py-[14px]   bg-[#343C57] h-[43px] border-[.5px] border-[#AAAAAA] rounded-md leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue text-[#FFF] text-[14px] font-[400]"
                value='# hello.py print/("Hello, World!".asd)'
              />
              <div className="pt-5 md:pt-0 md:absolute md:right-[4.5px] md:top-1/2 md:-translate-y-1/2">
                <div className="flex items-center justify-center gap-[44px]">
                  <span className="cursor-pointer">
                    <img src="/Untitled-1.png" alt="" />
                  </span>
                  <span>
                    <button className="text-[#FFF] text-[13px] font-[400] bg-[#2196F3] border border-[#2196F3] hover:bg-[#439FF3] focus:bg-[#3A7BB7] px-[24px] py-[7px] rounded">
                      Generate New Code
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApiCode;
