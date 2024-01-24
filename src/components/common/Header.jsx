import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-start gap-[60px] py-[20px] bg-primary  border-b-[2px] border-[#242A44]">
        <Link
          href="/dashboard"
          className="cursor-pointer flex items-center justify-center pl-[43px]"
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
