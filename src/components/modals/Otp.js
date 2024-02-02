import React from "react";
import { IoClose } from "react-icons/io5";

const Otp = ({ visible, onClose }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "modal-bg") onClose();
  };
  if (!visible) return null;
  return (
    <>
      <div
        id="modal-bg"
        className="fixed inset-0 bg-[url('/Session1.png')] bg-cover bg-no-repeat bg-opacity-50 backdrop:blur-sm flex items-center justify-center"
        onClick={handleOnClose}
      >
        <div className="flex flex-col items-center justify-center mx-2 md:mx-0 rounded-lg bg-[#1A244B] px-[60px] md:px-[74px] py-[55px] relative">
          <div className="absolute top-[20px] right-[22px]">
            <IoClose
              className="size-[23.7px] text-[#7D6C6C] cursor-pointer"
              onClick={onClose}
            />
          </div>
          <div className="flex items-center justify-center  text-[22px] font-[700] text-[#BFA1F9]">
            OTP Generator
          </div>
          <div className="flex items-center justify-center pt-[38px] ">
            <button className="text-[#FFFFFF] text-[12px] border border-[#FFFFFF] font-[400] py-[23.5px] px-[82.5px] bg-[#2A3665]  rounded-md  shadow-2xl shadow-gray-900">
              Choose Wallet
            </button>
          </div>
          <div className="pt-[32.35px] flex items-center justify-center w-full">
            <button className="text-[#FFFFFF] text-[11px]  font-[400] py-[10px] w-full bg-[#0E946F]  rounded-md  shadow-2xl shadow-gray-900">
              ACTIVATE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otp;
