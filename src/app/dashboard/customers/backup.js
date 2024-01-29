"use client";
import { useState } from "react";
import { FaPesoSign } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdInfoOutline } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";
import CustomerData from "/src/data/Customer.json";

import { IoIosSearch } from "react-icons/io";
const Customer = () => {
  const data = CustomerData.customer;
  const [openAction, setOpenAction] = useState(false);
  const [activeRaw, setActiveRaw] = useState(null);

  const setClickAction = (index) => {
    setOpenAction(!openAction);
    setActiveRaw(index);
  };
  return (
    <>
      <div className="flex flex-col flex-shrink-0">
        <div className="px-3 md:px-4 xl:px-8 flex flex-col">
          <div className="pt-[21px] text-[20px] text-[#FFF] font-[400]">
            CUSTOMERS
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 pt-8 pb-[57.5px]">
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
                <h1 className="text-[#FFF] text-[30px] font-[700]">
                  ₱45,000.00
                </h1>
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
                <h1 className="text-[#FFF] text-[30px] font-[700]">
                  $38,888.00
                </h1>
                <p className="text-[#00F6ED] text-[15px] font-[500]">
                  Total USD Balance
                </p>
              </div>
            </div>
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
                <table className="w-full h-full overflow-y-scroll ">
                  <thead className="text-[11px] font-[400] text-[#FFF] uppercase bg-[#131625]  border-2 border-[#101D35]  ">
                    <tr className="text-center ">
                      <th scope="col" className="px-4 py-5">
                        <div className="flex items-center">
                          <input
                            id="checkbox-all-search"
                            type="checkbox"
                            className="peer cursor-pointer appearance-none  relative h-4 w-4 bg-gray-900/25 dark:bg-gray-100/25 border-2 border-[#7D7D7D]  transition-all checked:appearance-auto rounded-[5px] checked:rounded-full"
                          />
                        </div>
                      </th>
                      <th scope="col" className="px-1 py-3 font-[400]">
                        ID NUMBER
                      </th>
                      <th scope="col" className="px-6 py-3  font-[400]">
                        USERNAME
                      </th>
                      <th scope="col" className="px-6 py-3  font-[400]">
                        DATE CREATED
                      </th>
                      <th scope="col" className="px-6 py-3  font-[400]">
                        STATUS
                      </th>
                      <th scope="col" className="px-6 py-3  font-[400]">
                        PHP BALANCE
                      </th>
                      <th scope="col" className="px-6 py-3  font-[400]">
                        USD BALANCE
                      </th>
                      <th scope="col" className="px-6 py-3  font-[400]">
                        TRANSFER
                      </th>
                      <th scope="col" className="px-6 py-3  font-[400]">
                        ACTIONS
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((customer, index) => (
                      <tr
                        key={index}
                        className={`${
                          customer.status == 4
                            ? " bg-[#2D355C] opacity-[0.2]"
                            : " bg-[#2D355C] opacity-[1]"
                        }  border-[2.5px]  border-[#101D35]   hover:bg-[#354183]  py-[22px] text-center`}
                      >
                        <td className="w-4 p-4">
                          <div className="flex items-center">
                            <input
                              id="checkbox-all-search"
                              type="checkbox"
                              className="peer cursor-pointer appearance-none  relative h-4 w-4 bg-transparent  border-2 border-[#FFFFFF]  transition-all checked:appearance-auto rounded-[5px] checked:rounded-full"
                            />
                            <label
                              htmlFor="checkbox-table-search-1"
                              className="sr-only"
                            >
                              checkbox
                            </label>
                          </div>
                        </td>
                        <td
                          scope="row"
                          className="px-1 py-4 text-[11px] font-[400] text-[#FFF]"
                        >
                          {customer.id}
                        </td>
                        <td className="px-6 py-4 text-[11px] font-[700] text-[#FFF]">
                          {customer.username}
                        </td>
                        <td className="px-6 py-4  text-[11px] font-[400] text-[#FFF]">
                          {customer.creater_at}
                        </td>
                        <td className="px-6 py-4  text-[11px] font-[400] text-[#FFF] text-center">
                          {customer.status == 1 && (
                            <button className="py-[5px] px-[25px] bg-[#476989] text-[#04DF94] text-[11px] font-[700] rounded-xl uppercase cursor-auto">
                              Live
                            </button>
                          )}
                          {customer.status == 2 && (
                            <button className="py-[3px] px-[30px] bg-[#5C2947] bg-opacity-[57%] text-[#04DF94] text-[11px] font-[400] rounded-xl uppercase cursor-auto">
                              DEAD
                            </button>
                          )}

                          {customer.status == 3 && (
                            <button className="py-[3px] px-[11px] bg-[#FFCD05] bg-opacity-[0.71] text-[#FFEFC3] text-[11px] font-[400] rounded-xl uppercase">
                              NEEDS ATTENTION
                            </button>
                          )}

                          {customer.status == 4 && (
                            <button className="py-[5px] px-[25px] bg-[#476989] text-[#04DF94]  text-[11px] font-[400] rounded-xl uppercase cursor-auto">
                              live
                            </button>
                          )}
                        </td>
                        <td className="px-6 py-4  text-[11px] font-[400] text-[#FFF]">
                          {customer.php_balance}
                        </td>
                        <td className="px-6 py-4  text-[11px] font-[400] text-[#FFF]">
                          {customer.usd_balance}
                        </td>
                        <td className="px-6 py-4  text-[11px] font-[400] text-[#FFF]">
                          <button className="py-[8px] px-[11px] bg-[#4897E0] text-[#FFFFFF] text-[11px] font-[700] rounded-md hover:bg-[#121F38] focus:bg-[#3A7BB7]">
                            Send Transfer
                          </button>
                        </td>
                        <td className="flex items-center px-6 py-4 ">
                          <div className=" text-[#FFFFFF] font-[700] dark:text-blue-500 cursor-pointer relative">
                            <span onClick={() => setClickAction(index)}>
                              ...
                            </span>
                            <div className="absolute  w-[143px] top-[23px] -left-[100px] h-28  bg-white rounded-xl "></div>
                            <div
                              className={`${
                                openAction === true && index === activeRaw
                                  ? ""
                                  : "hidden"
                              } absolute z-40 left-1 ${
                                index > 7 ? "-top-[0px]" : "top-[22px]"
                              } rotate-45 h-3 w-3 bg-[#FFFFFF]`}
                            ></div>
                            <div
                              className={`${
                                openAction === true && index === activeRaw
                                  ? ""
                                  : "hidden"
                              } absolute  z-40  -left-9 ${
                                index > 7 ? "-top-[52px]" : "top-[85px]"
                              }  -translate-x-1/2 -translate-y-1/2  w-32 bg-[#FFFFFF] flex  flex-col items-start justify-start rounded-xl `}
                            >
                              <div className="w-full   py-2 flex items-center justify-start pl-5 mt-3  text-[11px] font-[700] text-[#4897E0] gap-3 hover:bg-[#4897E0] hover:bg-opacity-20">
                                <div>
                                  <MdInfoOutline className="h-4 w-4" />
                                </div>
                                <div className="text-[9px] font-[700] leading-[13.54px]">
                                  Details
                                </div>
                              </div>
                              <div className="w-full h-1/2   flex items-center justify-start pl-5 py-2 text-[11px] font-[700] text-[#222C52] gap-3 hover:bg-[#4897E0] hover:bg-opacity-20">
                                <div>
                                  <FaRegEyeSlash className="h-4 w-4" />
                                </div>
                                <div className="text-[9px] font-[700] leading-[13.54px]">
                                  Set Inactive
                                </div>
                              </div>
                              <div className="w-full h-1/2 hover:bg-[#4897E0] hover:bg-opacity-20  flex items-center justify-start pl-5 py-2 text-[11px] font-[700] text-[#222C52] gap-3  mb-3">
                                <div>
                                  <FiTrash className="h-4 w-4" />
                                </div>
                                <div className="text-[9px] font-[700] leading-[13.54px]">
                                  Delete
                                </div>
                              </div>
                            </div>
                            <div className="absolute hidden w-[143px] top-[23px] -left-[100px]  bg-white rounded-xl ">
                              <div className="flex items-center justify-center flex-col">
                                <div className="text-[11px] font-[700] text-[#222C52] px-6 pt-4">
                                  Delete Customer
                                </div>
                                <div className="pt-[5.87px] text-[7px] font-[400] text-[#7B7C7E]">
                                  Do you really want to <br /> delete this
                                  customer
                                </div>
                                <div className="pt-[11.22px] flex items-center justify-between gap-[12.81px] pb-[19.7px]">
                                  <button className="text-[#000000] font-[700] text-[7px] border-2 border-[#707070] px-[12.5px] py-[3px] rounded-sm hover:bg-red-600 hover:text-[#FFF] hover:border-red-600">
                                    Delete
                                  </button>
                                  <button className="text-[#FFFFFF] bg-[#4897E0] hover:bg-[#439FF3] focus:bg-[#3A7BB7] font-[700] text-[7px]  px-[13.5px] py-[4px] rounded-sm">
                                    Cancel
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
                <div>
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
