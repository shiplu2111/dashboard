"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutModal from "@/components/modals/LogoutModal";

import {
  FaHome,
  FaUsers,
  FaClipboardList,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
const NavBottom = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const handleOnClose = () => {
    setShowLogoutModal(false);
  };
  const pathname = usePathname();

  return (
    <>
      <LogoutModal onClose={handleOnClose} visible={showLogoutModal} />

      <div className="w-full fixed bottom-0 bg-[#101D35] left-0 px-2">
        <div className="px-3 w-full flex items-center justify-between py-4">
          <Link
            href="/dashboard/customers"
            className="flex flex-col items-center justify-start gap-1 w-full"
          >
            <div
              className={` ${
                pathname === "/dashboard/customers"
                  ? " bg-[#2A3665] p-3 "
                  : " bg-transparent  "
              }rounded-full `}
            >
              <FaUsers className="h-6 w-6 text-[#c0bcbc]" />
            </div>
          </Link>
          <Link
            href="/dashboard/transactions"
            className="flex flex-col items-center justify-start gap-1  w-full"
          >
            <div
              className={` ${
                pathname === "/dashboard/transactions"
                  ? " bg-[#2A3665] p-3 "
                  : " bg-transparent  "
              }rounded-full `}
            >
              <FaClipboardList className="h-6 w-6 text-[#c0bcbc]" />
            </div>
          </Link>
          <Link
            href="/dashboard"
            className="flex flex-col items-center justify-start gap-1  w-full"
          >
            <div
              className={` ${
                pathname === "/dashboard"
                  ? " bg-[#2A3665] p-3 "
                  : " bg-transparent  "
              }rounded-full `}
            >
              <FaHome className="h-6 w-6 text-[#c0bcbc]" />
            </div>
            {/* <div
              className={` ${
                pathname === "/dashboard" ? " hidden " : ""
              }text-[#c0bcbc] text-[10px] `}
            >
              Home
            </div> */}
          </Link>
          <Link
            href="/dashboard/settings"
            className="flex flex-col items-center justify-center gap-1  w-full"
          >
            <div
              className={` ${
                pathname === "/dashboard/settings"
                  ? " bg-[#2A3665] p-3 "
                  : " bg-transparent  "
              }rounded-full `}
            >
              <FaCog className="h-6 w-6 text-[#c0bcbc]" />
            </div>
          </Link>
          <div className="flex flex-col items-center justify-start gap-1  w-full">
            <div
              className="rounded-full bg-transparent cursor-pointer hover:bg-[#2A3665] hover:p-3  "
              onClick={() => setShowLogoutModal(true)}
            >
              <FaSignOutAlt className="h-6 w-6 text-[#c0bcbc]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBottom;
