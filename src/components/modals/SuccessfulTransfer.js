import { IoClose } from "react-icons/io5";

const SuccessfulTransfer = ({ visible, onClose }) => {
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
        <div className="flex flex-col items-center justify-center w-screen md:w-auto mx-2 md:mx-0 rounded-lg bg-[#1A244B] pt-8 md:pt-[46px]  relative ">
          <div className="absolute top-[20px] right-[22px]">
            <IoClose
              className="size-[23.7px] text-[#7D6C6C] cursor-pointer"
              onClick={onClose}
            />
          </div>
          <div className="flex flex-col items-center justify-center w-full px-4 md:px-10 pb-8 md:pb-12">
            <div className="flex items-center justify-center">
              <img
                src="/task_alt_black_24dp.svg"
                className="h-[73px] w-[73px] object-cover"
                alt=""
              />
            </div>
            <div className="pt-[13px] flex items-center justify-center text-[18px] md:text-[20px] text-[#FFFFFF] font-[700]">
              You have successfully transferred
            </div>
            <div className="pt-[11px] text-[#FFA205] font-[400] text-[25px] md:text-[35px] flex items-center justify-center ">
              ₱38,000
            </div>
          </div>
          <div className="w-full bg-[#1C3460] flex items-center justify-center py-[14px] rounded-b-lg">
            <button
              onClick={onClose}
              className="text-[#FFFFFF] text-[12px] font-[700] py-[7.5px] px-[78px] bg-transparent border border-[#868686] rounded-md  shadow-2xl shadow-gray-900"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessfulTransfer;
