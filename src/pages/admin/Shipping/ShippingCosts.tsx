import { ButtonAddLink, ButtonBack } from "@/components/ui/button";
import { addAdminPrefix } from "@/lib/utils";
import { adminPaths } from "@/routes/paths";
import ShippingCostTable from "./ShippingCostTable";

const ShippingCosts = () => {
	return (
		<>
			<div className="flex items-center justify-between mb-8">
				<div className="flex items-center gap-2">
					<ButtonBack />
					<h1 className="text-dark font-medium text-xl">
						Frais d’expédition
					</h1>
				</div>
				<div className="flex items-center justify-end gap-3 lg:w-2/3">
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
