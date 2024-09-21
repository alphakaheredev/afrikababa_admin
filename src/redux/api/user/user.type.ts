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
};

export type UserFormData = Pick<
	User,
	"firstname" | "lastname" | "email" | "phone_number" | "role"
>;

export interface AuthState {
	user: User | null;
	token?: string | null;
}

