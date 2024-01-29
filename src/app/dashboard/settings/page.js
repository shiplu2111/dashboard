import AccountDelete from "@/components/settings/AccountDelete";
import ApiCode from "@/components/settings/ApiCode";
import PasswordChange from "@/components/settings/PasswordChange";
import PersonalInfo from "@/components/settings/PersonalInfo";
import Image from "next/image";

export default function Settings() {
  return (
    <>
      <div className="w-full grid grid-cols-1 xl:grid-cols-5">
        <div className="flex flex-col items-center xl:items-start justify-center xl:justify-start  xl:h-screen w-full bg-[#1A244B]  ">
          <div className="px-[33px] pt-4 lg:pt-[27px] text-[20px] font-[400] text-[#FFF]">
            SETTINGS
          </div>
          <div className="grid grid-cols-2 xl:flex xl:flex-col items-center lg:items-start justify-center lg:justify-start pt-6 lg:pt-[49px] w-full">
            <div className="flex items-center justify-center xl:items-start xl:justify-start py-[23px] bg-[#0062FF]  bg-opacity-[.05] text-[#0062FF] border-b-[4px] xl:border-b-0 border-[#0062FF] xl:border-l-[4px]   rounded-l-sm text-[15px] font-[400] xl:pl-7 w-full hover:bg-[#295397] hover:text-[#FFFFFF] cursor-pointer">
              Personal Information
            </div>
            <div className="py-[23px] text-[#FFFFFF] text-[15px] font-[400] pl-7 w-full hover:bg-[#295397]  cursor-pointer">
              Change Password
            </div>
            <div className="py-[23px] text-[#FFFFFF] text-[15px] font-[400] pl-7 w-full hover:bg-[#295397]  cursor-pointer">
              API CODE
            </div>
            <div className="py-[23px] text-[#FFFFFF] text-[15px] font-[400] pl-7 w-full hover:bg-[#295397]  cursor-pointer">
              Delete Account
            </div>
          </div>
        </div>
        <div className="col-span-4 bg-[#222C52] w-full h-auto min-h-screen pb-11 px-4 md:px-8  xl:px-11">
          <PersonalInfo />
          <PasswordChange />
          <ApiCode />
          <AccountDelete />
        </div>
      </div>
    </>
  );
}
