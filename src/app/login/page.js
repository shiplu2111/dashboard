import LoginForm from "@/components/forms/LoginForm";

const Login = () => {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col items-center justify-center bg-[#101D35]">
        <div className="flex items-center justify-center flex-col">
          <div className="text-[#FFF] text-[29px] font-[700] ">Login</div>
          <div className="text-[#FFF] pt-3 text-[14px] font-[400]">
            Welcome to Customers Transaction Service
          </div>
          <div className="text-[#FFF] pt-1 text-[12px] font-[400]">
            For Any Query Contact: Email: shiplu2111@gmail.com | Whatsapp:
            +8801711-002919
          </div>
          <div className="pt-[20px] w-full md:w-[456.625px] h-[1px] flex-shrink-0 stroke-1 stroke-[#707070] opacity-[0.55]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="1"
              viewBox="0 0 458 1"
              fill="none"
            >
              <path
                opacity="0.55"
                d="M0.689941 0.5H457.315"
                stroke="#707070"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
