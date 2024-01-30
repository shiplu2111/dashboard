import React from "react";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";

const CustomerInfo = ({ visible, onClose }) => {
  const router = useRouter();
  const handleLogout = () => {
    toast.success("Logout Successfull!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
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
        className="fixed inset-0 bg-[url('/Session1.png')] bg-cover bg-no-repeat] bg-opacity-50 backdrop:blur-sm flex items-center justify-center"
        onClick={handleOnClose}
      >
        <div className="flex flex-col items-center justify-center rounded-lg  mx-1 md:mx-8 lg:mx-[120px] w-full px-8 md:px-0 ">
          <div className="bg-[#101D35] flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between rounded-t-lg px-5 md:px-[30px] lg:px-12 w-full gap-0 md:gap-12 relative ">
            <div className="flex flex-col items-start justify-start ">
              <div className="text-[#1F89E1] text-[10px] font-[400] pt-2 lg:pt-[14px]">
                Customer ID:
              </div>
              <div className="text-[#FFFFFF] text-[22px] md:text-[26px] lg:text-[30px] font-[700] pb-1">
                12032153356223
              </div>
            </div>
            <div className="flex items-start  md:items-center justify-start  md:gap-8 lg:gap-16">
              <div className="text-[14px] text-italic text-[#7F7878] font-[400] flex items-center justify-center pb-2 md:pb-0">
                Last update: 18-Jan-20204 • 8:36AM
              </div>
              <div className="hidden md:flex items-center justify-center ">
                <IoClose
                  className="text-[#7D6C6C] h-[28.33px] w-[28.33px] cursor-pointer"
                  onClick={onClose}
                />
              </div>
              <div className=" flex md:hidden absolute top-5 right-5 items-center justify-center ">
                <IoClose
                  className="text-[#7D6C6C] h-[30px] w-[30px] cursor-pointer"
                  onClick={onClose}
                />
              </div>
            </div>
          </div>
          <div className="bg-[#1A244B] grid grid-cols-1 lg:grid-cols-9 items-start justify-center gap-3 lg:gap-[35px] w-full px-3 md:px-6 lg:px-[50px]">
            <div className="lg:col-span-4 flex flex-col items-center justify-center pt-4 lg:pt-[46px] gap-[14px]">
              <div className="grid grid-cols-4 items-center justify-between gap-[27px] w-full">
                <label
                  htmlFor="fName"
                  className="text-[#2196F3] text-[14px] font-[400]"
                >
                  Username:
                </label>
                <input
                  type="text"
                  className="col-span-3 w-full px-1  h-9 bg-[#242A44] py-1 pl-4 text-[#FFF] text-[14px] font-[400] border-[.5px] border-transparent rounded-md leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue "
                  value="austin.johanson"
                  id="fName"
                />
              </div>
              <div className="grid grid-cols-4 items-center justify-between gap-[27px] w-full">
                <label
                  htmlFor="fName"
                  className="text-[#2196F3] text-[14px] font-[400]"
                >
                  Password:
                </label>
                <input
                  type="text"
                  className="col-span-3 w-full px-1 h-9 bg-[#242A44] py-1 pl-4 text-[#FFF] text-[14px] font-[400] border-[.5px] border-transparent rounded-md leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue "
                  value="@DareDeviL"
                  id="fName"
                />
              </div>
              <div className="grid grid-cols-4  items-center justify-between gap-[27px] w-full">
                <label
                  htmlFor="fName"
                  className=" text-[#2196F3] text-[14px] font-[400]"
                >
                  Full Name:
                </label>
                <input
                  type="text"
                  className="col-span-3 w-full px-1  h-9 bg-[#242A44] py-1 pl-4 text-[#FFF] text-[14px] font-[400] border-[.5px] border-transparent rounded-md leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue "
                  value="John Efren Borican "
                  id="fName"
                />
              </div>
              <div className="grid grid-cols-4  items-center justify-between gap-[27px] w-full">
                <label
                  htmlFor="fName"
                  className="text-[#2196F3] text-[14px] font-[400]"
                >
                  Email Add:
                </label>
                <input
                  type="email"
                  className="col-span-3 w-full px-1  h-9 bg-[#242A44] py-1 pl-4 text-[#FFF] text-[14px] font-[400] border-[.5px] border-transparent rounded-md leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue "
                  value="a.johanson@canada.com"
                  id="fName"
                />
              </div>
            </div>
            <div className="lg:col-span-5 py-4 lg:py-8 w-full">
              <div className="bg-[#222C52] flex flex-col items-center justify-center w-full px-3 md:px-[24px]  py-[33px]">
                <div className="grid grid-cols-4 items-center justify-between gap-[29px] w-full">
                  <label className="text-[#2196F3] text-[14px] font-[400]">
                    Session Token:
                  </label>
                  <div className="relative  col-span-3 ">
                    <input
                      type="text"
                      className=" w-full px-1  py-[9px] bg-[#242A44]  pl-4 text-[#FFF] text-[14px] font-[400] border-[.5px] border-[#707070] rounded-md leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
                      value="hjsjdheuh1344545"
                    />
                    <div className="absolute top-1/2 right-2 -translate-y-1/2">
                      <div className="flex items-center justify-center w-[38px] h-[30px]  bg-[#2196F3] border border-[#707070] rounded-md">
                        <IoMdRefresh className="text-[#FFF] h-5 w-5 font-[700]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-4 items-center justify-between gap-[22px] w-full pt-4 lg:pt-[22px]">
                  <label className="text-[#2196F3] text-[14px] font-[400]">
                    Master Session:
                  </label>
                  <input
                    type="text"
                    className="col-span-3 w-full px-1   bg-[#242A44] py-[9px] pl-4 text-[#FFF] text-[14px] font-[400] border-[.5px] border-[#707070] rounded-md leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue "
                    value="Needs Authentication"
                  />
                </div>
                <div className="grid grid-cols-4 items-center justify-between gap-[27px] w-full pt-0 lg:pt-[22px] ">
                  <div className="invisible"></div>
                  <div className="col-span-4 lg:col-span-3 w-full flex items-center justify-center gap-[27px]">
                    <button className="text-[#FFFFFF] text-[13px] font-[400] py-[6px] w-full bg-[#A470F3] rounded">
                      AUTHENTICATE MS
                    </button>
                    <button className="text-[#FFFFFF] text-[13px] font-[400] py-[6px] w-full bg-[#43A875] rounded">
                      OTP GENERATOR
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#101D35] flex flex-col gap-3 md:gap-0 md:flex-row items-center justify-between w-full pl-3 md:pl-12 pr-3 md:pr-[14px] py-[18px]">
            <div className="flex items-center justify-center md:justify-start gap-4 w-full">
              <p className="text-[#FFFFFF] text-[14px] font-[400]">Status:</p>
              <button className="text-[#00FF43] text-[13px] font-[700] py-[4.5px] px-11 bg-[#476989] rounded-2xl tracking-[0.5px]">
                LIVE
              </button>
            </div>
            <div className="grid grid-cols-2 lg:flex  items-center justify-between gap-3 lg:gap-[66px] w-full">
              <div className="flex items-center justify-center gap-[6.71px] cursor-pointer ">
                <img
                  src="/delete_black.svg"
                  className="h-[24.12px] w-[24.12px] object-cover"
                  alt=""
                />
                <p className="text-[#F12B2B] text-[14px] font-[400]">Delete</p>
              </div>

              <div className="flex items-center justify-center gap-[6.71px]  cursor-pointer ">
                <FaRegEyeSlash className="h-6 w-6 text-[#8B8B8B]" />
                <p className="text-[#FFFFFF] text-[14px] font-[400]">
                  Set Inactive
                </p>
              </div>

              <div className="col-span-2 flex items-center justify-center ">
                <button className="text-[#FFFFFF] text-[14px] font-[400] py-[8.5px]  lg:w-auto px-[54px] bg-[#2196F3] rounded ">
                  Send Transfer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerInfo;
