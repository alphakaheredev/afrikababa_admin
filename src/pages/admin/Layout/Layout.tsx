import { Outlet, useLocation } from "react-router-dom";
import Topbar from "./Topbar/Topbar";
import { useToggle } from "@/hooks/hooks";
import Sidebar from "./Sidebar/Sidebar";

function AdminLayout() {
  const { pathname } = useLocation();
  const { isOpen, open, close } = useToggle();

  return (
    <>
      <Topbar open={open} />
      {pathname === "/" && <Sidebar close={close} isOpen={isOpen} />}
      <main className="bg-[#F8FAFB]  min-h-screen pt-24 pb-10 app-container">
        <div className="flex justify-end w-full">
          <div className="outlet-container">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
}

export default AdminLayout;
