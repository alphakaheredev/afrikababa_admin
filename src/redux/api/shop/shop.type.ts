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
