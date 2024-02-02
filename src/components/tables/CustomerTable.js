"use client";
import { useState } from "react";
import { MdInfoOutline } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";
import CustomerData from "/src/data/Customer.json";
const CustomerTable = () => {
  const [data, setData] = useState(CustomerData.customer);

  const [openAction, setOpenAction] = useState(false);
  const [openDeleteBar, setOpenDeleteBar] = useState(false);
  const [activeRaw, setActiveRaw] = useState(null);
  const handleRemoveItem = (itemId) => {
    const updatedData = data.filter((customer) => customer.id !== itemId);
    setData(updatedData);
    setOpenDeleteBar(false);
    setOpenAction(false);
  };

  const setClickAction = (index) => {
    setOpenDeleteBar(false);

    setOpenAction(!openAction);
    setActiveRaw(index);
  };
  const setClickDelete = (index) => {
    setOpenAction(false);
    setOpenDeleteBar(!openDeleteBar);
    setActiveRaw(index);
  };
  return (
    <>
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
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
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
                  <button className="py-[5px] px-[25px] bg-[#476989] text-[#04DF94] text-[11px] font-[700] rounded-xl uppercase cursor-auto  shadow-2xl shadow-gray-900">
                    Live
                  </button>
                )}
                {customer.status == 2 && (
                  <button className="py-[3px] px-[30px] bg-[#5C2947] bg-opacity-[57%] text-[#04DF94] text-[11px] font-[400] rounded-xl uppercase cursor-auto  shadow-2xl shadow-gray-900">
                    DEAD
                  </button>
                )}

                {customer.status == 3 && (
                  <button className="py-[3px] px-[11px] bg-[#FFCD05] bg-opacity-[0.71] text-[#FFEFC3] text-[11px] font-[400] rounded-xl uppercase  shadow-2xl shadow-gray-900">
                    NEEDS ATTENTION
                  </button>
                )}

                {customer.status == 4 && (
                  <button className="py-[5px] px-[25px] bg-[#476989] text-[#04DF94]  text-[11px] font-[400] rounded-xl uppercase cursor-auto  shadow-2xl shadow-gray-900">
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
                <button className="py-[8px] px-[11px] bg-[#4897E0] text-[#FFFFFF] text-[11px] font-[700] rounded-md hover:bg-[#121F38] focus:bg-[#3A7BB7]  shadow-2xl shadow-gray-900">
                  Send Transfer
                </button>
              </td>
              <td className="flex items-center px-6 py-4 ">
                <div className=" text-[#FFFFFF] font-[700] dark:text-blue-500 cursor-pointer relative">
                  <span onClick={() => setClickAction(index)}>...</span>
                  <div
                    className={`${
                      openAction === true && index === activeRaw ? "" : "hidden"
                    } absolute  w-[143px] ${
                      data.length - index >= 3 ? "top-[25px] " : "top-[-115px] "
                    } -left-[115px]   bg-white rounded-xl z-10`}
                  >
                    <div className="relative ">
                      <div
                        className={`${
                          data.length - index >= 3
                            ? "top-[-4px] "
                            : "top-[108px] "
                        } rotate-45 h-4 w-4 bg-[#FFF] absolute   right-3`}
                      ></div>
                    </div>
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
                    <div
                      onClick={() => setClickDelete(index)}
                      className="w-full h-1/2 hover:bg-[#4897E0] hover:bg-opacity-20  flex items-center justify-start pl-5 py-2 text-[11px] font-[700] text-[#222C52] gap-3  mb-3"
                    >
                      <div>
                        <FiTrash className="h-4 w-4" />
                      </div>
                      <div className="text-[9px] font-[700] leading-[13.54px] ">
                        Delete
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${
                      openDeleteBar === true && index === activeRaw
                        ? ""
                        : "hidden"
                    } absolute  w-[143px] ${
                      data.length - index >= 3 ? "top-[25px] " : "top-[-108px] "
                    } -left-[100px]  bg-white rounded-xl z-10`}
                  >
                    <div className="flex items-center justify-center flex-col">
                      <div className="text-[11px] font-[700] text-[#222C52] px-6 pt-4">
                        Delete Customer
                      </div>
                      <div className="pt-[5.87px] text-[7px] font-[400] text-[#7B7C7E]">
                        Do you really want to <br /> delete this customer
                      </div>
                      <div className="pt-[11.22px] flex items-center justify-between gap-[12.81px] pb-[19.7px]">
                        <button
                          onClick={() => handleRemoveItem(customer.id)}
                          className="text-[#000000] font-[700] text-[7px] border-2 border-[#707070] px-[12.5px] py-[3px] rounded-sm hover:bg-red-600 hover:text-[#FFF] hover:border-red-600  shadow-2xl shadow-gray-900"
                        >
                          Delete
                        </button>
                        <button
                          className="text-[#FFFFFF] bg-[#4897E0] hover:bg-[#439FF3] focus:bg-[#3A7BB7] font-[700] text-[7px]  px-[13.5px] py-[4px] rounded-sm  shadow-2xl shadow-gray-900"
                          onClick={() => setClickDelete(false)}
                        >
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
    </>
  );
};

export default CustomerTable;
