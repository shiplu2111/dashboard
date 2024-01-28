import Header from "@/components/common/Header";
import Sidebar from "@/components/common/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <section className="bg-[#1A244B] flex flex-col w-full overflow-hidden">
      <Header />
      <div className="w-full flex ">
        <div className="w-[110px] hidden">
          <Sidebar />
        </div>
        <div className="w-full block"> {children}</div>
      </div>
    </section>
  );
}
