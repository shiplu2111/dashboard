import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-start gap-[60px] py-[20px] bg-primary pl-[43px] border-b-[2px] border-[#242A44]">
        <div className="cursor-pointer flex items-center justify-center">
          <img src="/logo.svg" alt="" />
        </div>
        <div className="text-[#AAA] text-[18px] font-[400]  flex items-center justify-center">
          CUSTOMER TRANSACTION SERVICE
        </div>
      </div>
    </>
  );
};

export default Header;
