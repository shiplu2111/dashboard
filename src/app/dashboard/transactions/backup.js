"use client";
import { useState } from "react";
import { Inter } from "next/font/google";
import { IoIosSearch } from "react-icons/io";
import TransactionData from "/src/data/Transactions.json";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
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
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 pt-8  py-[35px]">
              <div className="flex items-center justify-between bg-[#0B70B4] rounded-lg  px-[45.5px]">
                <div className="flex items-center justify-start py-[24.5px]  gap-[15.8px]">
                  <div className="px-3 py-3 bg-[#40D6FC] rounded-lg  border-2 border-[#707070]">
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

              <div className="flex items-center justify-between bg-[#0B70B4] rounded-lg  px-[45.5px]">
                <div className="flex items-center justify-start py-[24.5px]  gap-[15.8px]">
                  <div className="px-3 py-3 bg-[#20A943] border-2 border-[#707070] rounded-lg">
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
                    <table className="w-full h-full overflow-y-scroll ">
                      <thead className="text-[11px] font-[400] text-[#FFF] uppercase bg-[#131625]  border-2 border-[#101D35]  ">
                        <tr className="text-center">
                          <th scope="col" className="pl-4 pr-0 py-5">
                            <div className="flex items-center">
                              <input
                                id="checkbox-all-search"
                                type="checkbox"
                                className="peer cursor-pointer appearance-none  relative h-4 w-4 bg-gray-900/25 dark:bg-gray-100/25 border-2 border-[#7D7D7D]  transition-all checked:appearance-auto rounded-[5px] checked:rounded-full"
                              />
                            </div>
                          </th>
                          <th
                            scope="col"
                            className="pr-1 py-3 font-[400] text-[11px]"
                          >
                            ID NUMBER
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3  font-[400]  text-[11px]"
                          >
                            USERNAME
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3  font-[400]  text-[11px]"
                          >
                            TRANSACTION DATE
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3  font-[400]  text-[11px]"
                          >
                            SOURCE ACCOUNT
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3  font-[400]  text-[11px]"
                          >
                            RECIPIENT NUMBER
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3  font-[400]  text-[11px]"
                          >
                            RECIPIENT BANK
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3  font-[400]  text-[11px]"
                          >
                            STATUS
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3  font-[400]  text-[11px]"
                          >
                            AMOUNT
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((transaction, index) => (
                          <tr
                            key={index}
                            className="bg-[#2D355C]  border-[2.5px]  border-[#101D35]   hover:bg-[#2f3763]   py-[22px] text-center "
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
                              className="px-1 py-5 text-[11px] font-[400] text-[#FFF]"
                            >
                              3254789456781
                            </td>
                            <td className="px-6 py-5 text-[11px] font-[700] text-[#FFF]">
                              John Efren Borican
                            </td>
                            <td className="px-6 py-5  text-[11px] font-[400] text-[#FFF]">
                              17 Jan 2024
                            </td>
                            <td className="px-6 py-5  text-[11px] font-[400] text-[#FFF] ">
                              235gfhtyrhjeik236...
                            </td>
                            <td className="px-6 py-4  text-[11px] font-[400] text-[#FFF]">
                              235gfhtyrhjeik236...
                            </td>
                            <td className="px-6 py-4  text-[11px] font-[400] text-[#FFF]">
                              American Bank
                            </td>
                            <td className="px-6 py-4  text-[11px] font-[400] text-[#FFF]">
                              {transaction.status == 1 && (
                                <div className="flex items-center justify-center gap-[5px]">
                                  <div className="p-[2px] bg-[#08B576] bg-opacity-[0.34] rounded-full">
                                    <img src="/Ellipse3.svg" alt="" />
                                  </div>
                                  <div className="text-[11px] font-[400] text-[#16D594]">
                                    Live
                                  </div>
                                </div>
                              )}

                              {transaction.status == 2 && (
                                <div className="flex items-center justify-center gap-[5px]">
                                  {" "}
                                  <div className="p-[2px] bg-[#FF8000] bg-opacity-[0.34] rounded-full">
                                    <img src="/Ellipse2.svg" alt="" />
                                  </div>
                                  <div className="text-[11px] font-[400] text-[#FF8000]">
                                    NEEDS ATTENTION
                                  </div>{" "}
                                </div>
                              )}
                              {transaction.status == 3 && (
                                <div className="flex items-center justify-center gap-[5px]">
                                  <div className="p-[2px] bg-[#B50808] bg-opacity-[0.34] rounded-full">
                                    <img src="/Ellipse1.svg" alt="" />
                                  </div>
                                  <div className="text-[11px] font-[400] text-[#FF0000]">
                                    DEAD
                                  </div>
                                </div>
                              )}
                            </td>
                            <td className=" text-center px-6 py-4 text-[13px] font-[700] text-[#FFF]  tracking-[0.3px]">
                              $30,568.05
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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
