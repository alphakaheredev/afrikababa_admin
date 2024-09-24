import { ButtonAddLink } from "@/components/ui/button";
import { InputSearch } from "@/components/ui/input";
import { addAdminPrefix } from "@/lib/utils";
import { adminPaths } from "@/routes/paths";
import ShippingCostTable from "./ShippingCostTable";

const ShippingCosts = () => {
	return (
		<>
			<div className="flex items-center justify-between mb-8">
				<h3 className="text-dark font-semibold">
					Frais d’expédition
				</h3>
				<div className="flex items-center justify-end gap-3 lg:w-2/3">
					<InputSearch placeholder="Recherchez par nom" />
					<ButtonAddLink
						to={addAdminPrefix(
							adminPaths.addShippingCost
						)}
					>
						Ajouter les Frais d’expédition
					</ButtonAddLink>
				</div>
			</div>
			<ShippingCostTable />
		</>
	);
};

export default ShippingCosts;
