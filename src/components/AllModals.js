"use client";
import { useState } from "react";
import LogoutModal from "@/components/modals/LogoutModal";
import CustomerInfo from "@/components/modals/CustomerInfo";
import Authenticate from "@/components/modals/Authenticate";
import Otp from "@/components/modals/Otp";
import ChooseCard from "@/components/modals/ChooseCard";
import OtpGenerator from "@/components/modals/OtpGenerator";
import SuccessfulTransfer from "@/components/modals/SuccessfulTransfer";
import SendTransfer from "@/components/modals/SendTransfer";
import SendTransferOtherBank from "@/components/modals/SendTransferOtherBank";
import ChooseWallet from "@/components/modals/ChooseWallet";
const AllModals = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showCustomerInfoModal, setShowCustomerInfoModal] = useState(false);
  const [showAuthenticateModal, setShowuthenticateModal] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [showChooseCardModal, setShowChooseCardModal] = useState(false);
  const [showOtpGeneratorModal, setShowOtpGeneratorModal] = useState(false);
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [showSendTransferModal, setShowSendTransferModal] = useState(false);
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [showSendTransferOtherBankModal, setShowSendTransferOtherBankModal] =
    useState(false);
  const handleOnClose = () => {
    setShowLogoutModal(false);
    setShowCustomerInfoModal(false);
    setShowuthenticateModal(false);
    setShowOtpModal(false);
    setShowChooseCardModal(false);
    setShowOtpGeneratorModal(false);
    setShowTransferModal(false);
    setShowSendTransferModal(false);
    setShowSendTransferOtherBankModal(false);
    setShowWalletModal(false);
  };
  return (
    <div>
      <div className="px-3 md:px-4 xl:px-8 flex flex-col bg-[#1A244B]">
        <div className="pt-[21px] text-[20px] text-[#FFF] font-[400] flex items-center justify-center">
          Modals
        </div>
      </div>
      <div className="grid grid-cols-5  items-center justify-between px-3 md:px-4 xl:px-8 pt-5 gap-5 ">
        <button
          className="inline-block rounded bg-[#0883CF] px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
          onClick={() => setShowLogoutModal(true)}
        >
          Logout Modal
        </button>

        <button
          className="inline-block rounded bg-[#0883CF] px-8 py-3 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500"
          onClick={() => setShowCustomerInfoModal(true)}
        >
          Customer Info Modal
        </button>

        <button
          className="inline-block rounded bg-[#0883CF] px-8 py-3 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500"
          onClick={() => setShowuthenticateModal(true)}
        >
          Authenticate Modal
        </button>

        <button
          className="inline-block rounded bg-[#0883CF] px-8 py-3 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500"
          onClick={() => setShowOtpModal(true)}
        >
          OTP Modal
        </button>
        <button
          className="inline-block rounded bg-[#0883CF] px-8 py-3 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500"
          onClick={() => setShowChooseCardModal(true)}
        >
          Choose Card Modal
        </button>
        <button
          className="inline-block rounded bg-[#0883CF] px-8 py-3 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500"
          onClick={() => setShowOtpGeneratorModal(true)}
        >
          Otp Generator Modal
        </button>

        <button
          className="inline-block rounded bg-[#0883CF] px-8 py-3 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500"
          onClick={() => setShowTransferModal(true)}
        >
          Transfer Success Modal
        </button>
        <button
          className="inline-block rounded bg-[#0883CF] px-8 py-3 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500"
          onClick={() => setShowSendTransferModal(true)}
        >
          Send Transfer To Own Bank Modal
        </button>

        <button
          className="inline-block rounded bg-[#0883CF] px-8 py-3 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500"
          onClick={() => setShowWalletModal(true)}
        >
          Choose REZULT Wallet
        </button>

        <button
          className="inline-block rounded bg-[#0883CF] px-8 py-3 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500"
          onClick={() => setShowSendTransferOtherBankModal(true)}
        >
          Send Transfer To Other Bank Modal
        </button>

        <LogoutModal onClose={handleOnClose} visible={showLogoutModal} />
        <CustomerInfo visible={showCustomerInfoModal} onClose={handleOnClose} />
        <Authenticate visible={showAuthenticateModal} onClose={handleOnClose} />
        <Otp visible={showOtpModal} onClose={handleOnClose} />
        <ChooseCard visible={showChooseCardModal} onClose={handleOnClose} />
        <OtpGenerator visible={showOtpGeneratorModal} onClose={handleOnClose} />
        <SuccessfulTransfer
          visible={showTransferModal}
          onClose={handleOnClose}
        />
        <SendTransfer visible={showSendTransferModal} onClose={handleOnClose} />
        <ChooseWallet visible={showWalletModal} onClose={handleOnClose} />
        <SendTransferOtherBank
          visible={showSendTransferOtherBankModal}
          onClose={handleOnClose}
        />
      </div>
    </div>
  );
};

export default AllModals;
