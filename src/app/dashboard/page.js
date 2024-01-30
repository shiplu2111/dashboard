"use client";
import { useState } from "react";
import LogoutModal from "@/components/modals/LogoutModal";
import CustomerInfo from "@/components/modals/CustomerInfo";
import Authenticate from "@/components/modals/Authenticate";
import Otp from "@/components/modals/Otp";
import ChooseCard from "@/components/modals/ChooseCard";

export default function Dashboard() {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showCustomerInfoModal, setShowCustomerInfoModal] = useState(false);
  const [showAuthenticateModal, setShowuthenticateModal] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [showChooseCardModal, setShowChooseCardModal] = useState(false);

  const handleOnClose = () => {
    setShowLogoutModal(false);
    setShowCustomerInfoModal(false);
    setShowuthenticateModal(false);
    setShowOtpModal(false);
    setShowChooseCardModal(false);
  };
  return (
    <>
      <div className="w-full">
        <div className="flex flex-col items-center justify-start flex-shrink-0  pb-[60px]">
          <div className="px-3 md:px-4 xl:px-8 flex flex-col bg-[#1A244B]">
            <div className="pt-[21px] text-[20px] text-[#FFF] font-[400]">
              Modals
            </div>
          </div>
          <div className="flex items-center justify-between px-3 md:px-4 xl:px-8 pt-5 gap-5">
            <button
              className="text-[#FFF] text-[13px] font-[400] bg-red-500 px-8 py-2 rounded-md"
              onClick={() => setShowLogoutModal(true)}
            >
              Logout Modal
            </button>

            <button
              className="text-[#FFF] text-[13px] font-[400] bg-gray-800 px-8 py-2 rounded-md"
              onClick={() => setShowCustomerInfoModal(true)}
            >
              Customer Info Modal
            </button>

            <button
              className="text-[#FFF] text-[13px] font-[400] bg-gray-800 px-8 py-2 rounded-md"
              onClick={() => setShowuthenticateModal(true)}
            >
              Authenticate Modal
            </button>

            <button
              className="text-[#FFF] text-[13px] font-[400] bg-red-500 px-8 py-2 rounded-md"
              onClick={() => setShowOtpModal(true)}
            >
              OTP Modal
            </button>
            <button
              className="text-[#FFF] text-[13px] font-[400] bg-red-500 px-8 py-2 rounded-md"
              onClick={() => setShowChooseCardModal(true)}
            >
              Choose Card Modal Modal
            </button>

            <LogoutModal onClose={handleOnClose} visible={showLogoutModal} />
            <CustomerInfo
              visible={showCustomerInfoModal}
              onClose={handleOnClose}
            />
            <Authenticate
              visible={showAuthenticateModal}
              onClose={handleOnClose}
            />
            <Otp visible={showOtpModal} onClose={handleOnClose} />
            <ChooseCard visible={showChooseCardModal} onClose={handleOnClose} />
          </div>
        </div>
      </div>
    </>
  );
}
