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
	products_count: number;
	orderitems_count: number;
	user: User;
	is_active: boolean;
	created_at: string;
};
