import { InputSearch } from "@/components/ui/input";
import ReviewsTable from "./ReviewsTable";

const Reviews = () => {
	return (
		<>
			<div className="flex flex-col md:flex-row md:items-center gap-2 justify-between mb-8">
				<h3 className="text-dark font-semibold">
					Avis de magasin
				</h3>
				<div className="flex items-center justify-end gap-3 lg:w-2/3">
					<InputSearch placeholder="Recherchez par avis" />
				</div>
			</div>
			<ReviewsTable />
		</>
	);
};

export default Reviews;
