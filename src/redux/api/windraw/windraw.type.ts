import { Order } from "../order/order.type";
import { User } from "../user/user.type";

export type WindrawRequest = {
	id: number;
	user: User;
	order: Order;
	amount: number;
	reason: string;
	status: "pending" | "traited" | "rejected";
	created_at: string;
};

export type WindrawRequestFormData = Pick<
	WindrawRequest,
	"amount" | "reason" | "status"
> & {
	order_id: number;
	user_id: number;
};
