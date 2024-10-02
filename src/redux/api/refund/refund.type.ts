import { Order } from "../order/order.type";
import { User } from "../user/user.type";

export enum RefundStatus {
	PENDING = "PENDING",
	TRAITED = "TRAITED",
	IN_PROGRESS = "IN_PROGRESS",
}

export type Refund = {
	id: number;
	user: User;
	order: Order;
	amount: number;
	reason: string;
	status: RefundStatus;
	created_at: string;
};

export type RefundFormData = Pick<Refund, "amount" | "reason" | "status"> & {
	order_id: number;
	user_id: number;
};
