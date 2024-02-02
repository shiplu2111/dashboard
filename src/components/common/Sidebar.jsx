"use client";
import { useState } from "react";
import { FaUsers } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineLogout } from "react-icons/md";
import LogoutModal from "@/components/modals/LogoutModal";

const Sidebar = () => {
  const pathname = usePathname();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const handleOnClose = () => {
    setShowLogoutModal(false);
  };
  return (
    <>
      <LogoutModal onClose={handleOnClose} visible={showLogoutModal} />
      <div className="bg-[#101D35] h-full min-h-[100vh] w-[110px] relative">
        <div className="flex items-center justify-center flex-col gap-1 ">
          <Link
            href="/dashboard/customers"
            className={` ${
              pathname === "/dashboard/customers"
                ? "border-l-[5px] border-[#0058FF]  bg-[#192754] text-[#2196F3]"
                : "text-[#FFF]"
            } flex flex-col items-center justify-center mt-[47.33px] py-4  w-full cursor-pointer`}
          >
            <div>
              <FaUsers className="h-6 w-6 " />
              {/* <img
                src="/customer.svg"
                className="h-6 w-6 object-cover"
                alt=""
              /> */}
            </div>
            <div className="pt-[5.475px]  text-[12px] font-[500] ">
              CUSTOMERS
            </div>
          </Link>
          <Link
            href="/dashboard/transactions"
            className={` ${
              pathname === "/dashboard/transactions"
                ? "border-l-[5px] border-[#0058FF]  bg-[#192754] text-[#2196F3]"
                : "text-[#FFF]"
            } flex flex-col items-center justify-center mt-[5.33px] py-4  w-full cursor-pointer`}
          >
            <div>
              <img src="/tran.svg" alt="" />
            </div>
            <div className="pt-[5.475px] text-[#FFF] text-[12px] font-[400] ">
              TRANSACTIONS
            </div>
          </Link>
          <Link
            href="/dashboard/settings"
            className={` ${
              pathname === "/dashboard/settings"
                ? "border-l-[5px] border-[#0058FF]  bg-[#192754] text-[#2196F3]"
                : "text-[#FFF]"
            } flex flex-col items-center justify-center mt-[5.33px] py-4  w-full cursor-pointer`}
          >
            <div>
              <img src="/settings.svg" alt="" />
            </div>
            <div className="pt-[5.475px] text-[#FFF] text-[12px] font-[400] ">
              SETTINGS
            </div>
          </Link>
          <div
            className="absolute bottom-[50px] flex flex-col items-center justify-center mt-[5.33px] py-4  w-full  cursor-pointer"
            onClick={() => setShowLogoutModal(true)}
          >
            <div>
              <MdOutlineLogout className="h-6 w-6 text-[#FFF] " />
            </div>
            <div className="pt-[5.475px] text-[#FFF] text-[12px] font-[400] ">
              LOGOUT
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
