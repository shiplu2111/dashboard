import Header from "@/components/common/Header";
import Sidebar from "@/components/common/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <section className="bg-[#1A244B] flex flex-col w-screen overflow-hidden">
      <Header />
      <div className="w-full flex items-center justify-start">
        <div>
          <Sidebar />
        </div>
        <div> {children}</div>
      </div>
    </section>
  );
}
