import React from "react";
import { IoClose } from "react-icons/io5";
const Authenticate = ({ visible, onClose }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "modal-bg") onClose();
  };
  if (!visible) return null;
  return (
    <>
      <div
        id="modal-bg"
        className="fixed inset-0 bg-[url('/Session1.png')] bg-cover bg-no-repeat] bg-opacity-50 backdrop:blur-sm flex items-center justify-center"
        onClick={handleOnClose}
      >
        <div className="flex flex-col items-center justify-center rounded-lg bg-[#1A244B] mx-4 md:mx-0  px-[56.5px] relative pb-10 md:pb-[61px]">
          <div className="absolute top-[21.3px] right-[22px]">
            <IoClose
              className="size-[23px] text-[#7D6C6C] cursor-pointer"
              onClick={onClose}
            />
          </div>
          <div className="flex items-center justify-center pt-[57px] text-[18px] md:text-[22px] font-[700] text-[#BFA1F9]">
            Authenticate Master Session
          </div>
          <div className="pt-4 md:pt-[42.44px] flex items-center justify-center w-full">
            <button className="text-[#FFFFFF] text-[10px] font-[400] py-[9.5px] px-[20px] bg-[#2B5362] w-full rounded-md">
              Generate OTP Code
            </button>
          </div>
          <div className="pt-4 md:pt-[30.56px] flex flex-col md:flex-row items-center justify-center  gap-[14px]">
            <div className="flex  items-center justify-center">
              <input
                class="m-2 border h-[34px] w-[26px] text-center form-control rounded bg-transparent text-[15px] font-[700] text-[#FFFFFF] border-[#B5B5B5] focus:outline-none"
                value="7"
                type="text"
                id="first"
                maxlength="1"
              />
              <input
                class="m-2 border h-[34px] w-[26px] text-center form-control rounded bg-transparent text-[15px] font-[700] text-[#FFFFFF] border-[#B5B5B5] focus:outline-none"
                value="4"
                type="text"
                id="second"
                maxlength="1"
              />
              <input
                class="m-2 border h-[34px] w-[26px] text-center form-control rounded bg-transparent text-[15px] font-[700] text-[#FFFFFF] border-[#B5B5B5] focus:outline-none"
                value="6"
                type="text"
                id="third"
                maxlength="1"
              />
              <input
                class="m-2 border h-[34px] w-[26px] text-center form-control rounded bg-transparent text-[15px] font-[700] text-[#FFFFFF] border-[#B5B5B5] focus:outline-none"
                value="5"
                type="text"
                id="fourth"
                maxlength="1"
              />
              <input
                class="m-2 border h-[34px] w-[26px] text-center form-control rounded bg-transparent text-[15px] font-[700] text-[#FFFFFF] border-[#B5B5B5] focus:outline-none"
                value="8"
                type="text"
                id="fifth"
                maxlength="1"
              />
              <input
                class="m-2 border h-[34px] w-[26px] text-center form-control rounded bg-transparent text-[15px] font-[700] text-[#FFFFFF] border-[#B5B5B5] focus:outline-none"
                value="2"
                type="text"
                id="sixth"
                maxlength="1"
              />
            </div>
            <div>
              <button className="text-[#FFFFFF] text-[10px] font-[400] py-[10px] px-[25.5px] bg-[#13AE79]  rounded-md">
                Verify Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Authenticate;
