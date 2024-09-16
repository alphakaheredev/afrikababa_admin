import { Category } from "../category/category.type";
import { User } from "../user/user.type";

export type Shop = {
	id: number;
	company_name: string;
	sales_manager_name: string;
	company_registration: string;
	company_address: string;
	company_phonephone_number: string;
	email_address: string;
	company_website: string;
	logo_url: string;
	company_description: string;
	company_status: string;
	business_license: string;
	balance: string;
	dead_balance: string;
	bank_transfer_details: string;
	paypal_details: string;
	western_union_details: string;
	verified_at: string;
	total_product: number;
	total_order: number;
	user: User;
	created_at: string;
};

export type Product = {
	id: number;
	name: string;
	slug: string;
	shop_id: number;
	shop: Shop;
	description: string;
	price: string;
	quantity: number;
	sku: string;
	category_id: number;
	category: Category;
	status: string;
	product_length: number;
	product_height: number;
	product_weight: number;
	product_width: number;
	created_at: string;
	updated_at: string;
};
