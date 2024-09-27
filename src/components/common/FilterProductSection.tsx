import { FilterSelect } from "@/components/ui/Select";
import { useGetCategorysListQuery } from "@/redux/api/category/category.api";
import { useGetShopsListQuery } from "@/redux/api/shop/shop.api";

interface Props {
	handleFilter: (
		e: React.ChangeEvent<HTMLSelectElement>,
		type: "category" | "shop"
	) => void;
}

const FilterProductSection: React.FC<Props> = ({ handleFilter }) => {
	const { data: shops } = useGetShopsListQuery({});
	const { data: categories } = useGetCategorysListQuery({});

	return (
		<div className="p-4 bg-white rounded shadow-md mb-12 mx-1">
			<div className="flex flex-col lg:flex-row gap-4 py-3 px-3">
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
