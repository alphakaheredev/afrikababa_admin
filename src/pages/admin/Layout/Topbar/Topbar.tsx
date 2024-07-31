import { NavLink } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaChevronDown } from "react-icons/fa";
import useScrollPosition from "@/hooks/useScrollPosition";
import { IconBurger } from "@/components/common/Icons";

const dropdownRoutes = [
  {
    path: "fabricants",
    label: "Fabricants",
  },
  {
    path: "termes-et-condition",
    label: "Termes et conditions",
  },
  {
    path: "politique-de-remboursement-des-clients",
    label: "Politique de remboursement des clients",
  },
  {
    path: "politique-de-remboursement-du-fournisseur",
    label: "Politique de remboursement du fournisseur",
  },
];

const Topbar = ({ open }: { open: () => void }) => {
  const scrollPosition = useScrollPosition();

  return (
    <div
      className={`fixed top-0 right-0 w-full py-4 px-5 z-10 transition-all ease-out duration-200 ${
        scrollPosition > 25 ? "bg-white" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between space-x-6">
        <button onClick={open}>
          <IconBurger />
        </button>
        <ul className="flex justify-center lg:justify-end items-center gap-8">
          <li>
            <NavLink to="/commerces" className="text-dark font-medium text-sm">
              Commerces
            </NavLink>
          </li>
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-dark font-medium text-sm space-x-1">
                <span>Pages</span> <FaChevronDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="top-14 max-w-10 rounded-none">
                {dropdownRoutes.map((route) => (
                  <DropdownMenuItem key={route.path}>
                    <NavLink to={route.path}>{route.label}</NavLink>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="bg-th-primary border-1 -th-primary px-5 py-2 text-white font-medium text-sm"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Topbar;
