import Header from "@/components/common/Header";
import NavBottom from "@/components/common/NavBottom";
import Sidebar from "@/components/common/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <section className="bg-[#1A244B] flex flex-col w-full overflow-hidden">
      <Header />

      <div className="w-full flex ">
        <div className="w-[110px] hidden md:block">
          <Sidebar />
        </div>
        <div className="w-full block pb-8 md:pb-0">
          {children}
          <div className="md:hidden">
            <NavBottom />
          </div>
        </div>
      </div>
    </section>
  );
}
