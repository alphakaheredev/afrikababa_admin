import { Shop } from "../shop/shop.type";
import { User } from "../user/user.type";

export type WindrawRequest = {
	id: number;
	user: User;
	shop: Shop;
	amount: number;
	payment_methode: string;
	status: "PENDING" | "TRAITED" | "REJECTED";
	created_at: string;
};

export type WindrawRequestFormData = Pick<
	WindrawRequest,
	"amount" | "payment_methode"
> & {
	shop_id: number;
};
