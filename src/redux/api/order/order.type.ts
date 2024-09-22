import { User } from "../user/user.type";
import { Product, Shop } from "../shop/shop.type";

export type OrderStatus = "PENDING" | "ACCEPTED" | "REJECTED" | "DELIVERED";

export type Order = {
	id: number;
	order_number: string;
	user: User;
	shop: Shop;
	order_items: OrderItem[];
	status: OrderStatus;
	total_price: number;
	created_at: string;
};

export type OrderItem = {
	id: number;
	product: Product;
	quantity: number;
	price: number;
};
