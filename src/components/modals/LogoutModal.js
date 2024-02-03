import React from "react";
import { MdLogout } from "react-icons/md";
import { useRouter } from "next/navigation";

const LogoutModal = ({ visible, onClose }) => {
  const router = useRouter();
  const handleLogout = () => {
    router.push("/login");
  };
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
        <div className="flex flex-col items-center justify-center mx-2 md:mx-0 rounded-lg w-screen px-4 md:w-auto ">
          <div className="bg-[#1A244B] flex flex-col items-center justify-center rounded-t-lg pb-[43.21px] w-full">
            <div className="pt-[51px]">
              <MdLogout className="text-[#A52020] w-[73px] h-[67.109px]" />
            </div>
            <div className="pt-[22.92px] px-10">
              <p className="text-[14px] md:text-[18px] font-[700] text-[#FFF]">
                Are you sure you want to log out?
              </p>
            </div>
          </div>
          <div className="bg-[#1C3460] flex items-center justify-between rounded-b-lg w-full">
            <div
              className="flex items-center justify-center py-[21.5px] w-full cursor-pointer hover:bg-[#24375a] hover:rounded-bl-md"
              onClick={onClose}
            >
              <span className="text-[#FFF] text-[10px] font-[700]">Cancel</span>
            </div>
            <div
              className="flex items-center justify-center py-[21.5px] w-full  cursor-pointer  hover:bg-[#24375a] hover:rounded-br-md "
              onClick={handleLogout}
            >
              <span className="text-[#FFF] text-[10px] font-[700]">
                Log out
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoutModal;
