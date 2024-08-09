import { cn } from "@/lib/utils";
import { routes } from "./supplierRoutes";
import { NavLink } from "react-router-dom";
// import el from "../../../../assets/images/admin/ellipse.png";

const SidebarMenu = () => {
  return (
    <ul>
      {routes.map((section, index) => (
        <li key={index} className="mb-4">
          <h5 className="text-[#8E8E8D] px-4 py-2 font-medium uppercase text-sm">
            {section.category}
          </h5>
          {section.items.map((item, idx) => (
            <NavLink
              key={idx}
              to={`/fournisseur/${item.path}`}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-4 px-4 py-2 font-medium text-sm text-gray-200 hover:text-opacity-90  relative",
                  isActive
                    ? "text-[#F79E1B] border-l-4 border-[#F79E1B]"
                    : "border-none"
                )
              }
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
        </li>
      ))}
    </ul>
  );
};

export default SidebarMenu;
