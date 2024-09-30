import { ButtonAddLink } from "@/components/ui/button";
import { InputSearch } from "@/components/ui/input";
import { addAdminPrefix } from "@/lib/utils";
import { adminPaths } from "@/routes/paths";
import ShippingTable from "./ShippingTable";

const Shippings = () => {
  return (
		<>
			<div className="flex flex-col md:flex-row md:items-center gap-2 justify-between mb-8">
				<h3 className="text-dark font-semibold">Expéditions</h3>
				<div className="flex items-center flex-col md:flex-row justify-end gap-3 lg:w-2/3">
					<InputSearch placeholder="Recherchez par nom" />
					<ButtonAddLink
						to={addAdminPrefix(
							adminPaths.shippingCosts
						)}
					>
						Frais d’expéditions
					</ButtonAddLink>
				</div>
			</div>
			<ShippingTable />
		</>
  );
};

export default Shippings;
