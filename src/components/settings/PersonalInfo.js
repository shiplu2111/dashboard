import React from "react";

const PersonalInfo = () => {
  return (
    <>
      <div className="flex flex-col items-start  justify-sitems-start pt-[35px] px-11 ">
        <div className="w-full px-[39px] border bg-[#313B5E] flex flex-col">
          <div className="flex items-start justify-start gap-[6.71px] pt-[31px]">
            <div>
              <img src="/contacts_black_24dp.svg" alt="" />
            </div>
            <div className="text-[18px] font-[700] text-[#FFF]">
              Personal Information
            </div>
          </div>
          <div className="w-full grid grid-cols-3 items-start justify-start pt-[29px] pb-[20px] ">
            <div className="w-full flex items-center justify-center">
              <div className=" bg-[#2196F3] bg-opacity-[0.23] rounded-full p-11">
                <div>
                  <img src="/account_circle_black_24dp.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-span-2 w-full ">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="grid grid-cols-2 gap-[34.5px]  w-full">
                  <div className="flex flex-col">
                    <label
                      htmlFor="fname"
                      className="text-[#FFF] text-[11px] font-[400]"
                    >
                      FIRST NAME
                    </label>
                    <input
                      type="text"
                      className="w-full px-2 py-[4.5px]  mt-[5.5px]  bg-[#343C57] h-[35px] border-[.5px] border-[#AAAAAA] rounded-md leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue text-[#FFF] font-[400]"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="fname"
                      className="text-[#FFF] text-[11px] font-[400]"
                    >
                      LAST NAME
                    </label>
                    <input
                      type="text"
                      className="w-full px-2 py-[4.5px] mt-[5.5px]  bg-[#343C57] h-[35px] border-[.5px] border-[#AAAAAA] rounded-md leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue text-[#FFF]"
                      name=""
                      id=""
                    />
                  </div>

                  <div className="col-span-2 flex flex-col">
                    <label
                      htmlFor="fname"
                      className="text-[#FFF] text-[11px] font-[400]"
                    >
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      className="w-full px-2 py-[4.5px]  mt-[5.5px]  bg-[#343C57] h-[35px] border-[.5px] border-[#AAAAAA] rounded-md leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue text-[#FFF]"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="col-span-2 flex flex-col md:flex-row items-center justify-end gap-[26px]">
                    <button className="px-16 py-2 bg-[#313B5E] border border-[#E4E4E4] rounded-md text-[13px] font-[400] text-[#FFF]">
                      Discard
                    </button>
                    <button className="px-10 py-2 bg-[#2196F3] hover:bg-[#439FF3] focus:bg-[#3A7BB7] border border-[#707070] rounded-md text-[13px] font-[400] text-[#FFF]">
                      Apply Changes
                    </button>
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

export default PersonalInfo;
