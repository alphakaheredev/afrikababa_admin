import { User } from "../user/user.type";
import { Shop } from "../shop/shop.type";

export type OrderStatus = "pending" | "accepted" | "rejected" | "delivered";

export type Order = {
	id: number;
	user_id: number;
	user: User;
	shop_id: number;
	shop: Shop;
	order_status: OrderStatus;
	created_at: string;
};
