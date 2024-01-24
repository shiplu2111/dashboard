import React from "react";
import { FaUsers } from "react-icons/fa";
const Sidebar = () => {
  return (
    <>
      <div className="bg-primary h-[100vh] w-[110px] ">
        <div className="flex items-center justify-center flex-col gap-1 ">
          <div className="flex flex-col items-center justify-center mt-[47.33px] py-4 border-l-[5px] border-[#0058FF]  bg-[#192754] w-full cursor-pointer">
            <div>
              <img src="/customer.svg" alt="" />
            </div>
            <div className="pt-[5.475px] text-[#FFF] text-[12px] font-[500] ">
              CUSTOMERS
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-[5.33px] py-4  w-full  cursor-pointer">
            <div>
              <img src="/tran.svg" alt="" />
            </div>
            <div className="pt-[5.475px] text-[#FFF] text-[12px] font-[400] ">
              TRANSACTIONS
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-[5.33px] py-4  w-full  cursor-pointer">
            <div>
              <img src="/settings.svg" alt="" />
            </div>
            <div className="pt-[5.475px] text-[#FFF] text-[12px] font-[400] ">
              SETTINGS
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
