"use client";
import { useState } from "react";
import AccountDelete from "@/components/settings/AccountDelete";
import ApiCode from "@/components/settings/ApiCode";
import PasswordChange from "@/components/settings/PasswordChange";
import PersonalInfo from "@/components/settings/PersonalInfo";
export default function Settings() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <>
      <div className="w-full grid grid-cols-1 xl:grid-cols-5">
        <div className="flex flex-col items-center xl:items-start justify-center xl:justify-start  xl:h-screen w-full bg-[#1A244B]  ">
          <div className="px-[33px] pt-4 lg:pt-[27px] text-[20px] font-[400] text-[#FFF]">
            SETTINGS
          </div>
          <div className="grid grid-cols-2 items-center justify-center text-center xl:text-left xl:flex xl:flex-col  pt-6 lg:pt-[49px] w-full">
            <div
              onClick={() => setActiveTab(1)}
              className={` ${
                activeTab === 1
                  ? "bg-[#0062FF]  bg-opacity-[.05] text-[#0062FF] border-b-[4px] xl:border-b-0 border-[#0062FF] xl:border-l-[4px]   rounded-l-sm"
                  : "text-[#FFFFFF] xl:border-l-[4px] border-transparent border-b-[4px] xl:border-b-0"
              } py-[23px] text-[15px] font-[400] xl:pl-7 w-full hover:bg-[#295397]  cursor-pointer hover:text-[#FFFFFF]`}
            >
              Personal Information
            </div>
            <div
              onClick={() => setActiveTab(2)}
              className={` ${
                activeTab === 2
                  ? "bg-[#0062FF]  bg-opacity-[.05] text-[#0062FF] border-b-[4px] xl:border-b-0 border-[#0062FF] xl:border-l-[4px]   rounded-l-sm"
                  : "text-[#FFFFFF]  xl:border-l-[4px] border-transparent border-b-[4px]  xl:border-b-0"
              } py-[23px] text-[15px] font-[400] xl:pl-7 w-full hover:bg-[#295397]  cursor-pointer hover:text-[#FFFFFF]`}
            >
              Change Password
            </div>

            <div
              onClick={() => setActiveTab(3)}
              className={` ${
                activeTab === 3
                  ? "bg-[#0062FF]  bg-opacity-[.05] text-[#0062FF] border-b-[4px] xl:border-b-0 border-[#0062FF] xl:border-l-[4px]   rounded-l-sm"
                  : "text-[#FFFFFF]  xl:border-l-[4px] border-transparent border-b-[4px]  xl:border-b-0"
              } py-[23px] text-[15px] font-[400] xl:pl-7 w-full hover:bg-[#295397]  cursor-pointer hover:text-[#FFFFFF]`}
            >
              API CODE
            </div>
            <div
              onClick={() => setActiveTab(4)}
              className={` ${
                activeTab === 4
                  ? "bg-[#0062FF]  bg-opacity-[.05] text-[#0062FF] border-b-[4px] xl:border-b-0 border-[#0062FF] xl:border-l-[4px]   rounded-l-sm"
                  : "text-[#FFFFFF]  xl:border-l-[4px] border-transparent border-b-[4px]  xl:border-b-0"
              } py-[23px] text-[15px] font-[400] xl:pl-7 w-full hover:bg-[#295397]  cursor-pointer hover:text-[#FFFFFF]`}
            >
              Delete Account
            </div>
          </div>
        </div>
        <div className="col-span-4 bg-[#222C52] w-full h-auto min-h-screen pb-11 px-4 md:px-8  xl:px-11">
          {activeTab === 1 ? (
            <PersonalInfo />
          ) : activeTab === 2 ? (
            <PasswordChange />
          ) : activeTab === 3 ? (
            <ApiCode />
          ) : (
            activeTab === 4 && <AccountDelete />
          )}
        </div>
      </div>
    </>
  );
}
