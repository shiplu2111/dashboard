import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center bg-[#3576ee] py-2">
        For Any Query Contact: Email: shiplu2111@gmail.com | Whatsapp:
        +8801711-002919
      </div>
      <div className="flex items-center justify-center md:justify-start gap-[60px] py-[20px] bg-[#101D35]  border-b-[2px] border-[#242A44]">
        <Link
          href="/dashboard"
          className="cursor-pointer hidden md:flex items-center justify-center pl-[43px]"
        >
          <img src="/logo.svg" alt="" />
        </Link>
        <div className="text-[#AAA] text-[18px] font-[400]  flex items-center justify-center">
          CUSTOMER TRANSACTION SERVICE
        </div>
      </div>
    </>
  );
};

export default Header;
