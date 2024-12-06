import { Shop } from "../shop/shop.type";

export enum ROLE {
	admin = "ADMIN",
	supplier = "SUPPLIER",
	customer = "CUSTOMER",
	forwarder = "FORWARDER",
}

export type User = {
	id: number;
	slug: string;
	firstname: string;
	lastname: string;
	email: string;
	phone_number: string;
	email_verified_at: string;
	role: ROLE;
	password: string;
	avatar_url: string;
	created_at: string;
	status: number;
	adresse?: string;
	country?: string;
	shop?: Shop;
};

export type UserFormData = Pick<
	User,
	| "firstname"
	| "lastname"
	| "email"
	| "phone_number"
	| "role"
	| "adresse"
	| "country"
> & { avatar?: File };

export interface AuthState {
	user: User | null;
	shop?: Shop | null;
	token?: string | null;
}


export interface CountryForwarder {
	forwarder: User;
	country: string;
	id: number;
	created_at: string;
	updated_at: string;
}
