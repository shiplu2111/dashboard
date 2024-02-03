import React from "react";
import { IoClose } from "react-icons/io5";
import { FaAddressCard } from "react-icons/fa";
const ChooseWallet = ({ visible, onClose }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "modal-bg") onClose();
  };
  if (!visible) return null;
  return (
    <>
      <div
        id="modal-bg"
        className="fixed inset-0 bg-[#020308]  z-[1000] bg-cover bg-no-repeat bg-opacity-90 backdrop:blur-sm flex items-center justify-center"
        onClick={handleOnClose}
      >
        <div className="flex flex-col items-center justify-center mx-2 md:mx-0 rounded-lg bg-[#1A244B] px-2 md:px-[74px] py-8 md:py-[55px] relative">
          <div className="absolute top-[20px] right-[22px]">
            <IoClose
              className="size-[23.7px] text-[#7D6C6C] cursor-pointer"
              onClick={onClose}
            />
          </div>
          <div className="flex items-center justify-center  text-[20px] font-[600] text-[#BFA1F9] pb-4">
            CHOOSE REZULT WALLET
          </div>
          <div className="flex flex-col items-center  justify-start  gap-2 max-h-[280px] overflow-y-scroll my-scroll px-3 scroll-mr-0">
            <div className="relative flex items-center justify-between gap-2 bg-[#2A429E] bg-opacity-50 px-3 py-1 rounded-md w-full  cursor-pointer hover:bg-[#2A429E] hover:shadow-sm hover:shadow-[#E46300]">
              <div className="absolute  -top-1 bg-[#E46300] -left-2 z-[1000] rounded-tl-2xl ">
                <span className="px-2 py-1 text-[10px] font-[500] text-[#FFFFFF]">
                  Active
                </span>
              </div>
              <div className="absolute top-1 shadow-inner shadow-[#E46300] bg-[#775840] h-6 w-2 rounded-l-full -left-2"></div>
              <div className="flex items-center justify-start gap-4 py-1 rounded-md w-full">
                <div className="w-[40px] h-[40px] rounded-full overflow-hidden border-2 border-[#B5B5B5] bg-[#1A244B] flex items-center justify-center">
                  <FaAddressCard className=" object-fill text-[#e4e5ec]" />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="flex justify-between gap-8">
                    <div className="text-[#FFFFFF] text-[14px] font-[600] text-left">
                      Barclays Bank
                    </div>
                    <div className="text-[#2196F3] text-[16px] font-[600] md:hidden block">
                      ₱28,318.00
                    </div>
                  </div>
                  <div className="flex  items-start justify-start gap-6 pt-1">
                    <div className="flex flex-col items-start justify-center">
                      <div className="text-[#237CCD] text-[10px]  text-left">
                        Account ID:
                      </div>
                      <div className="text-[#FFFFFF] text-[10px] font-[500]">
                        12375698466565
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-center">
                      <div className="text-[#237CCD] text-[10px]  text-left">
                        Account Name:
                      </div>
                      <div className="text-[#FFFFFF] text-[10px] font-[500]">
                        Jennifar Lopez
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[#2196F3] text-[16px] font-[600] hidden md:block">
                ₱1,418.00
              </div>
            </div>

            <div className="relative flex items-center justify-between gap-2 bg-[#2A3665] px-3 py-1 rounded-md w-full  cursor-pointer hover:bg-[#2A429E] hover:shadow-sm hover:shadow-[#E46300]">
              <div className="flex items-center justify-start gap-2  py-1 rounded-md w-full">
                <div className="w-[40px] h-[40px] rounded-full overflow-hidden border-2 border-[#B5B5B5] bg-[#1A244B] flex items-center justify-center">
                  <FaAddressCard className=" object-fill text-[#e4e5ec]" />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="flex justify-between gap-8">
                    <div className="text-[#FFFFFF] text-[14px] font-[600] text-left">
                      Red Deer Bank
                    </div>
                    <div className="text-[#2196F3] text-[16px] font-[600] md:hidden block">
                      ₱28,318.08
                    </div>
                  </div>
                  <div className="flex  items-start justify-start gap-6 pt-1">
                    <div className="flex flex-col items-start justify-center">
                      <div className="text-[#237CCD] text-[10px]  text-left">
                        Account ID:
                      </div>
                      <div className="text-[#FFFFFF] text-[10px] font-[500]">
                        12375698466565
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-center">
                      <div className="text-[#237CCD] text-[10px]  text-left">
                        Account Name:
                      </div>
                      <div className="text-[#FFFFFF] text-[10px] font-[500]">
                        Jennifar Lopez
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[#2196F3] text-[16px] font-[600] hidden md:block">
                ₱45,000.00
              </div>
            </div>
            <div className="relative flex items-center justify-between gap-2 bg-[#2A3665] px-3 py-1 rounded-md w-full  cursor-pointer hover:bg-[#2A429E] hover:shadow-sm hover:shadow-[#E46300]">
              <div className="flex items-center justify-start gap-2  py-1 rounded-md w-full">
                <div className="w-[40px] h-[40px] rounded-full overflow-hidden border-2 border-[#B5B5B5] bg-[#1A244B] flex items-center justify-center">
                  <FaAddressCard className=" object-fill text-[#e4e5ec]" />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="flex justify-between gap-8">
                    <div className="text-[#FFFFFF] text-[14px] font-[600] text-left">
                      Japan Post Bank
                    </div>
                    <div className="text-[#2196F3] text-[16px] font-[600] md:hidden block">
                      ₱45,000.00
                    </div>
                  </div>
                  <div className="flex  items-start justify-start gap-6 pt-1">
                    <div className="flex flex-col items-start justify-center">
                      <div className="text-[#237CCD] text-[10px]  text-left">
                        Account ID:
                      </div>
                      <div className="text-[#FFFFFF] text-[10px] font-[500]">
                        12375698466565
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-center">
                      <div className="text-[#237CCD] text-[10px]  text-left">
                        Account Name:
                      </div>
                      <div className="text-[#FFFFFF] text-[10px] font-[500]">
                        Jennifar Lopez
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[#2196F3] text-[16px] font-[600] hidden md:block">
                ₱45,000.00
              </div>
            </div>
            <div className="relative flex items-center justify-between gap-2 bg-[#2A3665] px-3 py-1 rounded-md w-full  cursor-pointer hover:bg-[#2A429E] hover:shadow-sm hover:shadow-[#E46300]">
              <div className="flex items-center justify-start gap-2  py-1 rounded-md w-full">
                <div className="w-[40px] h-[40px] rounded-full overflow-hidden border-2 border-[#B5B5B5] bg-[#1A244B] flex items-center justify-center">
                  <FaAddressCard className=" object-fill text-[#e4e5ec]" />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="flex justify-between gap-8">
                    <div className="text-[#FFFFFF] text-[14px] font-[600] text-left">
                      Red Deer Bank
                    </div>
                    <div className="text-[#2196F3] text-[16px] font-[600] md:hidden block">
                      ₱45,000.00
                    </div>
                  </div>
                  <div className="flex  items-start justify-start gap-6 pt-1">
                    <div className="flex flex-col items-start justify-center">
                      <div className="text-[#237CCD] text-[10px]  text-left">
                        Account ID:
                      </div>
                      <div className="text-[#FFFFFF] text-[10px] font-[500]">
                        12375698466565
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-center">
                      <div className="text-[#237CCD] text-[10px]  text-left">
                        Account Name:
                      </div>
                      <div className="text-[#FFFFFF] text-[10px] font-[500]">
                        Jennifar Lopez
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[#2196F3] text-[16px] font-[600] hidden md:block">
                ₱45,000.00
              </div>
            </div>
            <div className="relative flex items-center justify-between gap-2 bg-[#2A3665] px-3 py-1 rounded-md w-full  cursor-pointer hover:bg-[#2A429E] hover:shadow-sm hover:shadow-[#E46300]">
              <div className="flex items-center justify-start gap-2  py-1 rounded-md w-full">
                <div className="w-[40px] h-[40px] rounded-full overflow-hidden border-2 border-[#B5B5B5] bg-[#1A244B] flex items-center justify-center">
                  <FaAddressCard className=" object-fill text-[#e4e5ec]" />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="flex justify-between gap-8">
                    <div className="text-[#FFFFFF] text-[14px] font-[600] text-left">
                      Red Deer Bank
                    </div>
                    <div className="text-[#2196F3] text-[16px] font-[600] md:hidden block">
                      ₱45,000.00
                    </div>
                  </div>
                  <div className="flex  items-start justify-start gap-6 pt-1">
                    <div className="flex flex-col items-start justify-center">
                      <div className="text-[#237CCD] text-[10px]  text-left">
                        Account ID:
                      </div>
                      <div className="text-[#FFFFFF] text-[10px] font-[500]">
                        12375698466565
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-center">
                      <div className="text-[#237CCD] text-[10px]  text-left">
                        Account Name:
                      </div>
                      <div className="text-[#FFFFFF] text-[10px] font-[500]">
                        Jennifar Lopez
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[#2196F3] text-[16px] font-[600] hidden md:block">
                ₱45,000.00
              </div>
            </div>
            <div className="relative flex items-center justify-between gap-2 bg-[#2A3665] px-3 py-1 rounded-md w-full  cursor-pointer hover:bg-[#2A429E] hover:shadow-sm hover:shadow-[#E46300]">
              <div className="flex items-center justify-start gap-2  py-1 rounded-md w-full">
                <div className="w-[40px] h-[40px] rounded-full overflow-hidden border-2 border-[#B5B5B5] bg-[#1A244B] flex items-center justify-center">
                  <FaAddressCard className=" object-fill text-[#e4e5ec]" />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="flex justify-between gap-8">
                    <div className="text-[#FFFFFF] text-[14px] font-[600] text-left">
                      Red Deer Bank
                    </div>
                    <div className="text-[#2196F3] text-[16px] font-[600] md:hidden block">
                      ₱45,000.00
                    </div>
                  </div>
                  <div className="flex  items-start justify-start gap-6 pt-1">
                    <div className="flex flex-col items-start justify-center">
                      <div className="text-[#237CCD] text-[10px]  text-left">
                        Account ID:
                      </div>
                      <div className="text-[#FFFFFF] text-[10px] font-[500]">
                        12375698466565
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-center">
                      <div className="text-[#237CCD] text-[10px]  text-left">
                        Account Name:
                      </div>
                      <div className="text-[#FFFFFF] text-[10px] font-[500]">
                        Jennifar Lopez
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[#2196F3] text-[16px] font-[600] hidden md:block">
                ₱45,000.00
              </div>
            </div>
            <div className="relative flex items-center justify-between gap-2 bg-[#2A3665] px-3 py-1 rounded-md w-full  cursor-pointer hover:bg-[#2A429E] hover:shadow-sm hover:shadow-[#E46300]">
              <div className="flex items-center justify-start gap-2  py-1 rounded-md w-full">
                <div className="w-[40px] h-[40px] rounded-full overflow-hidden border-2 border-[#B5B5B5] bg-[#1A244B] flex items-center justify-center">
                  <FaAddressCard className=" object-fill text-[#e4e5ec]" />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="flex justify-between gap-8">
                    <div className="text-[#FFFFFF] text-[14px] font-[600] text-left">
                      Red Deer Bank
                    </div>
                    <div className="text-[#2196F3] text-[16px] font-[600] md:hidden block">
                      ₱45,000.00
                    </div>
                  </div>
                  <div className="flex  items-start justify-start gap-6 pt-1">
                    <div className="flex flex-col items-start justify-center">
                      <div className="text-[#237CCD] text-[10px]  text-left">
                        Account ID:
                      </div>
                      <div className="text-[#FFFFFF] text-[10px] font-[500]">
                        12375698466565
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-center">
                      <div className="text-[#237CCD] text-[10px]  text-left">
                        Account Name:
                      </div>
                      <div className="text-[#FFFFFF] text-[10px] font-[500]">
                        Jennifar Lopez
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[#2196F3] text-[16px] font-[600] hidden md:block">
                ₱45,000.00
              </div>
            </div>
            <div className="relative flex items-center justify-between gap-2 bg-[#2A3665] px-3 py-1 rounded-md w-full  cursor-pointer hover:bg-[#2A429E] hover:shadow-sm hover:shadow-[#E46300]">
              <div className="flex items-center justify-start gap-2  py-1 rounded-md w-full">
                <div className="w-[40px] h-[40px] rounded-full overflow-hidden border-2 border-[#B5B5B5] bg-[#1A244B] flex items-center justify-center">
                  <FaAddressCard className=" object-fill text-[#e4e5ec]" />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="flex justify-between gap-8">
                    <div className="text-[#FFFFFF] text-[14px] font-[600] text-left">
                      Red Deer Bank
                    </div>
                    <div className="text-[#2196F3] text-[16px] font-[600] md:hidden block">
                      ₱45,000.00
                    </div>
                  </div>
                  <div className="flex  items-start justify-start gap-6 pt-1">
                    <div className="flex flex-col items-start justify-center">
                      <div className="text-[#237CCD] text-[10px]  text-left">
                        Account ID:
                      </div>
                      <div className="text-[#FFFFFF] text-[10px] font-[500]">
                        12375698466565
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-center">
                      <div className="text-[#237CCD] text-[10px]  text-left">
                        Account Name:
                      </div>
                      <div className="text-[#FFFFFF] text-[10px] font-[500]">
                        Jennifar Lopez
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[#2196F3] text-[16px] font-[600] hidden md:block">
                ₱45,000.00
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseWallet;
