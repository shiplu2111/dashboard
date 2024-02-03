import React from "react";
import { IoClose } from "react-icons/io5";
import { FaAddressCard } from "react-icons/fa";

const ChooseCard = ({ visible, onClose }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "modal-bg") onClose();
  };
  if (!visible) return null;
  return (
    <>
      <div
        id="modal-bg"
        className="fixed inset-0 bg-[#020308]  z-[1000] bg-cover bg-no-repeat bg-opacity-90 backdrop:blur-md flex items-center justify-center "
        onClick={handleOnClose}
      >
        <div className="flex flex-col items-center justify-center mx-2 md:mx-0 rounded-lg bg-[#1A244B] px-2 md:px-[74px] py-8 md:py-[55px] relative">
          <div className="absolute top-[20px] right-[22px]">
            <IoClose
              className="size-[23.7px] text-[#7D6C6C] cursor-pointer"
              onClick={onClose}
            />
          </div>
          <div className="flex items-center justify-center  text-[22px] font-[700] text-[#BFA1F9] pb-3">
            Choose Card
          </div>
          <div className="flex flex-col items-center  justify-start  gap-2 max-h-[280px] overflow-y-scroll my-scroll pr-3 scroll-mr-0">
            <div className="flex items-center justify-start gap-2 bg-[#2A429E] px-5 py-1 rounded-md w-full  cursor-pointer">
              <div className="w-[40px] h-[40px] rounded-full overflow-hidden border-2 border-[#B5B5B5] bg-[#1A244B] flex items-center justify-center">
                <FaAddressCard className=" object-fill text-[#e4e5ec]" />
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="text-[#FFFFFF] text-[14px] font-[600] text-left">
                  Credit Card
                </div>
                <div className="flex items-start justify-start gap-6">
                  <div className="flex flex-col items-start justify-center">
                    <div className="text-[#237CCD] text-[10px]  text-left">
                      Card Number:
                    </div>
                    <div className="text-[#FFFFFF] text-[10px] font-[500]">
                      12375698466565
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <div className="text-[#237CCD] text-[10px]  text-left">
                      Expiry Date:
                    </div>
                    <div className="text-[#FFFFFF] text-[10px] font-[500]">
                      08-2024
                    </div>
                  </div>

                  <div className="flex flex-col items-start justify-center">
                    <div className="text-[#237CCD] text-[10px]  text-left">
                      CVV Number:
                    </div>
                    <div className="text-[#FFFFFF] text-[10px] font-[500]">
                      288
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start gap-2 bg-[#2A3665] px-5 py-1 rounded-md w-full  cursor-pointer">
              <div className="w-[40px] h-[40px] rounded-full overflow-hidden border-2 border-[#B5B5B5] bg-[#1A244B] flex items-center justify-center">
                <FaAddressCard className=" object-fill text-[#e4e5ec]" />
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="text-[#FFFFFF] text-[14px] font-[600] text-left">
                  Debit Card
                </div>
                <div className="flex items-start justify-start gap-6">
                  <div className="flex flex-col items-start justify-center">
                    <div className="text-[#237CCD] text-[10px]  text-left">
                      Card Number:
                    </div>
                    <div className="text-[#FFFFFF] text-[10px] font-[500]">
                      12375698466565
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <div className="text-[#237CCD] text-[10px]  text-left">
                      ATM Pin:
                    </div>
                    <div className="text-[#FFFFFF] text-[10px] font-[500]">
                      082024
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start gap-2 bg-[#2A3665] px-5 py-1 rounded-md w-full  cursor-pointer">
              <div className="w-[40px] h-[40px] rounded-full overflow-hidden border-2 border-[#B5B5B5] bg-[#1A244B] flex items-center justify-center">
                <FaAddressCard className=" object-fill text-[#e4e5ec]" />
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="text-[#FFFFFF] text-[14px] font-[600] text-left">
                  Debit Card
                </div>
                <div className="flex items-start justify-start gap-6">
                  <div className="flex flex-col items-start justify-center">
                    <div className="text-[#237CCD] text-[10px]  text-left">
                      Card Number:
                    </div>
                    <div className="text-[#FFFFFF] text-[10px] font-[500]">
                      12375698466565
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <div className="text-[#237CCD] text-[10px]  text-left">
                      ATM Pin:
                    </div>
                    <div className="text-[#FFFFFF] text-[10px] font-[500]">
                      123456
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start gap-2 bg-[#2A3665] px-5 py-1 rounded-md w-full  cursor-pointer">
              <div className="w-[40px] h-[40px] rounded-full overflow-hidden border-2 border-[#B5B5B5] bg-[#1A244B] flex items-center justify-center">
                <FaAddressCard className=" object-fill text-[#e4e5ec]" />
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="text-[#FFFFFF] text-[14px] font-[600] text-left">
                  Credit Card
                </div>
                <div className="flex items-start justify-start gap-6">
                  <div className="flex flex-col items-start justify-center">
                    <div className="text-[#237CCD] text-[10px]  text-left">
                      Card Number:
                    </div>
                    <div className="text-[#FFFFFF] text-[10px] font-[500]">
                      12375698466565
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <div className="text-[#237CCD] text-[10px]  text-left">
                      Expiry Date:
                    </div>
                    <div className="text-[#FFFFFF] text-[10px] font-[500]">
                      08-2024
                    </div>
                  </div>

                  <div className="flex flex-col items-start justify-center">
                    <div className="text-[#237CCD] text-[10px]  text-left">
                      CVV Number:
                    </div>
                    <div className="text-[#FFFFFF] text-[10px] font-[500]">
                      288
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start gap-2 bg-[#2A3665] px-5 py-1 rounded-md w-full  cursor-pointer">
              <div className="w-[40px] h-[40px] rounded-full overflow-hidden border-2 border-[#B5B5B5] bg-[#1A244B] flex items-center justify-center">
                <FaAddressCard className=" object-fill text-[#e4e5ec]" />
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="text-[#FFFFFF] text-[14px] font-[600] text-left">
                  Debit Card
                </div>
                <div className="flex items-start justify-start gap-6">
                  <div className="flex flex-col items-start justify-center">
                    <div className="text-[#237CCD] text-[10px]  text-left">
                      Card Number:
                    </div>
                    <div className="text-[#FFFFFF] text-[10px] font-[500]">
                      12375698466565
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <div className="text-[#237CCD] text-[10px]  text-left">
                      ATM Pin:
                    </div>
                    <div className="text-[#FFFFFF] text-[10px] font-[500]">
                      123456
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start gap-2 bg-[#2A3665] px-5 py-1 rounded-md w-full  cursor-pointer">
              <div className="w-[40px] h-[40px] rounded-full overflow-hidden border-2 border-[#B5B5B5] bg-[#1A244B] flex items-center justify-center">
                <FaAddressCard className=" object-fill text-[#e4e5ec]" />
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="text-[#FFFFFF] text-[14px] font-[600] text-left">
                  Credit Card
                </div>
                <div className="flex items-start justify-start gap-6">
                  <div className="flex flex-col items-start justify-center">
                    <div className="text-[#237CCD] text-[10px]  text-left">
                      Card Number:
                    </div>
                    <div className="text-[#FFFFFF] text-[10px] font-[500]">
                      12375698466565
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <div className="text-[#237CCD] text-[10px]  text-left">
                      Expiry Date:
                    </div>
                    <div className="text-[#FFFFFF] text-[10px] font-[500]">
                      08-2024
                    </div>
                  </div>

                  <div className="flex flex-col items-start justify-center">
                    <div className="text-[#237CCD] text-[10px]  text-left">
                      CVV Number:
                    </div>
                    <div className="text-[#FFFFFF] text-[10px] font-[500]">
                      288
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseCard;
