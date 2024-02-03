import { IoClose } from "react-icons/io5";

const OtpGenerator = ({ visible, onClose }) => {
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
        <div className="flex flex-col items-center justify-center mx-2 md:mx-0 rounded-lg bg-[#1A244B] px-[69px] pt-[39px] pb-[54.5px] relative">
          <div className="absolute top-[20px] right-[22px]">
            <IoClose
              className="size-[23.7px] text-[#7D6C6C] cursor-pointer"
              onClick={onClose}
            />
          </div>
          <div className="flex items-center justify-center  text-[22px] font-[700] text-[#92E96F]">
            OTP Generator
          </div>
          <div className="pt-[26px] flex items-center justify-center text-[#00E0E7] text-[10px] font-[400]">
            DEVICE ID:
          </div>
          <div className="flex items-center justify-center text-[#FFFFFF] text-[12px] font-[500]">
            1235468564
          </div>
          <div className="pt-[17px] flex items-center justify-center w-full relative">
            <input
              type="text"
              className="py-[3px] w-full border text-center form-control rounded bg-[#2B4562] text-[20px] font-[500] text-[#FFFFFF] tracking-[4px] border-[#1AB388] focus:outline-none "
              value={"3845FJ"}
              disabled
            />
            <div className="absolute right-0 top-1/2  pr-1 ">
              <img src="/copy.png" alt="" className="h-[18px] w-6 " />
            </div>
          </div>
          <div className="pt-[26.5px] flex items-center justify-center w-full gap-[10px]">
            <button className="text-[#FFFFFF] text-[10px] font-[400] py-[5.5px] px-[20px] bg-[#0E946F] w-full rounded-md  shadow-2xl shadow-gray-900">
              Generate OTP
            </button>
            <button className="text-[#FFFFFF] text-[10px] font-[400] py-[5.5px] px-[20px] bg-[#A24141] w-full rounded-md  shadow-2xl shadow-gray-900">
              Deactivate
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtpGenerator;
