import { User } from "../user/user.type";

export type LoginFormData = {
	email: string;
	password: string;
};

export type LoginResult = { user: User; token: string | null };

export type ChangePasswordData = {
	old_password: string;
	new_password: string;
	confirm_new_password: string;
};
