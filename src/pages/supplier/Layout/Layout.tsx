import { Outlet } from "react-router-dom";
import Topbar from "./Topbar/Topbar";
import { useToggle } from "@/hooks/hooks";
import Sidebar from "./Sidebar/Sidebar";
import ScrollToTop from "@/components/common/ScrollToTop";
import "./Layout.css";

function SupplierLayout() {
  const { isOpen, open, close } = useToggle();

  return (
    <>
      <Topbar open={open} />
      <Sidebar close={close} isOpen={isOpen} />
      <main className="bg-white  min-h-screen pt-28 pb-10 app-container">
        <div className="outlet-container ml-auto">
          <Outlet />
        </div>
      </main>
      <ScrollToTop />
    </>
  );
}

export default SupplierLayout;
