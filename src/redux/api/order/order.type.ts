import { User } from "../user/user.type";
import { Shop } from "../shop/shop.type";
import { Product } from "../product/product.type";
import { TypeQuery } from "@/lib/type";

export enum OrderStatus {
	PENDING = "PENDING",
	CONFIRMED = "CONFIRMED",
	IN_PROGRESS = "IN_PROGRESS",
	READY = "READY",
	IN_SHIPMENT = "IN_SHIPMENT",
	SHIPPED = "SHIPPED",
	DELIVERED = "DELIVERED",
	REJECTED = "REJECTED",
	CANCELLED = "CANCELLED",
	REFUNDED = "REFUNDED",
}

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
	order_items_code: string;
	shop: Shop;
	user: User;
	status: OrderStatus;
	status_transitaire: OrderStatus;
	created_at: string;
	destination_country: string;
};

export type OrderQuery = TypeQuery & {
	shop_id?: number;
	order_number?: string;
};
