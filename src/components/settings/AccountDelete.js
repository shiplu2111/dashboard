import React from "react";

const AccountDelete = () => {
  return (
    <>
      <div className="flex flex-col items-start  justify-sitems-start pt-[35px]">
        <div className="w-full px-[39px] border bg-[#101D35] flex flex-col">
          <div className="flex items-center justify-center md:justify-start gap-[6.71px] pt-[27.4px]">
            <div>
              <img src="/delete_black_24dp.svg" className="h-9 w-9" alt="" />
            </div>
            <div className="text-[18px] font-[700] text-[#FFF]">
              Delete Account
            </div>
          </div>
          <div className="pt-[24px] pb-[40px] ">
            <div className="flex flex-col md:flex-row gap-5 items-center md:items-end justify-between ">
              <div className="flex flex-col">
                <p className="text-[#FFF] text-[13px] font-[400]">
                  If you wish to delete your account
                </p>
                <p className="text-[#FFF] text-[13px] font-[400]">
                  please contact our Support Service
                </p>
              </div>
              <div className="flex items-center justify-center">
                <button className="text-[#FFF] text-[13px] font-[400] bg-[#313B5E] border border-[#707070] hover:bg-[#354169] focus:bg-[#36436d] px-[40px] py-[7px] rounded">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountDelete;
