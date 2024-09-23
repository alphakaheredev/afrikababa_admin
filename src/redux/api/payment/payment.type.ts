import { Order } from "../order/order.type";

export type Payment = {
	id: number;
	order: Order;
	payment_method: PaymentMethod;
	payment_amount: number;
	payment_status: string;
	created_at: string;
	tracking_number: string;
};

export interface PaymentMethod {
	id: number;
	method_name: string;
	description: string;
	logo: string;
	created_at: string;
}

export type PaymentMethodData = {
	method_name: string;
	description: string;
	logo: string;
};
