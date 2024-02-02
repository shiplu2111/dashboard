import { IoClose, IoInformationCircleOutline } from "react-icons/io5";
import { IoMdRefresh } from "react-icons/io";
import { FaAddressCard } from "react-icons/fa";

const SendTransfer = ({ visible, onClose }) => {
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
        <div className="z-30 flex flex-col items-center justify-center mx-2 md:mx-0 rounded-lg bg-[#1A244B] pt-8 md:pt-[46px]  relative max-h-[95vh]  outline-none overflow-x-hidden overscroll-y-none">
          <div className="absolute top-[25px] right-[22px]">
            <IoClose
              className="size-[23.7px] text-[#7D6C6C] cursor-pointer"
              onClick={onClose}
            />
          </div>

          <div className="absolute top-[25px] left-[22px]">
            <IoInformationCircleOutline
              className="size-[23.7px] text-[#2196F3] cursor-pointer"
              onClick={onClose}
            />
          </div>
          <div className="flex flex-col items-center justify-center w-full px-4 md:px-10 pb-3 pt-16">
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center  text-[22px] font-[700] text-[#2196F3]">
                Send Transfer
              </div>
            </div>
            <div className="bg-[#222C52] flex flex-col items-center justify-center  px-2 md:px-4  py-7 rounded-md">
              <div className="grid grid-cols-4 items-center justify-between gap-[12px] w-full">
                <label className="text-[#2196F3] text-[12px] font-[400]">
                  Session Token:
                </label>
                <div className="relative  col-span-3 ">
                  <input
                    type="text"
                    className=" w-full px-1  py-[6px] bg-[#343C57]  pl-4 text-[#FFF] text-[12px] font-[400] border-[.5px] border-[#707070] rounded-md leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
                    value="hjsjdheuh1344545"
                  />
                  <div className="absolute top-1/2 right-2 -translate-y-1/2">
                    <div className="flex items-center justify-center w-7 h-6  bg-[#2196F3] border border-[#707070] rounded-md">
                      <IoMdRefresh className="text-[#FFF] h-5 w-5 font-[700]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-4 items-center justify-between gap-[12px] w-full pt-3 lg:pt-4">
                <label className="text-[#2196F3] text-[12px] font-[400]">
                  Master Session:
                </label>
                <input
                  type="text"
                  className="col-span-3 w-full px-1  py-[6px] bg-[#343C57]  pl-4 text-[#FFF] text-[12px] font-[400] border-[.5px] border-[#707070] rounded-md leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
                  value="Needs Authentication"
                />
              </div>
              <div className="grid grid-cols-4 items-center justify-between gap-[27px] w-full pt-0 lg:pt-[16px] ">
                <div className="invisible"></div>
                <div className="col-span-4 lg:col-span-3 w-full flex items-center justify-center gap-[27px]">
                  <button className="text-[#FFFFFF] text-[12px] font-[400] py-[5px] w-full bg-[#A470F3] rounded  shadow-2xl shadow-gray-900">
                    AUTHENTICATE MS
                  </button>
                  <button className="text-[#FFFFFF] text-[12px] font-[400] py-[5px] w-full bg-[#43A875] rounded  shadow-2xl shadow-gray-900">
                    OTP GENERATOR
                  </button>
                </div>
              </div>
            </div>
            <div className="py-4 text-[#FFFFFF] text-[13px] font-[400] flex items-center justify-center">
              SET REZULT WALLET
            </div>
            <div className="flex items-center justify-center w-full">
              <button className="text-[#FFFFFF] text-[12px] border border-[#FFFFFF] font-[400] py-[18px] px-[61.5px] bg-[#2A3665]  rounded-md w-full  shadow-2xl shadow-gray-900">
                Choose Wallet
              </button>
            </div>
            <div className="pt-4 pb-2 text-[#FFFFFF] text-[13px] font-[400] flex items-center justify-center">
              SET TYPE OF TRANSFER
            </div>
            <div className="flex items-center justify-center w-full gap-3">
              <div className="flex items-center mr-4 mb-4">
                <input
                  id="radio2"
                  type="radio"
                  name="radioOne"
                  className="hidden"
                />
                <label
                  htmlFor="radio2"
                  className="flex items-center cursor-pointer text-[#FFFFFF] text-[14px] font-[400] hover:text[#2196F3] focus:text-[#2196F3] "
                >
                  <span className="w-4 h-4 inline-block mr-1 rounded-full border border-[#2196F3]" />
                  Same Bank
                </label>
              </div>
              <div className="flex items-center mr-4 mb-4">
                <input
                  id="radio1"
                  type="radio"
                  name="radioOne"
                  className="hidden"
                />
                <label
                  htmlFor="radio1"
                  className="flex items-center cursor-pointer  text-[#FFFFFF] text-[14px] font-[400]"
                >
                  <span className="w-4 h-4 inline-block mr-1 rounded-full border border-[#2196F3]" />
                  Other Local Bank (Instapay)
                </label>
              </div>
            </div>
            <div className="py-2 text-[#FFFFFF] text-[13px] font-[400] flex items-center justify-center uppercase">
              Fill In Information
            </div>
            <div className="py-2 flex items-start justify-center flex-col w-full">
              <div className="flex items-start justify-start flex-col w-full gap-1">
                <label
                  htmlFor="bank"
                  className="text-[12px] font-[400] text-[#FFFFFF]"
                >
                  Account Number
                </label>
                <input
                  type="text"
                  className="w-full px-1  py-[6px] bg-[#343C57]  pl-4 text-[#FFF] text-[12px] font-[400] border-[.5px] border-[#707070] rounded-md leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
                />
              </div>
              <div className="flex items-start justify-start flex-col w-full gap-1 pt-2">
                <label
                  htmlFor="bank"
                  className="text-[12px] font-[400] text-[#FFFFFF]"
                >
                  Amount
                </label>
                <input
                  type="text"
                  className="w-full px-1  py-[6px] bg-[#343C57]  pl-4 text-[#FFF] text-[12px] font-[400] border-[.5px] border-[#707070] rounded-md leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
                />
              </div>
            </div>
          </div>
          <div className="w-full bg-[#1C3460] flex items-center justify-center py-[14px] rounded-b-lg">
            <button
              onClick={onClose}
              className="text-[#FFFFFF] text-[12px] font-[700] py-[7.5px] px-[60px] bg-blue-500  rounded-md  shadow-2xl shadow-gray-900"
            >
              Transfer Money
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SendTransfer;
