import ProductCarousel from "./ProductCarousel";
import { useLocationState } from "@/hooks/hooks";
import { formatAmount } from "@/lib/utils";
import { Product } from "@/redux/api/product/product.type";
import ReviewsTable from "../Reviews/ReviewsTable";
import { ButtonBack } from "@/components/ui/button";

const DetailProduct = () => {
	const item = useLocationState<Product>(undefined);

	return (
		<div>
			<div className="flex items-center gap-2 mb-12">
				<ButtonBack />
				<h1 className="text-dark font-medium text-xl">
					Détail du produit
				</h1>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-3 px-3 py-2 mb-12">
				<div className=" overflow-hidden">
					<ProductCarousel
						images={[
							item?.main_image_url,
							...item?.product_media?.map(
								(item) => item.media_url
							),
						]}
					/>
				</div>
				<div className="col-span-2">
					<h5 className="text-lg text-dark font-medium mb-2">
						{item?.name}
					</h5>
					<p className="text-th-gray mb-4">
						{formatAmount(item?.price)}
					</p>
					<div
						className="text-dark font-normal text-sm mb-5"
						dangerouslySetInnerHTML={{
							__html: item?.description,
						}}
					/>
					<div>
						<p>
							Dimensions:{" "}
							{item?.product_dimensions?.length} x{" "}
							{item?.product_dimensions?.width} x{" "}
							{item?.product_dimensions?.height}
						</p>
						<p>Poids: {item?.product_weight} kg</p>
					</div>
				</div>
			</div>
			{/* Product reviews */}
			<div className="mb-8">
				<h3 className="text-dark font-medium text-lg mb-4">
					Avis sur le produit
				</h3>
				<ReviewsTable reviews={item?.reviews} />
			</div>
		</div>
	);
};

export default DetailProduct;
