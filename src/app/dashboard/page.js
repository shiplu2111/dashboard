import CustomerPageCards from "@/components/cards/CustomerPageCards";
import TransectionPageCards from "@/components/cards/TransectionPageCards";
import Buttons from "@/components/Buttons";
import Chart from "@/components/Chart";
import AllModals from "@/components/AllModals";
export default function Dashboard() {
  return (
    <>
      <div className="w-full">
        <div className="flex flex-col   pb-[60px]">
          <div className="px-3 md:px-4 xl:px-8 flex flex-col">
            <div className="pt-5">
              <CustomerPageCards />
            </div>
            <div className="pt-5">
              <TransectionPageCards />
            </div>
            <div className="pt-5">
              <AllModals />
            </div>
            <div className="pt-5">
              <Chart />
            </div>
            <div className="pt-5">
              <Buttons />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
