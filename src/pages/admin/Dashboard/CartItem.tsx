import { Product } from "@/redux/api/product/product.type";
import { formatAmount, getImageUrl } from "@/lib/utils";
import { Link } from "react-router-dom";

const CartItem = ({ item }: { item: Product }) => {
	console.log(item);

	return (
		<Link
			to={`/admin/produits/${item?.id}`}
			className="flex items-start space-x-4"
			state={item}
		>
			<img
				src={getImageUrl(item?.main_image_url)}
				alt={item?.name}
				className="w-24 h-32 object-cover rounded"
			/>
			<div className="">
				<div>
					<h3 className="text-sm text-dark font-semibold">
						{item?.name}
					</h3>
					<p className="text-dark font-light text-sm">
						{formatAmount(item?.price)}
					</p>
				</div>
				{/* <div className="flex items-center gap-3 pt-4">
          <button>
            <AiOutlinePlusSquare fontSize={16} />
          </button>
            <p className="text-dark font-light text-sm">{item?.quantity}</p>
          <button>
            <AiOutlineMinusSquare fontSize={16} />
          </button>
        </div> */}
			</div>
			{/* <button>
				<IoMdCloseCircleOutline
					fontSize={18}
					className="text-th-gray"
				/>
			</button> */}
		</Link>
	);
};

export default CartItem;
