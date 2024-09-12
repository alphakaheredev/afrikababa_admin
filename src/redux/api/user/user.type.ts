export enum ROLE {
	admin = "ADMIN",
	supplier = "SUPPLIER",
	customer = "CUSTOMER",
}
export type User = {
	id: number;
	slug: string;
	firstname: string;
	lastname: string;
	email: string;
	phone_number: string;
	address: string;
	email_verified_at: string;
	role: ROLE;
	password: string;
	avatar_url: string;
	created_at: string;
	created_by: number;
};

export type UserFormData = Pick<
	User,
	"firstname" | "lastname" | "email" | "phone_number" | "address" | "role"
>;

export interface AuthState {
	user: User | null;
	token?: string | null;
}

export type PaginationResults<T> = {
	count?: number;
	next?: string | null;
	previous?: string | null;
	results: T[];
};

export type TypeQuery = Partial<{
	page?: number;
	limit?: number;
	q?: string;
	slug?: string;
}>;
