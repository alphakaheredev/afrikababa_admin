import { Shop } from "../shop/shop.type";
import { User } from "../user/user.type";

export type Chat = {
	id: number;
	user_id: number;
	shop_id: number;
	message: string;
	created_at: string;
	user: User;
	shop: Shop;
};

export type ChatFormData = {
	user_id?: number;
	shop_id?: number;
	conversation_id: number;
	message: string;
};

export type Conversation = {
	id: number;
	messages: Chat[];
	customer: User;
};
