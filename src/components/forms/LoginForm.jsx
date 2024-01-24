"use client";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useState } from "react";
const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <form className="pt-[60px] flex flex-col items-start justify-start w-full md:w-auto px-3">
        <div className="flex flex-col w-full">
          <label className=" pb-[11.5px] uppercase text-[#FFF] text-[14px] font-[400]">
            USERNAME
          </label>
          <input
            type="text"
            placeholder="Enter your username"
            className="w-full  md:w-[452px] h-14 bg-[#242A44] rounded-[10px] pl-4 text-[#bb9797] text-[14px] font-[400]"
          />
        </div>
        <div className="flex flex-col pt-8 w-full">
          <label className=" pb-[11.5px] uppercase text-[#FFF] text-[14px] font-[400]">
            PASSWORD
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full px-1 md:w-[452px] h-14 bg-[#242A44] rounded-[10px] pl-4 text-[#FFF] text-[14px] font-[400] "
            />
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 "
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FaRegEyeSlash className="text-[#FFF] h-8 w-9 cursor-pointer pr-2" />
              ) : (
                <MdOutlineRemoveRedEye className="text-[#FFF] h-8 w-9 cursor-pointer pr-2" />
              )}
            </span>
          </div>
        </div>
        <div className="pl-1 pt-[34px] flex items-center justify-start w-full">
          <input
            type="checkbox"
            className="w-4 h-4 rounded-[30px] border border-yellow-500 pl-4 text-[#FFF] text-[14px] font-[400]"
          />
          <label className=" pl-[11.5px]  text-[#FFF] text-[12px] font-[400]">
            Remember me
          </label>
        </div>
        <div className="pt-[28px]  items-center justify-center flex w-full ">
          <button
            type="button"
            className="w-full md:w-[452px] py-4 bg-[#0F7AE2] rounded-[10px] pl-4 text-[#FFF] text-[20px] font-[600] uppercase hover:bg-[#4998ec] hover:transform duration-500"
          >
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
