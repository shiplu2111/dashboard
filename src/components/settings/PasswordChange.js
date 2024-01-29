import React from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
const PasswordChange = () => {
  return (
    <>
      <div className="flex flex-col items-start  justify-sitems-start pt-[35px] px-11 ">
        <div className="w-full px-[39px] border bg-[#313B5E] flex flex-col">
          <div className="flex items-center justify-start gap-[6.71px] pt-[31px]">
            <div>
              <img src="/lock_reset_black_24dp.svg" alt="" />
            </div>
            <div className="text-[18px] font-[700] text-[#FFF]">
              Change Password
            </div>
          </div>
          <div className="pt-[10px] pb-[21px]">
            <div className="flex flex-col">
              <label
                htmlFor="fname"
                className="text-[#FFF] text-[11px] font-[400]"
              >
                CURRENT PASSWORD
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full px-[10px] pl-[18px]  mt-[5.5px]  bg-[#343C57] h-[35px] border-[.5px] border-[#AAAAAA] rounded-md leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue text-[#FFF] text-[14px] font-[400]"
                  value="D@rEDeviL01"
                />
                <span className="absolute right-[15px] top-[22.5px] -translate-y-1/2 ">
                  <MdOutlineRemoveRedEye className="text-[#2196F3] h-6 w-6 cursor-pointer pr-2" />
                </span>
              </div>
            </div>
            <div className="flex flex-col pt-[13.5px]">
              <label
                htmlFor="fname"
                className="text-[#FFF] text-[11px] font-[400]"
              >
                NEW PASSWORD
              </label>
              <div className="relative">
                <input
                  type="password"
                  className="w-full px-[10px] pl-[18px]  mt-[5.5px]  bg-[#343C57] h-[35px] border-[.5px] border-[#AAAAAA] rounded-md leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue text-[#FFF] text-[14px] font-[700]"
                  value=".............."
                />
                <span className="absolute right-[15px] top-[22.5px] -translate-y-1/2 ">
                  <FaRegEyeSlash className="text-[#8B8B8B] h-6 w-6 cursor-pointer pr-2" />
                </span>
              </div>
            </div>

            <div className="flex flex-col pt-[13.5px]">
              <label
                htmlFor="fname"
                className="text-[#FFF] text-[11px] font-[400]"
              >
                REPEAT PASSWORD
              </label>
              <div className="relative">
                <input
                  type="password"
                  className="w-full px-[10px] pl-[18px]  mt-[5.5px]  bg-[#343C57] h-[35px] border-[.5px] border-[#AAAAAA] rounded-md leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue text-[#FFF] text-[14px] font-[700]"
                  value=".............."
                />
                <span className="absolute right-[15px] top-[22.5px] -translate-y-1/2 ">
                  <FaRegEyeSlash className="text-[#8B8B8B] h-6 w-6 cursor-pointer pr-2" />
                </span>
              </div>
            </div>
            <div className="flex flex-col pt-[28px]">
              <div className="flex flex-col md:flex-row items-center justify-end gap-[26px]">
                <button className="px-16 py-2 bg-[#313B5E] border border-[#E4E4E4] rounded-md text-[13px] font-[400] text-[#FFF]">
                  Discard
                </button>
                <button className="px-10 py-2 bg-[#2196F3] hover:bg-[#439FF3] focus:bg-[#3A7BB7] border border-[#707070] rounded-md text-[13px] font-[400] text-[#FFF]">
                  Apply Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordChange;
