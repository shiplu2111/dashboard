import React from "react";
import { FaPesoSign } from "react-icons/fa6";
const Customer = () => {
  return (
    <>
      <div className="flex flex-col flex-shrink-0 px-8">
        <div className="pt-[21px] text-[20px] text-[#FFF] font-[400]">
          CUSTOMERS
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 pt-8">
          <div className="px-[23px] py-[24px] bg-[#0883CF] flex items-start justify-between rounded-lg">
            <div>
              <img
                src="/Taotaas.svg"
                className="h-[63px] w-[63px] object-cover"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center justify-center ">
              <h1 className="text-[#FFF] text-[30px] font-[700]">28,5689</h1>
              <p className="text-[#00F6ED] text-[15px] font-[500]">
                Total Customers
              </p>
            </div>
          </div>
          <div className="px-[23px] py-[24px] bg-[#1FC276] flex items-start justify-between rounded-lg">
            <div className="bg-[url('/Path465.svg')]  py-[13px] px-[14px] text-[#FFF]">
              <FaPesoSign className="h-[36px] w-[36px] object-cover" />
            </div>
            <div className="flex flex-col items-center justify-center ">
              <h1 className="text-[#FFF] text-[30px] font-[700]">₱45,000.00</h1>
              <p className="text-[#3FFF71] text-[15px] font-[500]">
                Total PHP Balance
              </p>
            </div>
          </div>
          <div className="px-[23px] py-[24px] bg-[#0883CF] flex items-start justify-between rounded-lg">
            <div>
              <img
                src="/Dollar.svg"
                className="h-[63px] w-[63px] object-cover"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center justify-center ">
              <h1 className="text-[#FFF] text-[30px] font-[700]">$38,888.00</h1>
              <p className="text-[#00F6ED] text-[15px] font-[500]">
                Total USD Balance
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer;
