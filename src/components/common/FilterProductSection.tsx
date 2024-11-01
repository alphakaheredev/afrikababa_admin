import { FilterSelect } from "@/components/ui/Select";
import { useGetCategorysListQuery } from "@/redux/api/category/category.api";
import { useGetShopsListQuery } from "@/redux/api/shop/shop.api";
import { User } from "@/redux/api/user/user.type";
import { isSupplier } from "@/routes/routerUtils";

interface Props {
	handleFilter: (
		e: React.ChangeEvent<HTMLSelectElement>,
		type: "category" | "shop"
	) => void;
	user: User;
}

const FilterProductSection: React.FC<Props> = ({ handleFilter, user }) => {
	const { data: shops } = useGetShopsListQuery({});
	const { data: categories } = useGetCategorysListQuery({});

	return (
		<div className="p-4 bg-white rounded shadow-md mb-12 mx-1">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-3 px-3">
				{!isSupplier(user) && (
					<FilterSelect
						id="group"
						label="Filtre par boutique"
						options={[
							{ label: "Toutes", value: undefined },
							...(shops?.data?.map((shop) => ({
								label: shop.company_name,
								value: shop.id.toString(),
							})) || []),
						]}
						onChange={(e) => handleFilter(e, "shop")}
					/>
				)}
				<FilterSelect
					id="group"
					label="Filtre par catégorie"
					options={[
						{ label: "Toutes", value: undefined },
						...(categories?.data.map((category) => ({
							label: category.name,
							value: category.id.toString(),
						})) || []),
					]}
					onChange={(e) => handleFilter(e, "category")}
				/>
			</div>
		</div>
	);
};

export default FilterProductSection;  
