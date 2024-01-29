import React from "react";

const TransactionTable = ({ data }) => {
  return (
    <>
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
            <th scope="col" className="pr-1 py-3 font-[400] text-[11px]">
              ID NUMBER
            </th>
            <th scope="col" className="px-6 py-3  font-[400]  text-[11px]">
              USERNAME
            </th>
            <th scope="col" className="px-6 py-3  font-[400]  text-[11px]">
              TRANSACTION DATE
            </th>
            <th scope="col" className="px-6 py-3  font-[400]  text-[11px]">
              SOURCE ACCOUNT
            </th>
            <th scope="col" className="px-6 py-3  font-[400]  text-[11px]">
              RECIPIENT NUMBER
            </th>
            <th scope="col" className="px-6 py-3  font-[400]  text-[11px]">
              RECIPIENT BANK
            </th>
            <th
              scope="col"
              className="px-6 py-3  font-[400]  text-[11px] text-start"
            >
              STATUS
            </th>
            <th scope="col" className="px-6 py-3  font-[400]  text-[11px]">
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
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
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
              <td className="px-6 py-4  text-[11px] font-[400] text-[#FFF] text-start">
                {transaction.status == 1 && (
                  <div className="flex items-center justify-start gap-[5px]">
                    <div className="p-[2px] bg-[#08B576] bg-opacity-[0.34] rounded-full">
                      <img src="/Ellipse3.svg" alt="" />
                    </div>
                    <div className="text-[11px] font-[400] text-[#16D594]">
                      Live
                    </div>
                  </div>
                )}

                {transaction.status == 2 && (
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-start gap-[5px]">
                    <div className="p-[2px] bg-[#FF8000] bg-opacity-[0.34] rounded-full">
                      <img src="/Ellipse2.svg" alt="" />
                    </div>
                    <div className="text-[11px] font-[400] text-[#FF8000]">
                      NEEDS ATTENTION
                    </div>{" "}
                  </div>
                )}
                {transaction.status == 3 && (
                  <div className="flex  items-center justify-start gap-[5px]">
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
    </>
  );
};

export default TransactionTable;
