import logo from "@/assets/images/favicon.png";
import { Link } from "react-router-dom";
import useGetWindowDimensions from "@/hooks/useGetWindowDimensions";
import NavigationMenu from "./NavigationMenu";
import { IoMdClose } from "react-icons/io";

const Sidebar = ({ isOpen, close }: { isOpen: boolean; close: () => void }) => {
  const { width } = useGetWindowDimensions();

  return (
    <>
      {width >= 1024 && <DesktopSidebar />}
      {width < 1024 && isOpen && <MobileSidebar close={close} />}
    </>
  );
};

const DesktopSidebar = () => {
  return (
    <nav className="fixed left-0 top-0 bg-dark w-[136px] py-4 h-screen overflow-hidden overflow-y-scroll z-20">
      <Link to="/" className="flex justify-center mb-10">
        <img src={logo} alt="logo" className="w-20 object-contain" />
      </Link>
      <NavigationMenu />
    </nav>
  );
};

export const MobileSidebar = ({ close }: { close: () => void }) => {
  return (
    <nav className="fixed inset-0 bg-dark bg-opacity-50 z-50 transition-all ease-out duration-200 overflow-y-auto">
      <div className="bg-dark w-[250px] h-full shadow-lg overflow-hidden px-4 py-5 transition-all ease-out duration-300">
        <div className="flex items-start justify-between mb-10">
          <img src={logo} alt="logo" className="w-20 object-contain" />
          <button className="text-white pt-3" onClick={close}>
            <IoMdClose fontSize={30} />
          </button>
        </div>
        <NavigationMenu />
      </div>
    </nav>
  );
};

export default Sidebar;
