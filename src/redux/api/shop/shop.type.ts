import { User } from "../user/user.type";

export type Shop = {
	id: number;
	company_name: string;
	sales_manager_name: string;
	company_registration: string;
	company_address: string;
	phone_number: string;
	email_address: string;
	company_website: string;
	logo: string;
	logo_url: string;
	banner_url: string;
	company_description: string;
	company_status: string;
	business_license: string;
	balance: string;
	dead_balance: string;
	bank_transfer_details: string;
	paypal_details: string;
	western_union_details: string;
	verified_at: string;
	products_count: number;
	orderitems_count: number;
	user: User;
	is_active: boolean;
	banner: string;
	city: string;
	address: string;
	description: string;
	created_at: string;
};

export type ShopFormData = {
	company_name: string;
	sales_manager_name: string;
	user_id: number;
	company_registration: string;
	address: string;
	phone_number: string;
	email_address: string;
	company_website: string;
	logo: File;
	description: string;
	status: string;
	balance?: string;
	dead_balance?: string;
	bank_transfer_details?: string;
	paypal_details?: string;
	western_union_details?: string;
	is_active?: boolean;
	banner?: File;
	city?: string;
	business_license?: File;
};

export interface ShopStats {
	total_products: number;
	total_orders: number;
	total_sellers: number;
}