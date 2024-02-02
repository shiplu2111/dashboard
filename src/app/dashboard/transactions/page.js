"use client";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import TransactionData from "/src/data/Transactions.json";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import TransactionTable from "@/components/tables/TransactionTable";
import TransectionPageCards from "@/components/cards/TransectionPageCards";

const Transactions = () => {
  const [data, setData] = useState(TransactionData.transactions);
  return (
    <>
      <div className="w-full">
        <div className="flex flex-col flex-shrink-0  pb-[60px]">
          <div className="px-3 md:px-4 xl:px-8 flex flex-col bg-[#1A244B]">
            <div className="pt-[21px] text-[20px] text-[#FFF] font-[400]">
              TRANSACTIONS
            </div>
            <div className=" pt-8  py-[35px]">
              <TransectionPageCards />
            </div>
          </div>
          <div className="flex flex-col bg-[#222C52]">
            <div className="pt-2 bg-[#222C52] w-full">
              <div className=" px-3 md:px-4 xl:px-8 flex flex-col  border-b-[2px]   border-[#707070] ">
                <div className="pt-[34px] pb-[7px]">
                  <span className="text-[11px] text-[#4897E0] font-[700] pb-[9px] border-b-[4px] border-[#4897E0] z-[1000]">
                    ALL TRANSACTIONS
                  </span>
                  <span className="text-[11px] text-[#FFFFFF] font-[700] pl-2">
                    APPROVED DECLINED
                  </span>
                </div>
              </div>
            </div>
            <div className=" bg-[#323E6C] bg-opacity-[0.81] w-full  ">
              <div className="px-3 md:px-4 xl:px-8 flex flex-col ">
                <div className="pt-[15px] relative flex items-center justify-center ">
                  <input
                    type="text"
                    className="w-full bg-[#363F62] opacity-[0.78] rounded-md h-10 pl-10 text-[#D1D1D2] text-[11px] font-[300] focus:ring-[#101D35]"
                    placeholder="Search..."
                  />
                  <span className="absolute left-3 top-2/3  -translate-y-1/2 ">
                    <IoIosSearch className="w-6 h-6 text-[#2095F3] " />
                  </span>
                </div>
                <div className="pt-5  ">
                  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <TransactionTable data={data} />
                  </div>
                  <div className="py-[21px]  flex items-start justify-start ">
                    <ul className="flex items-center justify-center lg:justify-start gap-4 md:gap-[25px] ">
                      <li className="pr-[6px]  cursor-pointer">
                        <IoIosArrowBack className="text-[#7E84A3] h-6 w-6" />
                      </li>
                      <li className="text-[#FFFFFF] text-[16px] font-[400] cursor-pointer ">
                        <span className="bg-[#2196F3]  px-4 py-2 rounded-md">
                          1
                        </span>
                      </li>
                      <li className=" text-[#7E84A3] text-[16px] font-[400] cursor-pointer">
                        2
                      </li>
                      <li className=" text-[#7E84A3] text-[16px] font-[400] cursor-pointer">
                        3
                      </li>
                      <li className=" text-[#7E84A3] text-[16px] font-[400] cursor-pointer">
                        4
                      </li>
                      <li className=" text-[#7E84A3] text-[16px] font-[400] cursor-pointer">
                        ...
                      </li>
                      <li className=" text-[#7E84A3] text-[16px] font-[400] cursor-pointer">
                        11
                      </li>
                      <li className=" text-[#7E84A3] text-[16px] font-[400] cursor-pointer">
                        12
                      </li>
                      <li className=" cursor-pointer">
                        <IoIosArrowForward className="text-[#7E84A3] h-6 w-6" />
                      </li>
                    </ul>
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

export default Transactions;
