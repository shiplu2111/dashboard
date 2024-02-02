import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const TransectionPageCards = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <div className="flex items-center justify-between bg-[#0B70B4] rounded-lg px-5 lg:px-[45.5px]">
          <div className="flex items-center justify-start py-[24.5px]  gap-[15.8px]">
            <div className="px-3 py-3 bg-[#40D6FC] rounded-lg  border-2 border-[#707070] shadow-2xl shadow-gray-900">
              <img
                src="/long_black.svg "
                className="h-[38px] w-[38px] object-cover"
                alt=""
              />
            </div>
            <div className="text-[20px] text-[#01E3E5] font-[500]">
              Total Transactions
            </div>
          </div>
          <div className="flex items-end justify-center text-[30px] text-[#FFF] font-[700]">
            25,8965
          </div>
        </div>

        <div className="flex items-center justify-between bg-[#1C7360] rounded-lg  px-5 lg:px-[45.5px]">
          <div className="flex items-center justify-start py-[24.5px]  gap-[15.8px]">
            <div className="px-3 py-3 bg-[#20A943] border-2 border-[#707070] rounded-lg  shadow-2xl shadow-gray-900">
              <img
                src="/Peso.png"
                className="h-[38px] w-[38px] object-cover"
                alt=""
              />
            </div>
            <div className="text-[20px] text-[#3FFF71] font-[500]">
              Total Amount
            </div>
          </div>
          <div className="flex items-end justify-center text-[30px] text-[#FFF] font-[700] ">
            <span className={inter.className}> ₱45,000.00</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransectionPageCards;
