import { cn } from "@/lib/utils";
import { routes } from "./routes";
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
              to={`/admin/${item.path}`}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-4 px-4 py-2 font-medium text-sm text-gray-200 hover:text-th-primary relative",
                  isActive ? "text-th-primary active" : ""
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
