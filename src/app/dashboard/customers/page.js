import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdInfoOutline } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";

import { IoIosSearch } from "react-icons/io";
import CustomerTable from "@/components/tables/CustomerTable";
import CustomerPageCards from "@/components/cards/CustomerPageCards";
const Customer = () => {
  return (
    <>
      <div className="flex flex-col flex-shrink-0">
        <div className="px-3 md:px-4 xl:px-8 flex flex-col">
          <div className="pt-[21px] text-[20px] text-[#FFF] font-[400]">
            CUSTOMERS
          </div>
          <div className="pt-8 pb-[57.5px]">
            <CustomerPageCards />
          </div>
        </div>
        <div className="py-[43px] bg-[#222C52] w-full px-3 md:px-4 xl:px-8 ">
          <div className="flex flex-col ">
            <h1 className="text-[#FFF] text-[11px] font-[300]">
              ALL CUSTOMERS
            </h1>
            <div className="pt-[14px] relative flex items-center justify-center">
              <input
                type="text"
                className="w-full bg-[#363F62] opacity-[0.78] rounded-md h-10 pl-10 text-[#D1D1D2] text-[11px] font-[300] focus:ring-[#101D35]"
                placeholder="Search..."
              />
              <span className="absolute left-3 top-2/3  -translate-y-1/2 ">
                <IoIosSearch className="w-6 h-6 text-[#2095F3] " />
              </span>
            </div>
            <div className="pt-5">
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <CustomerTable />
              </div>
              <div className=" grid grid-cols-1 lg:grid-cols-2 items-start justify-between w-full gap-4 pt-[21px]">
                <div>
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
                <div className="pb-10 md:pb-0">
                  <ul className="flex items-center justify-center lg:justify-end gap-[13px] ">
                    <li className=" text-[#4897E0] text-[16px] font-[400] cursor-pointer bg-[#2D355C]  rounded-md">
                      <MdInfoOutline className="text-[#4897E0] h-[30px] w-[30px] px-1 py-1" />
                    </li>
                    <li className=" text-[#4897E0] text-[16px] font-[400] cursor-pointer bg-[#2D355C]  rounded-md">
                      <FaRegEyeSlash className="text-[#4897E0] h-[30px] w-[30px] px-1 py-1" />
                    </li>
                    <li className=" text-[#FFFFFF] text-[16px] font-[400] cursor-pointer bg-[#4897E0]  rounded-md">
                      <FiTrash className=" h-[30px] w-[30px] px-1 py-1" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer;
