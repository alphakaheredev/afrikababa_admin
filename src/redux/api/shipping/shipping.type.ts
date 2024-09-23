import { Order } from "../order/order.type";

export type Shipping = {
	id: number;
	order: Order;
	payment_method: ShippingMethod;
	payment_amount: number;
	payment_status: string;
	created_at: string;
	tracking_number: string;
};

export interface ShippingMethod {
	id: number;
	method_name: string;
	description: string;
	logo: string;
	created_at: string;
}

export type ShippingMethodData = {
	method_name: string;
	description: string;
	logo: string;
};
