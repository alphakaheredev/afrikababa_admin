import { ROLE, User } from "../user/user.type";

export type LoginFormData = {
	email: string;
	password: string;
};

export type RegisterFormData = {
	firstname: string;
	lastname: string;
	email: string;
	phone_number: string;
	password: string;
	password_confirmation: string;
	adresse: string;
	role?: ROLE;
};

export type LoginResult = { user: User; access_token: string | null };

export type ChangePasswordData = {
	old_password: string;
	new_password: string;
	confirm_new_password: string;
};

export type ResetPasswordData = {
	email: string;
	password: string;
	password_confirmation: string;
};

export type ForgotPasswordData = {
	email: string;
};