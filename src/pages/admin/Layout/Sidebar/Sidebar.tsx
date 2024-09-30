import useGetWindowDimensions from "@/hooks/useGetWindowDimensions";
import { IoMdClose } from "react-icons/io";
import SidebarMenu from "./SidebarMenu";

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
    <nav className="fixed left-0 top-0 bg-dark w-[200px] py-4 h-screen overflow-hidden overflow-y-scroll z-20">
      <SidebarMenu />
    </nav>
  );
};

export const MobileSidebar = ({ close }: { close: () => void }) => {
  return (
		<nav className="fixed inset-0 bg-dark bg-opacity-50 z-50 transition-all ease-out duration-200 overflow-y-auto">
			<div className="bg-dark w-[250px] h-full overflow-y-auto shadow-lg px-4 py-5 transition-all ease-out duration-300">
				<div className="flex items-start justify-between mb-10">
					<button
						className="text-white pt-3"
						onClick={close}
					>
						<IoMdClose fontSize={30} />
					</button>
				</div>
				<SidebarMenu close={close} />
			</div>
		</nav>
  );
};

export default Sidebar;
